const formatNumber = (number) => {
  const formattedNumber = new Intl.NumberFormat("id-ID");
  return formattedNumber.format(number);
};

export default formatNumber;
