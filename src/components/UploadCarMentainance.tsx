import React, { useState } from "react";
import UploadFile from "./upload/UploadFile";
import UploadSuccess from "./upload/UploadSuccess";
import UploadLoading from "./upload/UploadLoading";

interface UploaderProps {
  onUpload: (file: File) => void;
  setUploaded: (upload: boolean) => void;
  setUploadedComplete: (uploadComplete: boolean) => void;
}

const UploadCarMentainance: React.FC<UploaderProps> = ({
  onUpload,
  setUploaded,
  setUploadedComplete,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadProgress(0); // Reset progress
      onUpload(selectedFile);
      simulateUpload(); // Simulate upload progress
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadProgress(0); // Reset progress
      onUpload(selectedFile);
      simulateUpload(); // Simulate upload progress
    }
  };

  const handleClearUpload = () => {
    setFile(null);
    setUploadSuccess(false);
    setUploadProgress(null); // Reset progress
    setUploaded(true);
    setUploadedComplete(false);
  };

  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10; // Increment progress
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setUploadSuccess(true);
        setUploadedComplete(true);
      }
    }, 200); // Simulate upload time
  };
  return (
    <>
      {uploadSuccess && file ? (
        <div>
          <UploadSuccess handleClearUpload={handleClearUpload} file={file} />
        </div>
      ) : uploadProgress !== null ? (
        <UploadLoading uploadProgress={uploadProgress} />
      ) : (
        <UploadFile
          handleFileChange={handleFileChange}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
        />
      )}
    </>
  );
};

export default UploadCarMentainance;
