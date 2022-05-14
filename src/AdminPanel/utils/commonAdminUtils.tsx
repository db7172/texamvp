import { capitalize, lowerCase } from "lodash";
import { indCurrency } from "../../utils/utils";

export const getPriceData = (data: any[]) => {
  return data.map((d) => indCurrency(d.ratePerPerson)).join(", ");
};

export const generatePanes = (
  count: number,
  title: string,
  Content: (prop: any) => JSX.Element
) => {
  const arr: any[] = [];

  for (let i = 1; i <= count; i++) {
    arr.push({
      title: `${capitalize(title)} ${i}`,
      Content: Content,
      key: `${lowerCase(title)}${i}`,
      closable: false,
    });
  }

  return arr;
};
