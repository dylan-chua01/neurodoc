'use client';

import UploadFormInput from "./upload-form-input";
import { z } from 'zod';

const schema = z.object({
    file: z.instanceof(File, {message: 'Invalid file'}).refine((file) => file.size <= 20 * 1024 * 1024,
        'File size must be less than 20MB',
    ).refine((file) => file.type.startsWith('application/pdf'),
    'File must be a pdf'
    ),
});

export default function UploadForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submitted');
        const formData = new FormData(e.currentTarget);
        const file = formData.get('file') as File;

        //validating fields
        const validatedFields = schema.safeParse({ file });

        console.log(validatedFields);

        if(!validatedFields.success) {
            console.log(validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid file');
        return;
        }
        //schema with zod
        //upload file to uploadthing
        //parse pdf using lang chain
        //summarise using ai
        //save summary to db
        //redirect to [id] summary page
    };
    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadFormInput onSubmit={handleSubmit} />
        </div>
    )
}