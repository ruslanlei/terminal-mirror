import {
  computed,
  Ref,
} from 'vue';
import { Currency } from '@/types/currency';
import {
  add,
  divideRight, roundToDecimalPoint, subtract, subtractRight,
} from '@/math/float';
import { compose } from '@/utils/fp';
import { calculateBaseCurrencyQuantity, calculateQuoteCurrencyVolume } from '@/math/formulas/currency';
import curry from 'lodash/curry';

export interface QuoteCurrency extends Currency {
    leverage: number,
    balance: number,
}

export interface BaseCurrency extends Currency {
    price: number,
}

export const useExchange = (
  baseCurrency: Ref<BaseCurrency>,
  quoteCurrency: Ref<QuoteCurrency>,
) => {
  const calculateAndRoundQuoteCurrencyQuantity = curry((
    quoteCurrencyDecimals: number,
    baseCurrencyPrice: number,
    baseCurrencyQuantity: number,
  ) => compose(
    roundToDecimalPoint(quoteCurrencyDecimals),
    calculateQuoteCurrencyVolume(baseCurrencyPrice),
  )(baseCurrencyQuantity));

  const calculateAndRoundBaseCurrencyQuantity = curry((
    baseCurrencyDecimals: number,
    baseCurrencyPrice: number,
    quoteCurrencyQuantity: number,
  ) => compose(
    roundToDecimalPoint(baseCurrencyDecimals),
    calculateBaseCurrencyQuantity(baseCurrencyPrice),
  )(quoteCurrencyQuantity));

  const incrementDeposit = (number: number) => compose(
    calculateAndRoundQuoteCurrencyQuantity(
      quoteCurrency.value.decimals,
      baseCurrency.value.price,
    ),
    add(baseCurrency.value.step),
    calculateAndRoundBaseCurrencyQuantity(
      baseCurrency.value.decimals,
      baseCurrency.value.price,
    ),
  )(number);

  const decrementDeposit = (number: number) => compose(
    calculateAndRoundQuoteCurrencyQuantity(
      quoteCurrency.value.decimals,
      baseCurrency.value.price,
    ),
    subtractRight(baseCurrency.value.step),
    calculateAndRoundBaseCurrencyQuantity(
      baseCurrency.value.decimals,
      baseCurrency.value.price,
    ),
  )(number);

  const maxQuoteCurrencyDeposit = computed(
    () => decrementDeposit(quoteCurrency.value.balance),
  );

  const maxQuoteCurrencyDepositLeveraged = computed(
    () => decrementDeposit(quoteCurrency.value.balance * quoteCurrency.value.leverage),
  );

  const maxBaseCurrencyDepositLeveraged = computed(
    () => maxQuoteCurrencyDepositLeveraged.value / baseCurrency.value.price,
  );

  return {
    baseCurrency,
    quoteCurrency,
    calculateAndRoundQuoteCurrencyQuantity,
    calculateAndRoundBaseCurrencyQuantity,
    incrementDeposit,
    decrementDeposit,
    maxQuoteCurrencyDeposit,
    maxQuoteCurrencyDepositLeveraged,
    maxBaseCurrencyDepositLeveraged,
  };
};
