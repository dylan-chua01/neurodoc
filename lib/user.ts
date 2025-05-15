import { pricingPlans } from "@/utils/constants";
import { getDbConnection } from "./db";
import { getUserUploadCount } from "./summaries";
import { User } from "@clerk/nextjs/server";
import { db } from "./db"; // Make sure you have this import

export async function getPriceIdForActiveuser(email: string) {
  const sql = await getDbConnection();
  const query = await sql`SELECT price_id FROM users WHERE email = ${email} AND status = 'active'`;
  return query?.[0]?.price_id || null;
}

export async function hasActivePlan(email: string) {
  const sql = await getDbConnection();
  const query = await sql`SELECT price_id, status FROM users WHERE email = ${email} AND status = 'active' AND price_id IS NOT NULL`;
  return query && query.length > 0;
}

export async function hasReachedUploadLimit(userId: string) {
  const uploadCount = await getUserUploadCount(userId);
  const priceId = await getPriceIdForActiveuser(userId);
  const isPro = pricingPlans.find((plan) => plan.priceId === priceId)?.id === 'pro';
  const uploadLimit: number = isPro ? 1000 : 5;
  return { hasReachedLimit: uploadCount >= uploadLimit, uploadLimit };
}

export async function getSubscriptionStatus(user: User) {
  if (!user.emailAddresses?.[0]?.emailAddress) {
    return false;
  }
  return await hasActivePlan(user.emailAddresses[0].emailAddress);
}

export async function checkChatLimit(userId: string, fileUrl: string) {
  try {
    // Get user's plan limits
    const planResult = await db.query(
      `SELECT chat_limit FROM user_plans WHERE user_id = $1`,
      [userId]
    );
    const chatLimit = planResult.rows[0]?.chat_limit || 20;

    // Get current usage
    const usageResult = await db.query(
      `SELECT COUNT(*) as count FROM chat_history 
       WHERE user_id = $1 AND file_url = $2 
       AND created_at > NOW() - INTERVAL '24 hours'`,
      [userId, fileUrl]
    );
    const currentUsage = parseInt(usageResult.rows[0]?.count || '0', 10);

    return {
      hasReachedLimit: currentUsage >= chatLimit,
      chatLimit,
      currentUsage
    };
  } catch (error) {
    console.error('Error checking chat limit:', error);
    // Fail open in production, closed in development
    return {
      hasReachedLimit: process.env.NODE_ENV === 'development',
      chatLimit: 20,
      currentUsage: 0
    };
  }
}

export async function incrementChatUsage(userId: string, fileUrl: string) {
  try {
    await db.query(
      `INSERT INTO chat_history (user_id, file_url, created_at) 
       VALUES ($1, $2, NOW())`,
      [userId, fileUrl]
    );
  } catch (error) {
    console.error('Error incrementing chat usage:', error);
    // Even if usage tracking fails, we shouldn't block the user
  }
}