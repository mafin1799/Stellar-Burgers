import { OrderedData, TIngredient } from "../types/types";

export const groupDataByType = (data: Array<TIngredient>): OrderedData => {
  const groupedData: OrderedData = {};
  data.forEach((item) => {
    const type = item.type;
    if (!groupedData[type]) {
      groupedData[type] = [];
    }
    groupedData[type].push(item);
  });
  return groupedData;
};