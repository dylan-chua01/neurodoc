import { Card } from "@/components/ui/card";
import DeleteButton from "./delete-button";
import Link from "next/link";
import { FileText, Clock, ArrowRight } from "lucide-react";
import { format, formatDistanceToNow, isAfter, subDays } from "date-fns";
import { cn, formatFileName } from "@/lib/utils";

const SummaryHeader = ({ fileUrl, title, createdAt }: {
    fileUrl: string,
    title: string | null,
    createdAt: string
}) => {
    const createdDate = new Date(createdAt);
    const now = new Date();
    
    // Show relative time if less than 24 hours ago, otherwise show date
    const timeDisplay = isAfter(createdDate, subDays(now, 1)) 
        ? `${formatDistanceToNow(createdDate, { addSuffix: true })}`
        : format(createdDate, 'MMM dd, yyyy');
    
    return (
        <div className="flex items-start gap-3">
            <div className="bg-rose-50 p-2 rounded-lg">
                <FileText className="w-5 h-5 text-rose-500" />
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                    {title || formatFileName(fileUrl)}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <Clock className="w-4 h-4" />
                    <span>{timeDisplay}</span>
                </div>
            </div>
        </div>
    );
};

const StatusBadge = ({status}: {status: string}) => {
    return (
        <span className={cn(
            'px-3 py-1 text-xs font-medium rounded-full capitalize',
            status === 'completed' ? 'bg-green-100 text-green-800' : 
            status === 'processing' ? 'bg-blue-100 text-blue-800' :
            'bg-yellow-100 text-yellow-800'
        )}>
            {status}
        </span>
    );
};

export function SummaryCard({ summary }: { summary: any }) {
    return (
        <Card className="relative h-full overflow-hidden transition-all hover:shadow-md hover:-translate-y-1 group border border-gray-200">
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <DeleteButton summaryId={summary.id} />
            </div>
            
            <Link href={`summaries/${summary.id}`} className="block h-full">
                <div className="p-5 sm:p-6 h-full flex flex-col">
                    <SummaryHeader 
                        fileUrl={summary.original_file_url}
                        title={summary.title}
                        createdAt={summary.created_at} 
                    />
                    
                    <p className="text-gray-600 line-clamp-3 text-sm sm:text-base mt-4 mb-6 pl-1">
                        {summary.summary_text}
                    </p>

                    <div className="flex justify-between items-center mt-2 sm:mt-4">
                        <StatusBadge status={summary.status} />
                    </div>
                    
                    <div className="mt-auto pt-4 flex items-center text-rose-500 text-sm font-medium">
                        <span>View Summary</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </Link>
        </Card>
    )
}