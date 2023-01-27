import curry from 'lodash/curry';
import { divideRight } from '@/math/float';
import { compose } from '@/utils/fp';
import { calculateOnePercent } from '@/math/formulas/common';

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
