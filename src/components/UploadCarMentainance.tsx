import React, { useState } from "react";
import UploadFile from "./upload/UploadFile";
import UploadSuccess from "./upload/UploadSuccess";
import UploadLoading from "./upload/UploadLoading";

interface UploaderProps {
  onUpload: (file: File) => void;
}

const UploadCarMentainance: React.FC<UploaderProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  //   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const selectedFile = event.target.files?.[0];
  //     if (selectedFile) {
  //       setFile(selectedFile);
  //       onUpload(selectedFile);
  //       // Simulate upload success (you'll replace this with actual upload logic)
  //       setTimeout(() => setUploadSuccess(true), 2000); // Simulating delay for upload
  //     }
  //   };

  //   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  //     event.preventDefault();
  //   };

  //   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
  //     event.preventDefault();
  //     const selectedFile = event.dataTransfer.files?.[0];
  //     if (selectedFile) {
  //       setFile(selectedFile);
  //       onUpload(selectedFile);
  //       setTimeout(() => setUploadSuccess(true), 2000); // Simulating delay for upload
  //     }
  //   };

  //   const handleClearUpload = () => {
  //     setFile(null);
  //     setUploadSuccess(false);
  //   };
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
  };

  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10; // Increment progress
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setUploadSuccess(true);
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
