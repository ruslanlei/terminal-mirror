import {
  add, divideRight, multiply, subtractRight,
} from '@terminal/common/utils/number';
import { compose, curry } from '@terminal/common/utils/fp';
import { Maybe } from '@/utils/functors';

export const convertQuoteBalanceToBase = curry((
  baseCurrencyPrice: number,
  quoteCurrencyBalance: number,
) => divideRight(
  (baseCurrencyPrice || 1),
  quoteCurrencyBalance,
));

export const incrementQuoteDepositByBaseStep = curry((
  baseCurrencyStep: number,
  baseCurrencyPrice: number,
  quoteCurrencyVolume: number,
) => Maybe
  .of(quoteCurrencyVolume)
  .map(divideRight(baseCurrencyPrice))
  .map(add(baseCurrencyStep))
  .chain(multiply(baseCurrencyPrice)));

export const decrementQuoteDepositByBaseStep = curry((
  baseCurrencyStep: number,
  baseCurrencyPrice: number,
  quoteCurrencyVolume: number,
) => compose(
  multiply(baseCurrencyPrice),
  subtractRight(baseCurrencyStep),
  divideRight(baseCurrencyPrice), // quote quantity in base
)(quoteCurrencyVolume));
