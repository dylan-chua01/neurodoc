import BgGradient from "@/components/common/bg-gradient";
import ChatSidebar from "@/components/common/chat-side-bar";
import { SourceInfo } from "@/components/upload/summaries/source-info";
import { SummaryHeader } from "@/components/upload/summaries/summary-header";
import { SummaryViewer } from "@/components/upload/summaries/summary-viewer";
import { getSummaryById } from "@/lib/summaries";

export default async function SummaryPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const summary = await getSummaryById(params.id);
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
      <BgGradient className="from-[#006747]/10 via-[#007A53]/10 to-[#008D5E]/10" />
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <SummaryHeader 
            title={title} 
            createdAt={created_at} 
            readingTime={readingTime} 
          />
          {file_name && (
            <SourceInfo  
              title={title}
              summaryText={summary_text}
              fileName={file_name}
              createdAt={created_at}
              originalFileUrl={original_file_url}
            />
          )}
          <div className="mt-8 mr-60">
            <SummaryViewer summary={summary_text} />
          </div>
        </div>
        
        <div className="w-full lg:w-[320px] shrink-0">
          <ChatSidebar fileUrl={summary.original_file_url} />
        </div>
      </div>
    </div>
  );
}