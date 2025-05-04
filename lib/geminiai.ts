import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";
import { GoogleGenAI } from "@google/genai";

// Check for API key
if (!process.env.GEMINI_API_KEY) {
  throw new Error("❌ Missing GEMINI_API_KEY. Please define it in .env.local");
}

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateSummaryFromGemini = async (pdfText: string) => {
  try {
    const prompt = `${SUMMARY_SYSTEM_PROMPT}

Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:

${pdfText}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
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
