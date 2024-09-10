import { BreadcrumbComp } from "@/components/reuseable/BreadCrumbs";
import tnc from "@/assets/images/tnc.jpg";
import tncmob from "@/assets/images/mobiletnc.jpg";
import NavBar from "@/components/reuseable/NavBar";
import Footer from "@/components/Footer";
import DetailsBanner from "@/components/DetailsBanner";

export default function Term_Conditions() {
  return (
    <div>
      <NavBar />
      <div className="md:px-16 px-3 mb-[5rem]">
        <header className="md:bg-[url('assets/images/carbg.jpg')] bg-[url('assets/images/mobilecarbg.jpg')] bg-no-repeat bg-cover w-full h-[550px] flex flex-col items-center justify-center mb-[2rem]">
          <p className="md:text-[60px] text-[24px] md:leading-[72px] leading-[28.8px] font-[600] text-[#FFFFFF]">
            Terms & Conditions
          </p>
          <BreadcrumbComp item="Terms & Conditions" color="#ffffff" />
        </header>
        <div className="md:px-16 px-3">
          <img src={tnc} alt="" className="w-full md:block hidden" />
          <img src={tncmob} alt="" className="w-full md:hidden block" />
        </div>
        <div className="md:px-16 px-3 mt-9">
          <h1 className="font-[600] text-[30px] leadind-[36px]  my-5 w-full text-center md:text-start">
            Terms & Conditions
          </h1>
          {termsAndConditions?.map((item, index) => (
            <ol>
              <li className="text-[20px] font-[600] leading-[24px] text-[#2D2D2D]">
                {" "}
                <span className="mr-5">{index + 1}.</span>
                {item.title}
              </li>
              <li className=" text-[16px] font-[600] leading-[19.2px] my-4 md:w-[90%] w-full">
                {item.decs}
              </li>
            </ol>
          ))}
        </div>
      </div>
      <DetailsBanner />
      <Footer />
    </div>
  );
}

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
