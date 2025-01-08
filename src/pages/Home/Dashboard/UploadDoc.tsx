import UploadCarMentainance from "@/components/UploadCarMentainance";

export default function UploadDoc() {
  return (
    <div className="flex justify-center items-center flex-col h-screen ">
      <p className="font-[600] text-[20px] leading-[24px] text-[#0A0B0A] mt-9">
        Upload Required Certificate
      </p>
      <div className=" mt-4 ">
        <UploadCarMentainance />
      </div>
    </div>
  );
}
