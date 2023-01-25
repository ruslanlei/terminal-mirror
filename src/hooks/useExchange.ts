import {
  computed,
  Ref,
} from 'vue';
import { roundToDecimalPoint } from '@/utils/number';
import { Currency } from '@/types/currency';
import { add, subtract } from '@/math/float';

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
  const calculateBaseToQuoteCurrencyPrice = (
    baseCurrencyQuantity: number,
  ) => roundToDecimalPoint(
    baseCurrencyQuantity * baseCurrency.value.price,
    quoteCurrency.value.decimals,
  );

  const calculateQuoteToBaseCurrencyPrice = (
    quoteCurrencyQuantity: number,
  ) => roundToDecimalPoint(
    quoteCurrencyQuantity / baseCurrency.value.price,
    baseCurrency.value.decimals,
  );

  const incrementDeposit = (number: number) => {
    const quoteInBaseCurrencyPrice = calculateQuoteToBaseCurrencyPrice(number);

    return calculateBaseToQuoteCurrencyPrice(add(
      [
        quoteInBaseCurrencyPrice,
        baseCurrency.value.step,
      ],
      baseCurrency.value.decimals,
    ));
  };

  const decrementDeposit = (number: number) => {
    const quoteInBaseCurrencyPrice = calculateQuoteToBaseCurrencyPrice(number);

    return calculateBaseToQuoteCurrencyPrice(subtract(
      quoteInBaseCurrencyPrice,
      baseCurrency.value.step,
      baseCurrency.value.decimals,
    ));
  };

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
    calculateBaseToQuoteCurrencyPrice,
    calculateQuoteToBaseCurrencyPrice,
    incrementDeposit,
    decrementDeposit,
    maxQuoteCurrencyDeposit,
    maxQuoteCurrencyDepositLeveraged,
    maxBaseCurrencyDepositLeveraged,
  };
};
