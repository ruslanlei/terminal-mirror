import {
  compose,
  curry, getLength,
  map,
  reduce,
} from '@/utils/fp';
import { TakeProfit } from '@/stores/market';
import {
  add,
  divide,
  multiply,
  roundToDecimalPoint,
} from '@/math/float';
import { calculateOnePercent } from '@/math/helpers/percents';

export const reduceTakeProfitsToAmountOfProfit = (
  takeProfits: TakeProfit[],
): number => reduce(
  takeProfits,
  (total: number, { price, quantity }: TakeProfit) => compose(
    add(total),
    multiply(quantity),
  )(price),
  0,
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

export const divideEquallyOrderQuantityBetweenTakeProfits = curry((
  orderQuantity: number,
  takeProfits: TakeProfit[],
) => takeProfits.map((value) => ({
  ...value,
  quantity: compose(
    divide(orderQuantity),
    getLength,
  )(takeProfits),
})));
