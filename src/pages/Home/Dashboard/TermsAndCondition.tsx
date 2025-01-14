// import { RentCarData } from "@/api/types";
// import Loader from "@/components/reuseable/Loader";
// import SpinnerOverlay from "@/components/reuseable/OverlayLoader";
// import {
//   //  useAgreementId,
//   useRentCar,
// } from "@/hooks/mutation";
// // import { useGetUserProfile } from "@/hooks/query";
// import useCarStore from "@/store/ProductStore";

import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";

// interface TermAndConForm {
//   termsandconditions: boolean;
// }
const TermsAndCondition = () => {
  // const { currentCar } = useCarStore();
  // const { mutate: rentCarMutation, isPending } = useRentCar();
  // const userId = Number(localStorage.getItem("user_id")); // Retrieve the user ID from local storage
  // const paymentStructure = Number(localStorage.getItem("payment_structure")); // Retrieve the user ID from local storage
  // // const { data: profile } = useGetUserProfile(userId);
  // // const { mutate: userAgreement } = useAgreementId();
  const { register } = useForm();

  // // const userAgreementId = localStorage.getItem("agreement_id");

  // const onSubmit = (data: TermAndConForm) => {
  //   if (currentCar) {
  //     const submissionData: RentCarData = {
  //       car_id: currentCar.id,
  //       // duration: currentCar.duration,
  //       // total_price: currentCar.price,
  //       // deposit: currentCar.deposit,
  //       // weekly: currentCar.weekly,
  //       payment_structure: paymentStructure,
  //       termsandconditions: data.termsandconditions,
  //       user_id: Number(userId),
  //       // user_email: profile.email,
  //     };

  //     rentCarMutation(submissionData, {
  //       onSuccess: (response) => {
  //         // Destructure the response
  //         if (response) {
  //           // console.log(response);
  //           // Send the entire response data to the userAgreement mutation
  //           window.open(response.payment_url, "_self");
  //         }
  //       },
  //       //
  //       onError: (error) => {
  //         toast.error(
  //           "Car is currently reserved, contact our support for more details"
  //         );
  //         return error;
  //       },
  //     });
  //   }
  // };

  return (
    <div className="md:mb-[8rem] mb-[2rem]">
      {/* {isPending && <SpinnerOverlay />} */}

      <h1 className="font-[600] text-[30px] leadind-[36px]  my-5 w-full text-center md:text-start md:px-16 px-3 mt-9">
        Terms & Conditions
      </h1>
      <form>
        <div className="md:px-16 px-3 mt-9 py-8 rounded-xl bg-[#ffffff] md:w-[90%] w-full">
          {termsAndConditions?.map((item, index) => (
            <ol key={index}>
              <li className="text-[20px] font-[600] leading-[24px] text-[#2D2D2D]">
                <span className="mr-5">{index + 1}.</span>
                {item.title}
              </li>
              <li className="text-[16px] font-[600] leading-[19.2px] my-4">
                {item.decs}
              </li>
            </ol>
          ))}
        </div>
        <div className="md:px-16 px-3 mt-9 flex md:flex-row flex-col items-center md:items-end justify-between md:w-[90%] w-full">
          <label className="text-[18px] font-[500] leading-[21.6px] text-[#2D2D2D] flex items-center gap-5">
            <input
              type="checkbox"
              {...register("termsandconditions", { required: true })}
              className="w-6 h-6 accent-primary"
            />
            I agree to the terms and conditions
          </label>
          <button
            type="submit"
            className="font-[700] text-[16px] leading-[19.2px] text-[#FAFAFA] bg-primary md:w-[20%] w-[80%] md:mt-0 mt-7 p-2 rounded-[15px] flex justify-center items-center"
          >
            {/* : isSuccess ? "Pay now" */}
            {
              "Continue to pay"
              // Replace with your own loading state or error handling mechanism
            }{" "}
          </button>
        </div>
      </form>
    </div>
  );
};
export default TermsAndCondition;
const termsAndConditions = [
  {
    id: "MAKING_CONTRACT",
    title: "Making Contract",
    decs: "This Agreement is made on the Effective Date, between the Seller and the Purchaser. The Agreement can be made on exchange of identical counterparts signed by the Seller and the Purchaser. Further, the Seller and the Purchaser agree that the exchange may be effected electronically.",
  },
  {
    id: "SALE_AND_PURCHASE",
    title: "Sale and Purchase",
    decs: "The Seller has the lawful right to sell and wishes to sell the Motor Vehicle to the Purchaser. The Seller warrants there is no outstanding debt against the Motor Vehicle at the time of signing the Agreement. The Purchaser wishes to purchase the Motor Vehicle from the Seller. The Purchaser warrants that it has the legal capacity to enter into this Agreement and has inspected the Motor Vehicle and agreed to purchase it in its current condition.",
  },
  {
    id: "PURCHASE_PRICE",
    title: "Purchase Price",
    decs: "The total purchase price to be paid by the Purchaser to the Seller for the Motor Vehicle is the Purchase Price. The Purchaser must pay the Deposit to the Seller on the Effective Date. If the Deposit is paid by electronic funds transfer, payment is not made until the funds clear in the Seller’s bank account. Time for payment of the Deposit is essential.",
  },
  {
    id: "FINANCING",
    title: "Financing",
    decs: "The Seller has agreed to assist the Purchaser in completion of this sale by lending to the Purchaser the Balance of Purchase Price on security of a registrable personal property security interest prepared by the Seller at the Purchaser’s cost over the Motor Vehicle. The Purchaser shall make Weekly Instalments to the Seller.",
  },
  {
    id: "PPSR_REGISTRATION_AND_DISCHARGE",
    title: "PPSR Registration and Discharge",
    decs: "The Purchaser agrees to pay for the registration and discharge of the personal property security interest by way of a Registration and Discharge Fee over the Motor Vehicle. The registration and discharge shall take place via the Personal Property Securities Register (https://www.ppsr.gov.au). The Purchaser must pay the Registration and Discharge Fee on the Effective Date.",
  },
  {
    id: "OTHER_FEE",
    title: "Other Fee",
    decs: "Upon the Seller's request, the Purchaser may be responsible for payment of additional fees related to the initial safety certificate/inspection and registration of the Motor Vehicle.",
  },
  {
    id: "INSURANCE",
    title: "Insurance",
    decs: "The Purchaser, upon delivery of the Motor Vehicle, shall obtain a comprehensive car insurance for an agreed value for a period no less than 12 months. The Purchaser shall provide a copy of the insurance certificate to the Seller and ensure that the Seller's interest in the Motor Vehicle is noted on the policy.",
  },
  {
    id: "REPAIR_AND_MAINTENANCE",
    title: "Repair and Maintenance",
    decs: "The Purchaser is obligated to conduct regular repair and maintenance on the Motor Vehicle, ensuring it undergoes servicing every six months or after 10,000 km, whichever comes first, until the Purchase Price is paid in full.",
  },
  {
    id: "RISK_AND_TITLE",
    title: "Risk and Title",
    decs: "The risk of loss or damage to the Motor Vehicle passes to the Purchaser upon delivery. However, equitable ownership will not pass until the Purchase Price is paid in full.",
  },
  {
    id: "DEFAULT",
    title: "Default",
    decs: "Should the Purchaser fail to comply with clauses 3, 4, 5, 6, 7, or 8 of this agreement, the Seller is authorised to issue default notices. After three notices, each subsequent notice will incur a fee of $50.",
  },
  {
    id: "REPOSSESSION",
    title: "Repossession",
    decs: "Should the Purchaser fail to meet obligations, the Seller retains the right to reclaim the Motor Vehicle. Any payments made by the Purchaser will not be refunded. Repossession will occur if there are six instances of default (not necessarily consecutive).",
  },
  {
    id: "DEFINITION",
    title: "Definition",
    decs: "All defined terms in this Agreement adopt the definitions set out in the Schedule to this Agreement.",
  },
  {
    id: "GOVERNING_LAW",
    title: "Governing Law",
    decs: "This Agreement shall be governed by and construed in accordance with the laws of Queensland, Australia.",
  },
];
