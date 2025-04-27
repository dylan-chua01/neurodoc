'use client';

import { useUploadThing } from "@/utils/uploadthing";
import UploadFormInput from "./upload-form-input";
import { z } from 'zod';
import { toast } from "sonner"; // <-- correct import (use `toast`, not `useSonner`)

const schema = z.object({
  file: z.instanceof(File, { message: 'Invalid file' })
    .refine((file) => file.size <= 20 * 1024 * 1024, 'File size must be less than 20MB')
    .refine((file) => file.type.startsWith('application/pdf'), 'File must be a PDF'),
});

export default function UploadForm() {
    const { startUpload } = useUploadThing('pdfUpLoader', {
        onClientUploadComplete: () => {
          console.log('uploaded successfully!');
        },
        onUploadError: (err) => {
          console.error('error occurred while uploading', err);
        },
        onUploadBegin: (fileName) => {
          console.log('upload has begun for', fileName);
        },
      });
      

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('📨 Form submitted');
    
    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File;

    const validatedFields = schema.safeParse({ file });

    console.log('Validation result:', validatedFields);

    if (!validatedFields.success) {
      toast.error('Invalid file', {
        description: validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Please upload a valid PDF',
      });
      return;
    }

    const uploadToast = toast.loading('📄 Uploading PDF...', {
      description: 'Please wait while we process your file...',
    });

    const resp = await startUpload([file]);

    toast.dismiss(uploadToast);

    if (!resp) {
      toast.error('❌ Upload failed', {
        description: 'Please try again with a different file',
      });
      return;
    }

    toast.success('📑 File uploaded!', {
      description: 'Now processing your PDF...',
    });

    // continue to parse, summarize, save to DB, etc.
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
