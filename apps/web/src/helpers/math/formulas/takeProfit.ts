import {
  compose,
  curry,
} from '@terminal/common/utils/fp';
import {
  add,
  divide,
  divideRight,
  multiply,
  subtract,
} from '@terminal/common/utils/number';
import {
  getLength,
  reduce,
  map,
} from '@terminal/common/utils/array';
import { calculateOnePercent } from '@/helpers/math/percents';
import { TakeProfit } from '@/api/types/order';
import { calculateVolumeDifference } from '@/helpers/math/formulas/order';

export const reduceTakeProfitsToAmountOfProfit = curry((
  orderPrice: number,
  takeProfits: TakeProfit[],
): number => reduce(
  (total: number, { price, quantity }: TakeProfit) => compose(
    add(total),
    calculateVolumeDifference(quantity, orderPrice),
  )(price),
  0,
  takeProfits,
));

export const reduceTakeProfitsToQuantitiesSum = (
  takeProfits: TakeProfit[],
): number => reduce(
  (quantitiesSum: number, { quantity }: TakeProfit) => add(quantitiesSum, quantity),
  0,
  takeProfits,
);

export const mapTakeProfitPricesByIncreasePercent = curry((
  percentOfIncrease: number,
  orderPrice: number,
  takeProfits: TakeProfit[],
) => takeProfits.map(
  (takeProfit: TakeProfit, index: number) => ({
    ...takeProfit,
    price: compose(
      add(orderPrice),
      multiply(calculateOnePercent(orderPrice)),
      multiply(percentOfIncrease),
      add(1),
    )(index),
  }),
));

export const mapTakeProfitPricesByDecreasePercent = curry((
  percentOfIncrease: number,
  orderPrice: number,
  takeProfits: TakeProfit[],
) => map(
  (takeProfit: TakeProfit, index: number) => ({
    ...takeProfit,
    price: compose(
      subtract(orderPrice),
      multiply(calculateOnePercent(orderPrice)),
      multiply(percentOfIncrease),
      add(1),
    )(index),
  }),
  takeProfits,
));

export const spreadOrderQuantityBetweenTakeProfits = curry((
  orderQuantity: number,
  takeProfits: TakeProfit[],
) => map(
  (value) => ({
    ...value,
    quantity: compose(
      divide(orderQuantity),
      getLength,
    )(takeProfits),
  }),
  takeProfits,
));

export const calculateCommonTakeProfitPercent = curry((
  orderPrice: number,
  orderQuantity: number,
  takeProfits: TakeProfit[],
) => {
  const orderVolume = multiply(orderPrice, orderQuantity);

  return compose(
    multiply(100),
    divideRight(orderVolume),
    reduceTakeProfitsToAmountOfProfit(orderPrice),
  )(takeProfits);
});
