import { BreadcrumbComp } from "@/components/reuseable/BreadCrumbs";
import paymentIcon from "@/assets/icons/payment.svg";
import UploadCarMentainance from "@/components/UploadCarMentainance";
import HistoryPaymentNotification from "@/components/HistoryPaymentNotification";
import { useGetOrderDashboard, useGetUserProfile } from "@/hooks/query";
import SpinnerOverlay from "@/components/reuseable/OverlayLoader";
import { usePayInstallment } from "@/hooks/mutation";
import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
// import { useQueryClient } from "@tanstack/react-query";

const Order = () => {
  // const queryClient = useQueryClient(); //To refresh the user data

  const userId = localStorage.getItem("user_id");
  // Soft refresh: Refetches the data when the component mounts
  const {
    data: CarOrderBreakDown,
    isLoading: isOrderLoading,
    refetch,
    isError,
  } = useGetOrderDashboard(Number(userId));
  const { data: profile } = useGetUserProfile(Number(userId));
  const { mutate: nextInstallmentPayment, isPending: Nextpaymentpending } =
    usePayInstallment();

  const installments = CarOrderBreakDown?.installments;

  //Pay next Installment

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const tottalAmountPaid = CarOrderBreakDown?.summary_data?.total_amount_paid;
  const tottalAmountLeft = CarOrderBreakDown?.summary_data?.total_balance_left;
  //
  const weeklyPayment = CarOrderBreakDown?.cars.find(
    ({ weekly }: any) => weekly
  )?.weekly;
  const carName = CarOrderBreakDown?.cars.find(
    (item: any) => item.model
  )?.model;

  // const installmentNumber = CarOrderBreakDown?.installments.find(
  //   (item: any) => item.installment_number
  // )?.installment_number;
  const installmentStatus = CarOrderBreakDown?.installments.find(
    (item: any) => item.status
  )?.status;

  const AgreementId = CarOrderBreakDown?.agreement.agreementid; // Declare AgreementId with an initial value
  const AgreementUserId = CarOrderBreakDown?.agreement.user_id;
  const AgreementCarId = CarOrderBreakDown?.agreement.car_id;
  // g
  const paymentDate = CarOrderBreakDown?.installments.find(
    (item: any) => item.payment_date
  )?.payment_date;
  const dueDate = CarOrderBreakDown?.installments.find(
    (item: any) => item.due_date
  )?.due_date;
  const nextDueDate = CarOrderBreakDown?.installments.find(
    (item: any) => item.next_due_date
  )?.next_due_date;

  // console.log(
  //   carName,
  //   weeklyPayment,
  //   AgreementId,
  //   installmentNumber,
  //   paymentDate,
  //   AgreementUserId,
  //   profile
  // );

  const lastInstallment = CarOrderBreakDown?.installments.slice(-1)[0]; // Get the last installment

  const onPayNow = () => {
    const installmentPayment = {
      agreement_id: AgreementId || "",
      installment_number: lastInstallment?.installment_number || "", // Use last installment number
      user_id: AgreementUserId || 0,
      user_email: profile.email,
      user_name: `${profile.firstname} ${profile.lastname}` || "",
      user_phone: profile.phone || "",
      payment_date: paymentDate || 0,
      due_date: dueDate || 0,
      car_id: AgreementCarId || 0,
      lastInstallmentstatus: installmentStatus || "",
      next_due_date: nextDueDate,
      amount: weeklyPayment || 0,
    };
    nextInstallmentPayment(installmentPayment, {
      onSuccess: (response) => {
        // Destructure the response
        if (response) {
          // Send the entire response data to the userAgreement mutation
          window.open(response.payment_url, "_self");
        }
      },
      //
      onError: (error) => {
        console.error("Error renting the car:", error);
      },
    });
  };
  useEffect(() => {
    refetch(); // This will trigger a data re-fetch when the component mounts
  }, [refetch]);

  // useEffect(() => {
  //   queryClient.invalidateQueries({
  //     queryKey: ["order"],
  //     refetchType: "all", // refetch both active and inactive queries
  //   });
  // });

  return (
    <div className="md:mx-0 mx-3">
      {isOrderLoading && <SpinnerOverlay />}
      {Nextpaymentpending && <SpinnerOverlay />}
      <BreadcrumbComp item="My Order" color="#191919" sepCol="" />
      <p className=" font-[600] text-[24px] leading-[28.8px] text-[#0A0B0A]">
        Car Rental Order
      </p>

      <p
        className={`${
          isError
            ? ""
            : "px-2 py-3 w-fit my-5 text-[16px] leading-[19.2px] font-[600] text-[#191919] bg-[#D6EEFF]  rounded-sm"
        }`}
      >
        {isError ? "" : `${carName || ""}`}
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
                  ${isError ? 0 : `${tottalAmountPaid || 0}`}
                  {"  "}
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
                  ${isError ? 0 : `${weeklyPayment || 0}`}
                  {"  "}
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
                  ${isError ? 0 : `${tottalAmountLeft || 0}`}
                  {"  "}
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
            <button
              className={`px-12 py-3 text-[18px] leading-[21.6px] font-[600] text-[#FAFAFA]  rounded-md md:w-[30%] w-full ${
                isError
                  ? "cursor-not-allowed bg-[#D1D1D1]"
                  : "hover:bg-[#0998fecc] cursor-pointer  bg-[#0999FE]"
              }`}
              onClick={onPayNow}
              disabled={Nextpaymentpending || isError}
            >
              Pay Now
            </button>
          </div>

          <p className="flex items-center justify-center gap-3 mt-14 w-full font-[500] text-[16px] leading-[19.2px] text-[#FAFAFA]">
            {isError && (
              <>
                <AlertCircle />
                No order available!
              </>
            )}
          </p>
        </div>
        {/*  */}
        {/* payment history */}
        {/*  */}
        <HistoryPaymentNotification
          installments={installments}
          isError={isError}
        />
        {/*  */}
        <div>
          <p className="font-[600] text-[20px] leading-[24px] text-[#0A0B0A] mt-9">
            Comprehensive Insurance Certificate
          </p>
          <div className=" mt-4 ">
            <UploadCarMentainance />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
