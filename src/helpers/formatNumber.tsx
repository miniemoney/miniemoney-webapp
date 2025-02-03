export const formatNumberWithCommas = (value: string) => {
  
  if (!value) return "";

  
  let numValue = parseFloat(value).toString();
    if (numValue.includes(".")) {
        const [wholeNumber, decimal] = numValue.split(".");
        numValue = `${new Intl.NumberFormat().format(parseFloat(wholeNumber))}.${decimal}`;
    } else {
        return new Intl.NumberFormat().format(parseFloat(numValue));
    }
};
