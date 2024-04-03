import moment from "moment";

export const priceCalculator = (depDate: string, price: number) => {
  const calculatedTime = moment(depDate).diff(moment(), "days");
  const addPercentage = price * 0.05;
  let calculatedPrice = price;
  if (calculatedTime <= 1) {
    price + addPercentage * 4;
  }
  if (calculatedTime <= 7) {
    calculatedPrice = price + addPercentage * 3;
  }
  if (calculatedTime <= 30) {
    calculatedPrice = price + addPercentage * 2;
  }
  if (calculatedTime <= 90) {
    calculatedPrice = price + addPercentage;
  }

  return calculatedPrice;
};
