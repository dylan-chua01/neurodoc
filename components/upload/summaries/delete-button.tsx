'use client';

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from '@/components/ui/dialog';
import { useState, useTransition } from "react";
import { deleteSummaryAction } from "@/actions/summary-actions";
import { toast } from "sonner";

interface DeleteButtonProps {
    summaryId: string;
}

export default function DeleteButton({ summaryId }: DeleteButtonProps) {
    const [open, setOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleDelete = async () => {
        startTransition(async() => {
        const result = await deleteSummaryAction({ summaryId });
        if(!result.success) {
            toast.error('Error', {
                description: 'Failed to delete summary',
              });
              return;
        }
        setOpen(false);
    });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button 
                    variant="ghost"
                    size="icon"
                    className="
                        text-gray-500 
                        hover:text-white 
                        hover:bg-rose-500 
                        transition-colors
                        duration-200
                        shadow-sm
                        hover:shadow-md
                        rounded-lg
                        border
                        border-gray-200
                        hover:border-rose-500
                        bg-white
                    "
                >
                <Trash2 className="w-4 h-4" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Summary</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete you account and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button 
                    variant="ghost"
                    className="
                        px-2
                        hover:text-white 
                        hover:bg-rose-500 
                        transition-colors
                        duration-200
                        shadow-sm
                        hover:shadow-md
                        rounded-lg
                        border
                        border-gray-200
                        hover:border-rose-500
                        bg-white
                    "
                    onClick={() => setOpen(false)}
                >
                    Cancel
                </Button>
                <Button 
                    variant="destructive"
                    className="
                        bg-gray-900
                        hover:bg-gray-600
                    "
                    onClick={handleDelete}
                >
                    {isPending ? 'Deleting...': 'Delete'}
                </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}