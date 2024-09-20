import { useState } from "react";
import notificationTap from "@/assets/icons/notificationtabicon.svg";
import { ArrowDown } from "lucide-react";
import { NotificationPagination } from "./reuseable/NotificationPegnation";

const HistoryPaymentNotification = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);
  const [sortField, setSortField] = useState<"invoice" | "status" | "purchase">(
    "invoice"
  );
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Function to sort payment data
  const sortedPaymentData = [...paymentData].sort((a, b) => {
    const aValue = a[sortField].toLowerCase();
    const bValue = b[sortField].toLowerCase();
    return sortDirection === "asc"
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });

  // Handle sorting when clicking the ArrowDown button
  const handleSort = (field: "invoice" | "status" | "purchase") => {
    if (sortField === field) {
      // Toggle direction if the same field is clicked
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // Change field and default to ascending order
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const currentNotification = sortedPaymentData.slice(
    firstItemIndex,
    lastItemIndex
  );

  return (
    <div>
      <div>
        <p className="font-[600] text-[20px] leading-[24px] text-[#0A0B0A] mt-9">
          Payment History
        </p>
        <div className="w-full md:min-h-[150px] min-h-[250px] mt-5 bg-[#ffffff] rounded-lg shadow-md">
          {paymentData.length > 0 ? (
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
                            onClick={() => handleSort("invoice")}
                          />
                        </div>
                      </th>
                      <th className="py-2 px-4 text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                        Date
                      </th>
                      <th className="py-2 px-4 text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                        <div className="flex items-center gap-1">
                          Status
                          <ArrowDown
                            width={15}
                            height={15}
                            onClick={() => handleSort("status")}
                          />
                        </div>
                      </th>
                      <th className="py-2 px-4 text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                        Amount ($)
                      </th>
                      <th className="py-2 px-4 text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                        <div className="flex items-center gap-1">
                          Purchase
                          <ArrowDown
                            width={15}
                            height={15}
                            onClick={() => handleSort("purchase")}
                          />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentNotification.map((payment, index) => (
                      <tr
                        key={index}
                        className={`border-b ${
                          index % 2 === 0 ? "bg-[#F9FAFB]" : ""
                        }`}
                      >
                        <td className="py-6 px-4  text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                          <div className="flex items-center gap-1">
                            <input type="checkbox" />
                            <span>{payment.invoice}</span>
                          </div>
                        </td>
                        <td className="py-6 px-4  text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                          {payment.date}
                        </td>
                        <td className="py-6 px-4  text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                          <span
                            className={`text-[#027A48] bg-[#ECFDF3] p-1 w-fit rounded-xl ${
                              payment.status === "Cancelled"
                                ? "text-[#B42318] bg-[#FEF3F2]"
                                : ""
                            } ${
                              payment.status === "Refunded"
                                ? "text-[#2D2D2D] bg-[#F2F4F7]"
                                : ""
                            }`}
                          >
                            {payment.status}
                          </span>
                        </td>
                        <td className="py-6 px-4  text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                          {payment.amount}
                        </td>
                        <td className="py-6 px-4  text-[14px] leading-[16.8px] font-[500] text-[#191919]">
                          {payment.purchase}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-7">
                  <NotificationPagination
                    totalItems={paymentData.length}
                    itemPerPage={itemPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
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

const paymentData = [
  {
    invoice: "#3066",
    date: "January 6, 2022",
    status: "Paid",
    amount: "$100.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3065",
    date: "January 6, 2022",
    status: "Refunded",
    amount: "$50.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3064",
    date: "January 5, 2022",
    status: "Cancelled",
    amount: "$75.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3063",
    date: "January 5, 2022",
    status: "Paid",
    amount: "$200.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3062",
    date: "January 4, 2022",
    status: "Refunded",
    amount: "$150.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3061",
    date: "January 4, 2022",
    status: "Paid",
    amount: "$120.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3060",
    date: "January 4, 2022",
    status: "Cancelled",
    amount: "$180.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3059",
    date: "January 3, 2022",
    status: "Paid",
    amount: "$90.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3058",
    date: "January 3, 2022",
    status: "Paid",
    amount: "$110.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3057",
    date: "January 2, 2022",
    status: "Refunded",
    amount: "$60.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#3056",
    date: "January 2, 2022",
    status: "Cancelled",
    amount: "$85.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#3055",
    date: "January 1, 2022",
    status: "Paid",
    amount: "$130.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#3054",
    date: "January 1, 2022",
    status: "Paid",
    amount: "$140.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3053",
    date: "December 31, 2021",
    status: "Refunded",
    amount: "$55.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3052",
    date: "December 31, 2021",
    status: "Paid",
    amount: "$195.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3051",
    date: "December 30, 2021",
    status: "Paid",
    amount: "$80.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3050",
    date: "December 30, 2021",
    status: "Cancelled",
    amount: "$170.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3049",
    date: "December 29, 2021",
    status: "Refunded",
    amount: "$95.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#3048",
    date: "December 29, 2021",
    status: "Paid",
    amount: "$160.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3047",
    date: "December 28, 2021",
    status: "Paid",
    amount: "$125.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3046",
    date: "December 28, 2021",
    status: "Refunded",
    amount: "$45.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3045",
    date: "December 27, 2021",
    status: "Cancelled",
    amount: "$135.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3044",
    date: "December 27, 2021",
    status: "Paid",
    amount: "$155.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3043",
    date: "December 26, 2021",
    status: "Paid",
    amount: "$65.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#3042",
    date: "December 26, 2021",
    status: "Refunded",
    amount: "$200.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3041",
    date: "December 25, 2021",
    status: "Cancelled",
    amount: "$175.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3040",
    date: "December 25, 2021",
    status: "Paid",
    amount: "$85.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3039",
    date: "December 24, 2021",
    status: "Paid",
    amount: "$115.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3038",
    date: "December 24, 2021",
    status: "Refunded",
    amount: "$70.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#3037",
    date: "December 23, 2021",
    status: "Paid",
    amount: "$150.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#3036",
    date: "December 23, 2021",
    status: "Cancelled",
    amount: "$190.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3035",
    date: "December 22, 2021",
    status: "Paid",
    amount: "$105.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3034",
    date: "December 22, 2021",
    status: "Paid",
    amount: "$95.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3033",
    date: "December 21, 2021",
    status: "Cancelled",
    amount: "$145.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#3032",
    date: "December 21, 2021",
    status: "Refunded",
    amount: "$185.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3031",
    date: "December 20, 2021",
    status: "Paid",
    amount: "$125.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3030",
    date: "December 20, 2021",
    status: "Refunded",
    amount: "$65.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3029",
    date: "December 19, 2021",
    status: "Cancelled",
    amount: "$100.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#3028",
    date: "December 19, 2021",
    status: "Paid",
    amount: "$160.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3027",
    date: "December 18, 2021",
    status: "Paid",
    amount: "$175.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3026",
    date: "December 18, 2021",
    status: "Refunded",
    amount: "$55.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3025",
    date: "December 17, 2021",
    status: "Cancelled",
    amount: "$120.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#3024",
    date: "December 17, 2021",
    status: "Paid",
    amount: "$145.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3023",
    date: "December 16, 2021",
    status: "Paid",
    amount: "$135.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3022",
    date: "December 16, 2021",
    status: "Cancelled",
    amount: "$170.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3021",
    date: "December 15, 2021",
    status: "Refunded",
    amount: "$60.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#3020",
    date: "December 15, 2021",
    status: "Paid",
    amount: "$115.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3019",
    date: "December 14, 2021",
    status: "Paid",
    amount: "$190.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3018",
    date: "December 14, 2021",
    status: "Refunded",
    amount: "$75.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3017",
    date: "December 13, 2021",
    status: "Cancelled",
    amount: "$125.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#3016",
    date: "December 13, 2021",
    status: "Paid",
    amount: "$145.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3015",
    date: "December 12, 2021",
    status: "Paid",
    amount: "$165.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3014",
    date: "December 12, 2021",
    status: "Refunded",
    amount: "$85.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#3013",
    date: "December 11, 2021",
    status: "Cancelled",
    amount: "$195.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3012",
    date: "December 11, 2021",
    status: "Paid",
    amount: "$175.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3011",
    date: "December 10, 2021",
    status: "Paid",
    amount: "$135.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3010",
    date: "December 10, 2021",
    status: "Refunded",
    amount: "$55.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3009",
    date: "December 9, 2021",
    status: "Cancelled",
    amount: "$115.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#3008",
    date: "December 9, 2021",
    status: "Paid",
    amount: "$195.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3007",
    date: "December 8, 2021",
    status: "Paid",
    amount: "$140.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3006",
    date: "December 8, 2021",
    status: "Refunded",
    amount: "$75.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#3005",
    date: "December 7, 2021",
    status: "Cancelled",
    amount: "$125.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3004",
    date: "December 7, 2021",
    status: "Paid",
    amount: "$155.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#3003",
    date: "December 6, 2021",
    status: "Paid",
    amount: "$120.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3002",
    date: "December 6, 2021",
    status: "Refunded",
    amount: "$50.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#3001",
    date: "December 5, 2021",
    status: "Cancelled",
    amount: "$100.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#3000",
    date: "December 5, 2021",
    status: "Paid",
    amount: "$170.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#2999",
    date: "December 4, 2021",
    status: "Paid",
    amount: "$130.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#2998",
    date: "December 4, 2021",
    status: "Refunded",
    amount: "$95.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#2997",
    date: "December 3, 2021",
    status: "Cancelled",
    amount: "$105.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#2996",
    date: "December 3, 2021",
    status: "Paid",
    amount: "$145.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#2995",
    date: "December 2, 2021",
    status: "Paid",
    amount: "$185.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#2994",
    date: "December 2, 2021",
    status: "Refunded",
    amount: "$60.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#2993",
    date: "December 1, 2021",
    status: "Cancelled",
    amount: "$125.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#2992",
    date: "December 1, 2021",
    status: "Paid",
    amount: "$115.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#2991",
    date: "November 30, 2021",
    status: "Paid",
    amount: "$195.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#2990",
    date: "November 30, 2021",
    status: "Refunded",
    amount: "$70.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#2989",
    date: "November 29, 2021",
    status: "Cancelled",
    amount: "$110.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#2988",
    date: "November 29, 2021",
    status: "Paid",
    amount: "$160.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#2987",
    date: "November 28, 2021",
    status: "Paid",
    amount: "$130.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#2986",
    date: "November 28, 2021",
    status: "Refunded",
    amount: "$50.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#2985",
    date: "November 27, 2021",
    status: "Cancelled",
    amount: "$145.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#2984",
    date: "November 27, 2021",
    status: "Paid",
    amount: "$170.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#2983",
    date: "November 26, 2021",
    status: "Paid",
    amount: "$190.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#2982",
    date: "November 26, 2021",
    status: "Refunded",
    amount: "$85.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#2981",
    date: "November 25, 2021",
    status: "Cancelled",
    amount: "$110.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#2980",
    date: "November 25, 2021",
    status: "Paid",
    amount: "$130.00",
    purchase: "Monthly subscription",
  },
  {
    invoice: "#2979",
    date: "November 24, 2021",
    status: "Paid",
    amount: "$150.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#2978",
    date: "November 24, 2021",
    status: "Refunded",
    amount: "$75.00",
    purchase: "One-time payment",
  },
  {
    invoice: "#2977",
    date: "November 23, 2021",
    status: "Cancelled",
    amount: "$125.00",
    purchase: "Weekly payment",
  },
  {
    invoice: "#2976",
    date: "November 23, 2021",
    status: "Paid",
    amount: "$185.00",
    purchase: "Monthly subscription",
  },
];
