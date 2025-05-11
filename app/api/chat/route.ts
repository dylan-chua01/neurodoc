import { NextResponse } from 'next/server';
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { ConversationalRetrievalQAChain } from 'langchain/chains';
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { getVectorStore } from '@/lib/db';
import { AIMessage, HumanMessage } from '@langchain/core/messages';

export async function POST(req: Request) {
  try {
    const { fileUrl, question, chatHistory = [] } = await req.json();
    console.log('Request data:', { fileUrl, question, chatHistory });

    if (!question || typeof question !== 'string') {
      return NextResponse.json(
        { error: "Invalid or missing question" },
        { status: 400 }
      );
    }

    if (!fileUrl || typeof fileUrl !== 'string') {
      return NextResponse.json(
        { error: "Invalid file URL" },
        { status: 400 }
      );
    }

    // 1. Get PDF from URL
    const fileResponse = await fetch(fileUrl);
    if (!fileResponse.ok) throw new Error(`Failed to fetch PDF: ${fileResponse.statusText}`);
    const fileData = await fileResponse.blob();

    // 2. Load and split PDF
    const loader = new PDFLoader(fileData, { splitPages: true });
    const rawDocs = await loader.load();
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
    const docs = await textSplitter.splitDocuments(rawDocs);

    // 3. Create/retrieve vector store
    const vectorStore = await getVectorStore(fileUrl);
    await vectorStore.addDocuments(docs);

    // 4. Initialize Gemini
    const model = new ChatGoogleGenerativeAI({
      model: "gemini-2.0-flash",
      maxOutputTokens: 2048,
      apiKey: process.env.GEMINI_API_KEY!
    });

    // 5. Create QA chain
    const chain = ConversationalRetrievalQAChain.fromLLM(
      model,
      vectorStore.asRetriever(3),
      { returnSourceDocuments: true }
    );


    // 6. Get answer

    const formattedHistory = chatHistory.map((msg: string) => [
      new HumanMessage(msg),
      new AIMessage("") // Empty response since we don't have assistant replies in history
    ]).flat();
    
    const response = await chain.call({
      question: question.trim(),
      chat_history: formattedHistory
    });


    return NextResponse.json({
      answer: response.text,
      sources: response.sourceDocuments.map((doc: any) => ({
        page: doc.metadata.loc?.pageNumber || 1,
        content: doc.pageContent.substring(0, 200) + '...'
      }))
    });

    

  } catch (error) {
    console.error('API error details:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });
    return NextResponse.json(
      { 
        error: "Failed to process question",
      details: process.env.NODE_ENV === 'development' 
        ? error instanceof Error ? error.message : String(error)
        : undefined
      },
      { status: 500 }
    );
  }
}