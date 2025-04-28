import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const generateSummaryFromGemini = async (pdfText: string) => {
  try {
    // Construct the prompt as a single text string
    const prompt = `${SUMMARY_SYSTEM_PROMPT}

Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:

${pdfText}`;

    // Pass the contents as an array with the correct structure
    const response = await ai.models.generateContent({
      model: "gemini-1.5-pro-002", // or "gemini-2.0-flash" for faster results
      contents: [
        { 
          parts: [{ text: prompt }],
          role: 'user' // Role is placed at the content level
        }
      ],
    });

    // Check if response.text is available
    if (!response.text) {
      throw new Error('Empty response from Gemini API');
    }

    // Return the generated summary text
    return response.text;

  } catch (error: any) {
    if (error?.status === 429) {
      throw new Error("RATE_LIMIT_EXCEEDED");
    }
    console.error("Gemini API Error:", error);
    throw error;
  }
};
