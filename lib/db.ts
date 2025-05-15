// lib/db.ts
// "use server";
import { neon } from "@neondatabase/serverless";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { Pool } from "pg";


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const db = pool;
export async function getDbConnection() {
  if (!process.env.DATABASE_URL) {
    throw new Error('Neon Database URL is not defined');
  }
  return neon(process.env.DATABASE_URL);
}

export async function getVectorStore(fileUrl: string) {
    const embeddings = new GoogleGenerativeAIEmbeddings({
      modelName: "embedding-001",
      apiKey: process.env.GEMINI_API_KEY!
    });
  
    const config = {
      postgresConnectionOptions: {
        connectionString: process.env.DATABASE_URL!
      },
      tableName: "pdf_embeddings",
      columns: {
        idColumnName: "id",
        vectorColumnName: "embedding",
        contentColumnName: "content",
        metadataColumnName: "metadata",
      },
      filter: {
        original_file_url: fileUrl // Add filter to scope to this PDF
      }
    };
  
    return await PGVectorStore.initialize(embeddings, config);
  }