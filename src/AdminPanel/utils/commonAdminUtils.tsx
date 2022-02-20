import { indCurrency } from "../../utils/utils";

export const getPriceData = (data: any[]) => {
  return data.map((d) => indCurrency(d.ratePerPerson)).join(", ");
};
