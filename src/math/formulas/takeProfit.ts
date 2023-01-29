import { compose, curry } from '@/utils/fp';
import { TakeProfit } from '@/stores/market';
import { add, multiply, roundToDecimalPoint } from '@/math/float';
import { calculateOnePercent } from '@/math/helpers/percents';

export const reduceTakeProfitsToAmountOfProfit = (
  takeProfits: TakeProfit[],
): number => takeProfits.reduce((
  total: number,
  takeProfit: TakeProfit,
) => total + (takeProfit.price * takeProfit.quantity), 0);

export const reduceTakeProfitsToAmountOfProfitAndRound = curry((
  decimals: number,
  takeProfits: TakeProfit[],
) => compose(
  roundToDecimalPoint(decimals),
  reduceTakeProfitsToAmountOfProfit,
)(takeProfits));

export const calculateTakeProfitPricesByIncreasePercent = curry((
  percentOfIncrease: number,
  orderPrice: number,
  takeProfits: TakeProfit[],
) => takeProfits.map((
  takeProfit: TakeProfit,
  index: number,
) => {
  const takeProfitPrice = compose(
    add(orderPrice),
    multiply(calculateOnePercent(orderPrice)),
    multiply(percentOfIncrease),
    add(1),
  )(index);

  return {
    ...takeProfit,
    price: takeProfitPrice,
  };
}));
