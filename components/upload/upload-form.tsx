'use client';

import { useUploadThing } from "@/utils/uploadthing";
import UploadFormInput from "./upload-form-input";
import { z } from 'zod';
import { toast } from "sonner"; // correct import
import { generatePdfSummary, storePdfSummaryAction } from "@/actions/upload-actions";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const schema = z.object({
  file: z.instanceof(File, { message: 'Invalid file' })
    .refine((file) => file.size <= 20 * 1024 * 1024, 'File size must be less than 20MB')
    .refine((file) => file.type.startsWith('application/pdf'), 'File must be a PDF'),
});

export default function UploadForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { startUpload } = useUploadThing('pdfUpLoader', {
    onClientUploadComplete: () => {
      console.log('Uploaded successfully!');
    },
    onUploadError: (err) => {
      console.error('Error occurred while uploading', err);
    },
    onUploadBegin: (fileName) => {
      console.log('Upload has begun for', fileName);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const formData = new FormData(e.currentTarget);
      const file = formData.get('file') as File;

      const validatedFields = schema.safeParse({ file });

      console.log('Validation result:', validatedFields);

      if (!validatedFields.success) {
        toast.error('Invalid file', {
          description: validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Please upload a valid PDF',
        });
        setIsLoading(false);
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
        setIsLoading(false);
        return;
      }

      toast.success('📑 File uploaded!', {
        description: 'Now processing your PDF...',
      });

      const result = await generatePdfSummary(resp);

      if (result) {
        const { data = null } = result;

        if (data) {
          let storeResult: any;
          toast.success('📑 Saving PDF...', {
            description: 'Hang tight! We are saving your summary!...',
          });
          formRef.current?.reset();
          if (data.summary) {
            storeResult = await storePdfSummaryAction({
              summary: data.summary,
              fileUrl: resp[0].serverData.file.url,
              title: data.title,
              fileName: file.name,
            });

            toast.success('Summary Generated!', {
              description: 'Your PDF has been successfully summarised and saved!',
            });

            formRef.current?.reset();
            router.push(`/summaries/${storeResult.data.id}`);
          }
        }
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error occurred', error);
      formRef.current?.reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput isLoading={isLoading} ref={formRef} onSubmit={handleSubmit} />
    </div>
  );
}
