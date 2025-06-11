import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";
import { GoogleGenAI } from "@google/genai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PromptTemplate } from "@langchain/core/prompts";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ConversationalRetrievalQAChain } from "langchain/chains";

// Check for API key
if (!process.env.GEMINI_API_KEY) {
  throw new Error("❌ Missing GEMINI_API_KEY. Please define it in .env.local");
}

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export const generateSummaryFromGemini = async (pdfText: string) => {
  try {
    const prompt = `${SUMMARY_SYSTEM_PROMPT}

Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:

${pdfText}`;

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    // Some SDKs may return .candidates[0].content.parts[0].text instead of .text
    const summary = (response as any)?.text ||
                    (response as any)?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!summary) {
      throw new Error("❌ Empty response from Gemini API");
    }

    return summary;

  } catch (error: any) {
    // Handle Gemini rate limit
    if (error?.status === 429) {
      throw new Error("❌ RATE_LIMIT_EXCEEDED");
    }

    // Full error trace
    console.error("🚨 Gemini API Error:", {
      message: error.message,
      stack: error.stack,
      cause: error.cause,
      error,
    });

    throw error;
  }
};

export async function generateQuestions(summaryText: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `
You are a quiz generator. Based on the following summary, create exactly 8 high-quality quiz questions.
Mix multiple-choice questions (4 options each) with short-answer questions.

IMPORTANT FORMATTING RULES:
- Start each question with "QUESTION:" followed by the question text
- For multiple-choice, list options as "OPTION A:", "OPTION B:", etc.
- End each question with "ANSWER:" followed by the correct answer
- For MCQ answers, use just the letter (A, B, C, or D)
- For short answers, provide a concise but complete answer
- Separate each question with "---"

Example format:
QUESTION: What is the capital of France?
OPTION A: Berlin
OPTION B: Madrid  
OPTION C: Paris
OPTION D: Rome
ANSWER: C

---

QUESTION: Explain the main benefit of renewable energy.
ANSWER: Renewable energy sources like solar and wind are sustainable and don't deplete natural resources, making them environmentally friendly alternatives to fossil fuels.

---

Summary to create questions from:
${summaryText}

Generate the questions now:`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Parse the structured response
    const questionBlocks = text.split('---').filter(block => block.trim());
    
    const parsed = questionBlocks.map((block) => {
      const lines = block.trim().split('\n').filter(line => line.trim());
      
      let question = '';
      let options: string[] = [];
      let answer = '';
      
      for (const line of lines) {
        const trimmedLine = line.trim();
        
        if (trimmedLine.startsWith('QUESTION:')) {
          question = trimmedLine.replace('QUESTION:', '').trim();
        } else if (trimmedLine.startsWith('OPTION')) {
          const optionText = trimmedLine.replace(/OPTION [A-D]:\s*/, '').trim();
          if (optionText) options.push(optionText);
        } else if (trimmedLine.startsWith('ANSWER:')) {
          answer = trimmedLine.replace('ANSWER:', '').trim();
        }
      }
      
      // Validate the parsed question
      if (!question || !answer) {
        return null;
      }
      
      // For MCQ, ensure we have 4 options and the answer is a letter
      if (options.length === 4 && ['A', 'B', 'C', 'D'].includes(answer)) {
        return {
          question,
          options,
          answer,
          type: 'mcq'
        };
      }
      
      // For short answer, ensure no options and answer is substantial
      if (options.length === 0 && answer.length > 10) {
        return {
          question,
          options: [],
          answer,
          type: 'short'
        };
      }
      
      return null;
    }).filter(Boolean);

    // Ensure we have at least some valid questions
    if (parsed.length === 0) {
      throw new Error("No valid questions could be parsed from the response");
    }

    return parsed;
    
  } catch (error) {
    console.error("Error generating questions:", error);
    
    // Fallback: generate simpler questions
    try {
      return await generateFallbackQuestions(summaryText);
    } catch (fallbackError) {
      console.error("Fallback question generation also failed:", fallbackError);
      throw new Error("Failed to generate quiz questions");
    }
  }
}

// Fallback question generator with simpler format
async function generateFallbackQuestions(summaryText: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  
  const prompt = `
Create 5 simple questions about this summary. Make them clear and answerable.

Format each as:
Q1: [question]
A1: [answer]

Q2: [question] 
A2: [answer]

Summary: ${summaryText}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  
  const questions = [];
  const lines = text.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.match(/^Q\d+:/)) {
      const question = line.replace(/^Q\d+:\s*/, '').trim();
      const nextLine = lines[i + 1]?.trim();
      
      if (nextLine && nextLine.match(/^A\d+:/)) {
        const answer = nextLine.replace(/^A\d+:\s*/, '').trim();
        
        if (question && answer) {
          questions.push({
            question,
            options: [],
            answer,
            type: 'short'
          });
        }
      }
    }
  }
  
  return questions;
}