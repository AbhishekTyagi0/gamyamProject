export const Capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const Calculate = (crore: number, lakh: number) => {
  let total_price_crore;
  if (!crore) {
    total_price_crore = lakh;
  } else {
    total_price_crore = (crore + lakh) / 10;
  }
  return total_price_crore;
};
