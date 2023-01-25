export const calculatePercentOfOrder = (
  orderPrice: number,
  actualPrice: number,
) => 100 - (actualPrice / orderPrice) * 100;
