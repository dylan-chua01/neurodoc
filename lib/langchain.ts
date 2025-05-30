import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { array } from "zod";
import { getVectorStore } from "./db";

export async function fetchAndExtractPdfText(fileUrl:string) {

    const response = await fetch(fileUrl);
    const blob = await response.blob();

    const arrayBuffer = await blob.arrayBuffer();

    const loader = new PDFLoader(new Blob([arrayBuffer]));

    const docs = await loader.load();
    //combine pages
    return docs.map((doc) => doc.pageContent).join('\n');
}

export async function ingestAndEmbedPDF(fileUrl: string) {
    const fileRes = await fetch(fileUrl);
    const blob = await fileRes.blob();
  
    const loader = new PDFLoader(blob, { splitPages: true });
    const docs = await loader.load();
  
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
  
    const splitDocs = await splitter.splitDocuments(docs);
    const vectorStore = await getVectorStore(fileUrl); // e.g. Chroma/Pinecone
    await vectorStore.addDocuments(splitDocs);
  
    return vectorStore.asRetriever();
  }