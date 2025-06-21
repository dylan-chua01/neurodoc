import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import { generateQuestions } from "@/lib/geminiai";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const sql = await getDbConnection();
    const [summary] = await sql`
      SELECT title, summary_text FROM pdf_summaries WHERE id = ${params.id}
    `;

    if (!summary) {
      return NextResponse.json({ error: "Summary not found" }, { status: 404 });
    }

    // Generate questions with better error handling
    let questions;
    try {
      questions = await generateQuestions(summary.summary_text);
    } catch (error) {
      console.error("Error generating questions:", error);
      return NextResponse.json(
        { error: "Failed to generate quiz questions. Please try again." },
        { status: 500 }
      );
    }

    // Validate questions before returning - filter out null/undefined values first
    const validQuestions = questions
      .filter((q): q is NonNullable<typeof q> => q !== null && q !== undefined)
      .filter(q => 
        q.question &&
        q.question.trim() !== '' &&
        q.answer &&
        q.answer.trim() !== ''
      );

    if (validQuestions.length === 0) {
      return NextResponse.json(
        { error: "No valid questions could be generated from this summary." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      questions: validQuestions,
      summaryTitle: summary.title || "Untitled Summary"
    });
  } catch (error) {
    console.error("Error in quiz API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}