import { curry } from '@/utils/fp';

export const calculatePercentOfOrderPrice = curry((
  orderPrice: number,
  price: number,
) => 100 - (price / orderPrice) * 100);

export const calculatePriceByPercentOfOrderPrice = curry((
  price: number,
  percent: number,
) => price - (percent * (price / 100)));

export const calculateAmountOfRisk = curry((
  orderPrice: number,
  orderQuantity: number,
  price: number,
) => (orderPrice * orderQuantity) - (price * orderQuantity));

export const calculateOrderPriceByRiskAmount = curry((
  orderPrice: number,
  orderQuantity: number,
  riskAmount: number,
) => ((orderPrice * orderQuantity) - riskAmount) / orderQuantity);
