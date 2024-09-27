// utils/dateFormatter.js
/* eslint-disable @typescript-eslint/no-explicit-any */
const formatDate = (date: any) => {
  const options = { year: "numeric", month: "long", day: "2-digit" };
  return new Date(date.toLocaleDateString("en-US", options).replace(",", ""));
};

export default formatDate;
