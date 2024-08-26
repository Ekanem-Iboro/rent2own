interface IAmount {
  amount: number;
}
const CurrencyFormatter = ({ amount }: IAmount) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return <span>{formatter.format(amount)}</span>;
};

export default CurrencyFormatter;
