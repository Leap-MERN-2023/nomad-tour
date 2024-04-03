import moment from "moment";
moment().format();

export const dateFormat = (date: string) => {
  const formattedDate = moment(date).format("MMMM Do YYYY, h:mm:ss a");
  return formattedDate;
};
export const flightTimeCalculator = (depDate: string, arrDate: string) => {
  const calculatedTime = moment(depDate).to(moment(arrDate));
  return calculatedTime;
};
