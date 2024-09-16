import { createUploadthing } from 'uploadthing/server';
import type { FileRouter } from 'uploadthing/server';

const f = createUploadthing({
    /**
     * Log out more information about the error, but don't return it to the client
     * @see https://docs.uploadthing.com/errors#error-formatting
     */
    errorFormatter: (err) => {
        console.log('Error uploading file', err.message);
        console.log('  - Above error caused by:', err.cause);

        return { message: err.message };
    },
});

/**
 * This is your Uploadthing file router. For more information:
 * @see https://docs.uploadthing.com/api-reference/server#file-routes
 */
export const uploadRouter = {
    pdfFileRoute: f({
        pdf: {
            maxFileSize: '4MB',
            additionalProperties: {
                type: ['application/pdf'],
            },
        },
    })
        .middleware(({ req }) => {
            req;
            return {};
        })
        .onUploadComplete((data) => {
            console.log('upload completed', data);
            // Return some data which will be available in `onClientUploadComplete`
            return {};
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;
