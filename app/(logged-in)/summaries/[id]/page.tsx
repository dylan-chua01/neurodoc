// app/(logged-in)/summaries/[id]/page.tsx

import BgGradient from "@/components/common/bg-gradient";
import ChatSidebar from "@/components/common/chat-side-bar";
import NotesSection from "@/components/common/notes";
import { SourceInfo } from "@/components/upload/summaries/source-info";
import { SummaryHeader } from "@/components/upload/summaries/summary-header";
import { SummaryViewer } from "@/components/upload/summaries/summary-viewer";
import { getSummaryById } from "@/lib/summaries";
import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";

export default async function SummaryPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const { id } = params;
  const summary = await getSummaryById(id);
  const user = await currentUser();
  
  if (!summary) {
    return <div>Summary not found</div>;
  }

  const { 
    title, 
    summary_text, 
    file_name, 
    word_count, 
    created_at, 
    original_file_url,
  } = summary;

  const readingTime = Math.ceil((word_count || 0) / 200);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-[#f0fdf4]">
      <BgGradient className="from-[#006747]/20 via-[#007A53]/15 to-[#008D5E]/10" />
      
      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Main Content - Left Column */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Summary Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6 md:p-8">
            <SummaryHeader 
              title={title} 
              createdAt={created_at} 
              readingTime={readingTime} 
            />
            
            {file_name && (
              <div className="mt-6">
                <SourceInfo  
                  title={title}
                  summaryText={summary_text}
                  fileName={file_name}
                  createdAt={created_at}
                  originalFileUrl={original_file_url}
                />
              </div>
            )}
            
            <div className="mt-8">
              <Suspense fallback={<div className="h-64 w-full flex items-center justify-center">Loading summary...</div>}>
                <SummaryViewer summary={summary_text} />
              </Suspense>
            </div>
          </div>

          {/* Notes Section - Now below main content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6 border border-gray-100">
            <NotesSection 
              fileUrl={original_file_url} 
              userId={user?.id}
              className="min-h-[300px]" // Added minimum height
            />
          </div>
        </div>
        
        {/* Chat Sidebar - Right Column */}
        <div className="w-full lg:w-[400px] shrink-0">
          <div className="sticky top-6 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <ChatSidebar 
              fileUrl={original_file_url} 
              userId={user?.id}
              className="h-[600px]" // Fixed height for chat
            />
          </div>
        </div>
      </div>
    </div>
  );
}