import { BreadcrumbComp } from "@/components/reuseable/BreadCrumbs";
import paymentIcon from "@/assets/icons/payment.svg";
import UploadCarMentainance from "@/components/UploadCarMentainance";
import HistoryPaymentNotification from "@/components/HistoryPaymentNotification";

const Order = () => {
  const handleUpload = (file: File) => {
    console.log("Uploaded file:", file);
    // Handle file upload logic here
  };

  return (
    <div className="md:mx-0 mx-3">
      <BreadcrumbComp item="My Order" color="#191919" path="/home" sepCol="" />
      <p className=" font-[600] text-[24px] leading-[28.8px] text-[#0A0B0A]">
        Car Rental Order
      </p>

      <p className="text-[16px] leading-[19.2px] font-[600] text-[#191919] bg-[#D6EEFF] px-2 py-3 w-fit my-5 rounded-sm">
        0i30 GO PD MY19 4D Hatchback
      </p>
      <section className="lg:mr-[5%] ">
        <div className=" md:bg-[url('assets/images/orderDesktop.png')] bg-[url('assets/images/orderMobile.png')] md:rounded-t-[35px] rounded-t-xl bg-no-repeat bg-cover md:min-h-[324px] w-full min-h-[745px] mt-11  py-11 lg:px-14 px-4">
          <div className="w-full md:flex flex-col block items-center justify-center">
            <p className="md:text-[30px] text-[24px] md:leading-[30px] leading-[28.8px] font-[600] text-[#FFFFFF]">
              Car Payment Breakdown
            </p>
            <div className="flex items-center mt-6 gap-2">
              <input
                type="checkbox"
                className="w-[20px] h-[20px] accent-[#FFFFFF]"
              />
              <label
                htmlFor="automaticpayment"
                className="md:text-[16px] text-[14px] md:leading-[19.2px] leading-[16.8px] font-[500] text-[#FAFAFA]"
              >
                Automatic Weekly Deduction (Optional){" "}
              </label>
            </div>
          </div>
          <div className="mt-14 flex md:flex-row flex-col md:items-center gap-y-14 justify-between">
            {/*  */}
            <div className="flex  gap-2">
              <img
                src={paymentIcon}
                alt="payment icon"
                className="h-[24px] w-[24px]"
              />
              <div>
                <p className="text-[16px] leading-[19.2px] font-[500] text-[#FAFAFA]">
                  Total Amount Paid
                </p>
                <p className="md:text-[36px]  text-[30px] md:leading-[43.2px] leading-[36px] font-[600] text-[#FFFFFF] mt-3">
                  $0{" "}
                  <span className="md:text-[20px] text-[16px]  md:leading-[24px] leading-[19.2px] font-[500]">
                    .00
                  </span>
                </p>
              </div>
            </div>
            {/*  */}

            <div className="flex  gap-2">
              <img
                src={paymentIcon}
                alt="payment icon"
                className="h-[24px] w-[24px]"
              />
              <div>
                <p className="text-[16px] leading-[19.2px] font-[500] text-[#FAFAFA]">
                  Weekly Payment
                </p>
                <p className="md:text-[36px]  text-[30px] md:leading-[43.2px] leading-[36px] font-[600] text-[#FFFFFF] mt-3">
                  $0{" "}
                  <span className="md:text-[20px] text-[16px]  md:leading-[24px] leading-[19.2px] font-[500]">
                    .00
                  </span>
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex  gap-2">
              <img
                src={paymentIcon}
                alt="payment icon"
                className="h-[24px] w-[24px]"
              />
              <div>
                <p className="text-[16px] leading-[19.2px] font-[500] text-[#FAFAFA]">
                  Total Balance Left
                </p>
                <p className="md:text-[36px]  text-[30px] md:leading-[43.2px] leading-[36px] font-[600] text-[#FFFFFF] mt-3">
                  $0{" "}
                  <span className="md:text-[20px] text-[16px]  md:leading-[24px] leading-[19.2px] font-[500]">
                    .00
                  </span>
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex  gap-2">
              <img
                src={paymentIcon}
                alt="payment icon"
                className="h-[24px] w-[24px]"
              />
              <div>
                <p className="text-[16px] leading-[19.2px] font-[500] text-[#FAFAFA]">
                  Total Accrued Interest
                </p>
                <p className="md:text-[36px]  text-[30px] md:leading-[43.2px] leading-[36px] font-[600] text-[#FFFFFF] mt-3">
                  $0{" "}
                  <span className="md:text-[20px] text-[16px]  md:leading-[24px] leading-[19.2px] font-[500]">
                    .00
                  </span>
                </p>
              </div>
            </div>
            {/*  */}
          </div>

          <div className="flex items-center justify-center gap-x-10 mt-14 w-full">
            <button className="px-12 py-3 text-[18px] leading-[21.6px] font-[600] text-[#FAFAFA] bg-[#0999FE] rounded-md hover:bg-[#0998fecc] md:w-[30%] w-full">
              Pay Now
            </button>
          </div>
        </div>
        {/*  */}
        {/* payment history */}
        {/*  */}
        <HistoryPaymentNotification />
        {/*  */}
        <div>
          <p className="font-[600] text-[20px] leading-[24px] text-[#0A0B0A] mt-9">
            Upload Car Maintenance Invoice
          </p>
          <div className=" mt-4 ">
            <UploadCarMentainance
              onUpload={handleUpload}
              setUploaded={() => {}}
              setUploadedComplete={() => {}}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
