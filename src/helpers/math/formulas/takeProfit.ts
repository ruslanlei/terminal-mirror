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
  roundToDecimalPoint,
  subtractRight,
} from '@/helpers/number';
import { calculateOnePercent } from '@/helpers/math/percents';
import { TakeProfit } from '@/api/types/order';
import { getLength, reduce } from '@/utils/array';

export const reduceTakeProfitsToAmountOfProfit = (
  takeProfits: TakeProfit[],
): number => reduce(
  (total: number, { price, quantity }: TakeProfit) => compose(
    add(total),
    multiply(quantity),
  )(price),
  0,
  takeProfits,
);

export const reduceTakeProfitsToQuantitiesSum = (
  takeProfits: TakeProfit[],
): number => reduce(
  (quantitiesSum: number, { quantity }: TakeProfit) => add(quantitiesSum, quantity),
  0,
  takeProfits,
);

export const reduceTakeProfitsToAmountOfProfitAndRound = curry((
  decimals: number,
  takeProfits: TakeProfit[],
) => compose(
  roundToDecimalPoint(decimals),
  reduceTakeProfitsToAmountOfProfit,
)(takeProfits));

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
    subtractRight(orderVolume),
    reduceTakeProfitsToAmountOfProfit,
  )(takeProfits);
});
