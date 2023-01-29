import { divideRight, multiply } from '@/math/float';
import { compose, curry } from '@/utils/fp';
import { calculateOnePercent } from '@/math/helpers/percents';

export const convertQuoteBalanceToBase = curry((
  baseCurrencyPrice: number,
  quoteCurrencyBalance: number,
) => divideRight(
  baseCurrencyPrice,
  quoteCurrencyBalance,
));

export const calculateOnePercentOfBaseBalanceByQuote = curry((
  baseCurrencyPrice: number,
  quoteCurrencyBalance: number,
) => compose(
  calculateOnePercent,
  convertQuoteBalanceToBase,
)(baseCurrencyPrice, quoteCurrencyBalance));

export const calculateQuoteCurrencyVolume = curry((
  baseCurrencyPrice: number,
  baseCurrencyQuantity: number,
) => multiply(
  baseCurrencyPrice,
  baseCurrencyQuantity,
));

export const calculateBaseCurrencyQuantity = curry((
  baseCurrencyPrice: number,
  quoteCurrencyQuantity: number,
) => divideRight(baseCurrencyPrice, quoteCurrencyQuantity));
