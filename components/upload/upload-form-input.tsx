'use client';

import { Button } from "../ui/button";
import { Input } from '../ui/input';

interface UploadFormInputProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function UploadFormInput({ onSubmit }: UploadFormInputProps) {
    return (
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Input 
                    id="file" 
                    type="file"
                    name="file" 
                    accept="application/pdf" 
                    required 
                    className="flex-1"
                />
                <Button type="submit" className="w-full sm:w-auto">
                    Upload PDF
                </Button>
            </div>
        </form>
    );
}