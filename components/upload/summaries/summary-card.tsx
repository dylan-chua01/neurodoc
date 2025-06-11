import { Card } from "@/components/ui/card";
import DeleteButton from "./delete-button";
import Link from "next/link";
import { FileText, Clock, ArrowRight, ArrowRightCircle, Brain } from "lucide-react";
import { format, formatDistanceToNow, isAfter, subDays } from "date-fns";
import { cn, formatFileName } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const StatusIndicator = ({ status }: { status: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={cn(
        'w-2.5 h-2.5 rounded-full',
        status === 'completed' ? 'bg-[#006747]' :
        status === 'processing' ? 'bg-amber-500 animate-pulse' :
        'bg-gray-400'
      )} />
      <span className={cn(
        'text-xs font-medium capitalize',
        status === 'completed' ? 'text-[#006747]' :
        status === 'processing' ? 'text-amber-600' :
        'text-gray-500'
      )}>
        {status}
      </span>
    </div>
  );
};

export function SummaryCard({ summary }: { summary: any }) {
  const createdDate = new Date(summary.created_at);
  const now = new Date();
  
  const timeDisplay = isAfter(createdDate, subDays(now, 1)) 
    ? `${formatDistanceToNow(createdDate, { addSuffix: true })}`
    : format(createdDate, 'MMM dd, yyyy');

  return (
    <Card className="relative h-full overflow-hidden transition-all hover:shadow-md hover:-translate-y-1 group border border-[#006747]/20">
      {/* Top-right buttons container */}
      <div className="absolute top-3 right-3 flex gap-2">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <DeleteButton summaryId={summary.id} />
        </div>
      </div>

      {/* Summary main content link */}
      <Link href={`summaries/${summary.id}`} className="block h-full">
        <div className="p-5 h-full flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <div className="bg-[#006747]/10 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-[#006747]" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {summary.title || formatFileName(summary.original_file_url)}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <Clock className="w-4 h-4 text-[#006747]/70" />
                <span>{timeDisplay}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 line-clamp-3 text-sm pl-1">
            {summary.summary_text}
          </p>

          <div className="mt-auto pt-2 flex justify-between items-center">
            <StatusIndicator status={summary.status} />
            <div className="flex items-center text-[#006747] text-sm font-medium group-hover:underline">
              <span>View Summary</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>

      {/* Quiz button placed outside of Link to avoid hydration error */}
      {summary.original_file_url && (
        <div className="transition-all justify-between items-center mt-2 ml-auto duration-300 transform translate-y-2 px-5 pb-4">
          <Button
            asChild
            className="relative bg-gradient-to-r from-emerald-300 to-teal-300 hover:from-emerald-400 hover:to-emerald-400 text-white shadow-lg transition-all duration-200 rounded-xl px-4 py-2 text-sm font-medium border-0 group/button"
          >
            <Link href={`summaries/${summary.id}/quiz`}>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-0 transition-opacity duration-200"></div>
              <div className="relative flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span style={{ color: "black" }}>Test Knowledge</span>
                <ArrowRightCircle className="w-4 h-4 transition-transform" />
              </div>
            </Link>
          </Button>
        </div>
      )}
    </Card>
  );
}
