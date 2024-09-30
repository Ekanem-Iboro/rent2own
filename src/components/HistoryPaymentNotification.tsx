// import { useState } from "react";
import notificationTap from "@/assets/icons/notificationtabicon.svg";
import { ArrowDown } from "lucide-react";
// import { NotificationPagination } from "./reuseable/NotificationPegnation";

/* eslint-disable @typescript-eslint/no-explicit-any */
const HistoryPaymentNotification = ({ installments, isError }: any) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemPerPage] = useState(10);
  // const [sortField, setSortField] = useState<
  //   "agreement_id" | "status" | "purchase"
  // >("agreement_id");
  // const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // /* eslint-disable @typescript-eslint/no-explicit-any */

  // // Function to sort payment data
  // const sortedPaymentData = [...installments].sort((a: any, b: any) => {
  //   const aValue = a[sortField].toLowerCase();
  //   const bValue = b[sortField].toLowerCase();
  //   return sortDirection === "asc"
  //     ? aValue.localeCompare(bValue)
  //     : bValue.localeCompare(aValue);
  // });

  // // Handle sorting when clicking the ArrowDown button
  // const handleSort = (field: "agreement_id" | "status" | "purchase") => {
  //   if (sortField === field) {
  //     // Toggle direction if the same field is clicked
  //     setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  //   } else {
  //     // Change field and default to ascending order
  //     setSortField(field);
  //     setSortDirection("asc");
  //   }
  // };

  // const lastItemIndex = currentPage * itemPerPage;
  // const firstItemIndex = lastItemIndex - itemPerPage;
  // const currentNotification = sortedPaymentData.slice(
  //   firstItemIndex,
  //   lastItemIndex
  //);

  return (
    <div>
      <div>
        <p className="font-[600] text-[20px] leading-[24px] text-[#0A0B0A] mt-9">
          Payment History
        </p>
        <div className="w-full md:min-h-[150px] min-h-[250px] mt-5 bg-[#ffffff] rounded-lg shadow-md">
          {installments?.length > 0 && !isError ? (
            <div className="overflow-x-auto no-scrollbar">
              <div className="w-full min-w-[900px] ">
                <table className="w-full text-left table-auto">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                        <div className="flex items-center gap-1">
                          <input type="checkbox" />
                          <span>Invoice</span>
                          <ArrowDown
                            width={15}
                            height={15}
                            // onClick={() => handleSort("agreement_id")}
                          />
                        </div>
                      </th>
                      <th className="py-2 px-4 text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                        Payment Date
                      </th>
                      <th className="py-2 px-4 text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                        <div className="flex items-center gap-1">
                          Status
                          <ArrowDown
                            width={15}
                            height={15}
                            // onClick={() => handleSort("status")}
                          />
                        </div>
                      </th>
                      <th className="py-2 px-4 text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                        Amount ($)
                      </th>
                      <th className="py-2 px-4 text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                        Due Date
                      </th>
                      <th className="py-2 px-4 text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                        <div className="flex items-center gap-1">
                          Purchase
                          <ArrowDown
                            width={15}
                            height={15}
                            // onClick={() => handleSort("purchase")}
                          />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {installments.map((payment: any, index: any) => (
                      <tr
                        key={index}
                        className={`border-b ${
                          index % 2 === 0 ? "bg-[#F9FAFB]" : ""
                        }`}
                      >
                        <td className="py-6 px-4  text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                          <div className="flex items-center gap-1">
                            <input type="checkbox" />
                            <span>{payment.payment_reference}</span>
                          </div>
                        </td>
                        <td className="py-6 px-4  text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                          {payment.payment_date}
                        </td>
                        <td className="py-6 px-4  text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                          <span
                            className={`text-[#027A48] bg-[#ECFDF3] p-1 w-fit rounded-lg capitalize ${
                              payment.status === "Cancelled"
                                ? "text-[#B42318] bg-[#FEF3F2]"
                                : ""
                            } ${
                              payment.status === "Refunded"
                                ? "text-[#2D2D2D] bg-[#F2F4F7]"
                                : ""
                            }
                            ${
                              payment.status === "pending"
                                ? "text-[#ffffff] bg-[#f7cb77]"
                                : ""
                            }    
                            `}
                          >
                            {payment.status}
                          </span>
                        </td>
                        <td className="py-6 px-4  text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                          {payment.amount}
                        </td>
                        <td className="py-6 px-4  text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                          {payment.due_date}
                        </td>
                        <td className="py-6 px-4  text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                          Week {payment.installment_number} payment
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-7">
                  {/* <NotificationPagination
                    totalItems={installments?.length}
                    itemPerPage={itemPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  /> */}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center h-[500px]">
              <img
                src={notificationTap}
                alt="notification tap"
                className="md:w-[15%] w-[40%]"
              />
              <p className="text-[14px] font-[400] leading-[16.8px] text-[#7F7F7F]">
                You don’t have any payment history at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryPaymentNotification;

// const paymentData = [
//   {
//     agreement_id: "#3066",
//     payment_date: "January 6, 2022",
//     due_date: "January 6, 2022",
//     status: "Paid",
//     amount: "$100.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3065",
//     payment_date: "January 6, 2022",
//     due_date: "January 6, 2022",
//     status: "Refunded",
//     amount: "$50.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3064",
//     payment_date: "January 5, 2022",
//     due_date: "January 5, 2022",
//     status: "Cancelled",
//     amount: "$75.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3063",
//     payment_date: "January 5, 2022",
//     due_date: "January 5, 2022",
//     status: "Paid",
//     amount: "$200.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3062",
//     payment_date: "January 4, 2022",
//     due_date: "January 4, 2022",
//     status: "Refunded",
//     amount: "$150.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3061",
//     payment_date: "January 4, 2022",
//     due_date: "January 4, 2022",
//     status: "Paid",
//     amount: "$120.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3060",
//     payment_date: "January 4, 2022",
//     due_date: "January 4, 2022",
//     status: "Cancelled",
//     amount: "$180.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3059",
//     payment_date: "January 3, 2022",
//     due_date: "January 3, 2022",
//     status: "Paid",
//     amount: "$90.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3058",
//     payment_date: "January 3, 2022",
//     due_date: "January 3, 2022",
//     status: "Paid",
//     amount: "$110.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3057",
//     payment_date: "January 2, 2022",
//     due_date: "January 2, 2022",
//     status: "Refunded",
//     amount: "$60.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#3056",
//     payment_date: "January 2, 2022",
//     due_date: "January 2, 2022",
//     status: "Cancelled",
//     amount: "$85.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#3055",
//     payment_date: "January 1, 2022",
//     due_date: "January 1, 2022",
//     status: "Paid",
//     amount: "$130.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#3054",
//     payment_date: "January 1, 2022",
//     due_date: "January 1, 2022",
//     status: "Paid",
//     amount: "$140.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3053",
//     payment_date: "December 31, 2021",
//     due_date: "December 31, 2021",
//     status: "Refunded",
//     amount: "$55.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3052",
//     payment_date: "December 31, 2021",
//     due_date: "December 31, 2021",
//     status: "Paid",
//     amount: "$195.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3051",
//     payment_date: "December 30, 2021",
//     due_date: "December 30, 2021",
//     status: "Paid",
//     amount: "$80.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3050",
//     payment_date: "December 30, 2021",
//     due_date: "December 30, 2021",
//     status: "Cancelled",
//     amount: "$170.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3049",
//     payment_date: "December 29, 2021",
//     due_date: "December 29, 2021",
//     status: "Refunded",
//     amount: "$95.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#3048",
//     payment_date: "December 29, 2021",
//     due_date: "December 29, 2021",
//     status: "Paid",
//     amount: "$160.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3047",
//     payment_date: "December 28, 2021",
//     due_date: "December 28, 2021",
//     status: "Paid",
//     amount: "$125.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3046",
//     payment_date: "December 28, 2021",
//     due_date: "December 28, 2021",
//     status: "Refunded",
//     amount: "$45.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3045",
//     payment_date: "December 27, 2021",
//     due_date: "December 27, 2021",
//     status: "Cancelled",
//     amount: "$135.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3044",
//     payment_date: "December 27, 2021",
//     due_date: "December 27, 2021",
//     status: "Paid",
//     amount: "$155.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3043",
//     payment_date: "December 26, 2021",
//     due_date: "December 26, 2021",
//     status: "Paid",
//     amount: "$65.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#3042",
//     payment_date: "December 26, 2021",
//     due_date: "December 26, 2021",
//     status: "Refunded",
//     amount: "$200.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3041",
//     payment_date: "December 25, 2021",
//     due_date: "December 25, 2021",
//     status: "Cancelled",
//     amount: "$175.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3040",
//     payment_date: "December 25, 2021",
//     due_date: "December 25, 2021",
//     status: "Paid",
//     amount: "$85.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3039",
//     payment_date: "December 24, 2021",
//     due_date: "December 24, 2021",
//     status: "Paid",
//     amount: "$115.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3038",
//     payment_date: "December 24, 2021",
//     due_date: "December 24, 2021",
//     status: "Refunded",
//     amount: "$70.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#3037",
//     payment_date: "December 23, 2021",
//     due_date: "December 23, 2021",
//     status: "Paid",
//     amount: "$150.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#3036",
//     payment_date: "December 23, 2021",
//     due_date: "December 23, 2021",
//     status: "Cancelled",
//     amount: "$190.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3035",
//     payment_date: "December 22, 2021",
//     due_date: "December 22, 2021",
//     status: "Paid",
//     amount: "$105.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3034",
//     payment_date: "December 22, 2021",
//     due_date: "December 22, 2021",
//     status: "Paid",
//     amount: "$95.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3033",
//     payment_date: "December 21, 2021",
//     due_date: "December 21, 2021",
//     status: "Cancelled",
//     amount: "$145.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#3032",
//     payment_date: "December 21, 2021",
//     due_date: "December 21, 2021",
//     status: "Refunded",
//     amount: "$185.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3031",
//     payment_date: "December 20, 2021",
//     due_date: "December 20, 2021",
//     status: "Paid",
//     amount: "$125.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3030",
//     payment_date: "December 20, 2021",
//     due_date: "December 20, 2021",
//     status: "Refunded",
//     amount: "$65.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3029",
//     payment_date: "December 19, 2021",
//     due_date: "December 19, 2021",
//     status: "Cancelled",
//     amount: "$100.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#3028",
//     payment_date: "December 19, 2021",
//     due_date: "December 19, 2021",
//     status: "Paid",
//     amount: "$160.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3027",
//     payment_date: "December 18, 2021",
//     due_date: "December 18, 2021",
//     status: "Paid",
//     amount: "$175.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3026",
//     payment_date: "December 18, 2021",
//     due_date: "December 18, 2021",
//     status: "Refunded",
//     amount: "$55.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3025",
//     payment_date: "December 17, 2021",
//     due_date: "December 17, 2021",
//     status: "Cancelled",
//     amount: "$120.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#3024",
//     payment_date: "December 17, 2021",
//     due_date: "December 17, 2021",
//     status: "Paid",
//     amount: "$145.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3023",
//     payment_date: "December 16, 2021",
//     due_date: "December 16, 2021",
//     status: "Paid",
//     amount: "$135.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3022",
//     payment_date: "December 16, 2021",
//     due_date: "December 16, 2021",
//     status: "Cancelled",
//     amount: "$170.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3021",
//     payment_date: "December 15, 2021",
//     due_date: "December 15, 2021",
//     status: "Refunded",
//     amount: "$60.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#3020",
//     payment_date: "December 15, 2021",
//     due_date: "December 15, 2021",
//     status: "Paid",
//     amount: "$115.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3019",
//     payment_date: "December 14, 2021",
//     due_date: "December 14, 2021",
//     status: "Paid",
//     amount: "$190.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3018",
//     payment_date: "December 14, 2021",
//     due_date: "December 14, 2021",
//     status: "Refunded",
//     amount: "$75.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3017",
//     payment_date: "December 13, 2021",
//     due_date: "December 13, 2021",
//     status: "Cancelled",
//     amount: "$125.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#3016",
//     payment_date: "December 13, 2021",
//     due_date: "December 13, 2021",
//     status: "Paid",
//     amount: "$145.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3015",
//     payment_date: "December 12, 2021",
//     due_date: "December 12, 2021",
//     status: "Paid",
//     amount: "$165.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3014",
//     payment_date: "December 12, 2021",
//     due_date: "December 12, 2021",
//     status: "Refunded",
//     amount: "$85.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#3013",
//     payment_date: "December 11, 2021",
//     due_date: "December 11, 2021",
//     status: "Cancelled",
//     amount: "$195.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3012",
//     payment_date: "December 11, 2021",
//     due_date: "December 11, 2021",
//     status: "Paid",
//     amount: "$175.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3011",
//     payment_date: "December 10, 2021",
//     due_date: "December 10, 2021",
//     status: "Paid",
//     amount: "$135.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3010",
//     payment_date: "December 10, 2021",
//     due_date: "December 10, 2021",
//     status: "Refunded",
//     amount: "$55.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3009",
//     payment_date: "December 9, 2021",
//     due_date: "December 9, 2021",
//     status: "Cancelled",
//     amount: "$115.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#3008",
//     payment_date: "December 9, 2021",
//     due_date: "December 9, 2021",
//     status: "Paid",
//     amount: "$195.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3007",
//     payment_date: "December 8, 2021",
//     due_date: "December 8, 2021",
//     status: "Paid",
//     amount: "$140.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3006",
//     payment_date: "December 8, 2021",
//     due_date: "December 8, 2021",
//     status: "Refunded",
//     amount: "$75.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#3005",
//     payment_date: "December 7, 2021",
//     due_date: "December 7, 2021",
//     status: "Cancelled",
//     amount: "$125.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3004",
//     payment_date: "December 7, 2021",
//     due_date: "December 7, 2021",
//     status: "Paid",
//     amount: "$155.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#3003",
//     payment_date: "December 6, 2021",
//     due_date: "December 6, 2021",
//     status: "Paid",
//     amount: "$120.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3002",
//     payment_date: "December 6, 2021",
//     due_date: "December 6, 2021",
//     status: "Refunded",
//     amount: "$50.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#3001",
//     payment_date: "December 5, 2021",
//     due_date: "December 5, 2021",
//     status: "Cancelled",
//     amount: "$100.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#3000",
//     payment_date: "December 5, 2021",
//     due_date: "December 5, 2021",
//     status: "Paid",
//     amount: "$170.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#2999",
//     payment_date: "December 4, 2021",
//     due_date: "December 4, 2021",
//     status: "Paid",
//     amount: "$130.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#2998",
//     payment_date: "December 4, 2021",
//     due_date: "December 4, 2021",
//     status: "Refunded",
//     amount: "$95.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#2997",
//     payment_date: "December 3, 2021",
//     due_date: "December 3, 2021",
//     status: "Cancelled",
//     amount: "$105.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#2996",
//     payment_date: "December 3, 2021",
//     due_date: "December 3, 2021",
//     status: "Paid",
//     amount: "$145.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#2995",
//     payment_date: "December 2, 2021",
//     due_date: "December 2, 2021",
//     status: "Paid",
//     amount: "$185.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#2994",
//     payment_date: "December 2, 2021",
//     due_date: "December 2, 2021",
//     status: "Refunded",
//     amount: "$60.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#2993",
//     payment_date: "December 1, 2021",
//     due_date: "December 1, 2021",
//     status: "Cancelled",
//     amount: "$125.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#2992",
//     payment_date: "December 1, 2021",
//     due_date: "December 1, 2021",
//     status: "Paid",
//     amount: "$115.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#2991",
//     payment_date: "November 30, 2021",
//     due_date: "November 30, 2021",
//     status: "Paid",
//     amount: "$195.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#2990",
//     payment_date: "November 30, 2021",
//     due_date: "November 30, 2021",
//     status: "Refunded",
//     amount: "$70.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#2989",
//     payment_date: "November 29, 2021",
//     due_date: "November 29, 2021",
//     status: "Cancelled",
//     amount: "$110.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#2988",
//     payment_date: "November 29, 2021",
//     due_date: "November 29, 2021",
//     status: "Paid",
//     amount: "$160.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#2987",
//     payment_date: "November 28, 2021",
//     due_date: "November 28, 2021",
//     status: "Paid",
//     amount: "$130.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#2986",
//     payment_date: "November 28, 2021",
//     due_date: "November 28, 2021",
//     status: "Refunded",
//     amount: "$50.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#2985",
//     payment_date: "November 27, 2021",
//     due_date: "November 27, 2021",
//     status: "Cancelled",
//     amount: "$145.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#2984",
//     payment_date: "November 27, 2021",
//     due_date: "November 27, 2021",
//     status: "Paid",
//     amount: "$170.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#2983",
//     payment_date: "November 26, 2021",
//     due_date: "November 26, 2021",
//     status: "Paid",
//     amount: "$190.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#2982",
//     payment_date: "November 26, 2021",
//     due_date: "November 26, 2021",
//     status: "Refunded",
//     amount: "$85.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#2981",
//     payment_date: "November 25, 2021",
//     due_date: "November 25, 2021",
//     status: "Cancelled",
//     amount: "$110.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#2980",
//     payment_date: "November 25, 2021",
//     due_date: "November 25, 2021",
//     status: "Paid",
//     amount: "$130.00",
//     purchase: "Monthly subscription",
//   },
//   {
//     agreement_id: "#2979",
//     payment_date: "November 24, 2021",
//     due_date: "November 24, 2021",
//     status: "Paid",
//     amount: "$150.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#2978",
//     payment_date: "November 24, 2021",
//     due_date: "November 24, 2021",
//     status: "Refunded",
//     amount: "$75.00",
//     purchase: "One-time payment",
//   },
//   {
//     agreement_id: "#2977",
//     payment_date: "November 23, 2021",
//     due_date: "November 23, 2021",
//     status: "Cancelled",
//     amount: "$125.00",
//     purchase: "Weekly payment",
//   },
//   {
//     agreement_id: "#2976",
//     payment_date: "November 23, 2021",
//     due_date: "November 23, 2021",
//     status: "Paid",
//     amount: "$185.00",
//     purchase: "Monthly subscription",
//   },
// ];
