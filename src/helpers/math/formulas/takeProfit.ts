import {
  compose,
  curry,
  map,
} from '@/utils/fp';
import {
  add,
  divide,
  divideRight,
  multiply,
  subtract,
  subtractRight,
} from '@/helpers/number';
import { calculateOnePercent } from '@/helpers/math/percents';
import { TakeProfit } from '@/api/types/order';
import { getLength, reduce } from '@/utils/array';
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
) => map(
  takeProfits,
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
  takeProfits,
  (takeProfit: TakeProfit, index: number) => ({
    ...takeProfit,
    price: compose(
      subtract(orderPrice),
      multiply(calculateOnePercent(orderPrice)),
      multiply(percentOfIncrease),
      add(1),
    )(index),
  }),
));

export const spreadOrderQuantityBetweenTakeProfits = curry((
  orderQuantity: number,
  takeProfits: TakeProfit[],
) => takeProfits.map((value) => ({
  ...value,
  quantity: compose(
    divide(orderQuantity),
    getLength,
  )(takeProfits),
})));

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
