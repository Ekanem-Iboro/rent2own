import { Trash2 } from "lucide-react";
interface successUpload {
  handleClearUpload: () => void;
  file: File;
}
export default function UploadSuccess({
  handleClearUpload,
  file,
}: successUpload) {
  return (
    <div className="border-2 border-dashed border-[#5FC381] rounded-lg p-6 flex flex-col items-center justify-center w-full min-h-64 bg-[#FFFFFF] mb-[15%]">
      <div className="flex flex-col items-center text-center">
        <div className="w-[50px] h-[50px] bg-green-100 flex justify-center items-center rounded-full mb-4">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 31.125C25.2487 31.125 31.125 25.2487 31.125 18C31.125 10.7513 25.2487 4.875 18 4.875C10.7513 4.875 4.875 10.7513 4.875 18C4.875 25.2487 10.7513 31.125 18 31.125ZM23.36 16.1588C23.9539 15.6148 23.9944 14.6923 23.4505 14.0984C22.9065 13.5044 21.984 13.4639 21.39 14.0079L16.0058 18.9391L14.61 17.6608C14.016 17.1168 13.0935 17.1573 12.5496 17.7513C12.0056 18.3452 12.0461 19.2677 12.64 19.8117L15.0208 21.9921C15.5782 22.5026 16.4333 22.5026 16.9907 21.9921L23.36 16.1588Z"
              fill="#0F973D"
            />
          </svg>
        </div>
        <p className="text-[#1D2739] text-[16px] leading-[19.2px] font-[600] mb-2">
          Uploading Complete
        </p>
        {file && <p className=" text-sm text-gray-700"> {file.name}</p>}
        <button
          onClick={handleClearUpload}
          className="mt-4 text-gray-500 text-sm underline flex items-center gap-2"
        >
          <Trash2 />
          Clear Upload
        </button>
      </div>
    </div>
  );
}
