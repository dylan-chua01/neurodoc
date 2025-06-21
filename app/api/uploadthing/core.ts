import { UploadThingError } from "uploadthing/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { currentUser } from "@clerk/nextjs/server";

const f = createUploadthing();

export const ourFileRouter = {
    pdfUpLoader: f({pdf: {maxFileSize: '32MB'}}).
    middleware(
        async({ req }) => {
            //user info
            const user = await currentUser();

            if(!user) throw new UploadThingError('Unauthorised');

            return{ userId: user.id };
    }
    //@ts-ignore because it still works
).onUploadComplete(async ({metadata, file}) => {
    console.log('upload completed for user id', metadata.userId);
    console.log('file url', file.url);
    return { userId: metadata.userId, file };
}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;