import {
  add, divideRight, multiply, subtractRight,
} from '@/helpers/math/float';
import { compose, curry } from '@/utils/fp';
import { calculateOnePercent } from '@/helpers/math/percents';

export const convertQuoteBalanceToBase = curry((
  baseCurrencyPrice: number,
  quoteCurrencyBalance: number,
) => divideRight(
  baseCurrencyPrice,
  quoteCurrencyBalance,
));

export const incrementQuoteDepositByBaseStep = curry((
  baseCurrencyStep: number,
  baseCurrencyPrice: number,
  quoteCurrencyVolume: number,
) => compose(
  multiply(baseCurrencyPrice),
  add(baseCurrencyStep),
  divideRight(baseCurrencyPrice), // quote quantity in base
)(quoteCurrencyVolume));

export const decrementQuoteDepositByBaseStep = curry((
  baseCurrencyStep: number,
  baseCurrencyPrice: number,
  quoteCurrencyVolume: number,
) => compose(
  multiply(baseCurrencyPrice),
  subtractRight(baseCurrencyStep),
  divideRight(baseCurrencyPrice), // quote quantity in base
)(quoteCurrencyVolume));
