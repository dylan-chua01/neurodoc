import { Card} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

export default function LoadingSkeleton() {
    return (
        <Card className='relative px-2 h-[700px] w-[600px] max-w-lg mx-auto overflow-hidden bg-linear-to-br from-background via-background/95 to-rose-500/5 backdrop-blur-lg shadow-2xl rounded-3xl border border-rose-500/10'>
            <div className='absolute top-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-xs pt-4 pb-2 border-b border-rose-500/10'>
                <div className='px-4 flex gap-1.5'>
                    {[1, 2, 3].map((_, index) => (
                        <div 
                            key={index}
                            className='h-1.5 flex-1 rounded-full bg-rose-500/10 overflow-hidde'
                        >
                        <div
                            className={cn('h-full bg-linear-to-r from-gray-500 to-rose-600 animate-pulse', index === 0 ? 'w-full' : 'w-0')}
                        />
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    )
}