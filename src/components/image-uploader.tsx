import { UploadDropzone } from "~/utils/uploadthing";

export function ImageUploader() {
  return (
    <UploadDropzone
      endpoint="pdfFileRoute"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res);
        alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        console.log(error.stack);
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
