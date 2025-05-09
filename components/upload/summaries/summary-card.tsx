// summary-card.tsx
import { Card } from "@/components/ui/card";
import DeleteButton from "./delete-button";
import Link from "next/link";
import { FileText, Clock, ArrowRight, Check, Loader } from "lucide-react";
import { format, formatDistanceToNow, isAfter, subDays } from "date-fns";
import { cn, formatFileName } from "@/lib/utils";

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
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <DeleteButton summaryId={summary.id} />
      </div>
      
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
    </Card>
  );
}