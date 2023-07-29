export const groupDataByType = (data) => {
  const groupedData = {};

  data.forEach((item) => {
    const type = item.type;

    if (!groupedData[type]) {
      groupedData[type] = [];
    }

    groupedData[type].push(item);
  });

  return groupedData;
};