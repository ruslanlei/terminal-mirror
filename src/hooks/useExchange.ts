import {
  computed,
  Ref,
} from 'vue';
import { Currency } from '@/types/currency';
import { roundToDecimalPoint, subtract } from '@/math/float';

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
    quoteCurrency.value.decimals,
    baseCurrencyQuantity * baseCurrency.value.price,
  );

  const calculateQuoteToBaseCurrencyPrice = (
    quoteCurrencyQuantity: number,
  ) => roundToDecimalPoint(
    baseCurrency.value.decimals,
    quoteCurrencyQuantity / baseCurrency.value.price,
  );

  const incrementDeposit = (number: number) => {
    const quoteInBaseCurrencyPrice = calculateQuoteToBaseCurrencyPrice(number);

    return calculateBaseToQuoteCurrencyPrice(
      quoteInBaseCurrencyPrice,
      // baseCurrency.value.step,
    );
  };

  const decrementDeposit = (number: number) => {
    const quoteInBaseCurrencyPrice = calculateQuoteToBaseCurrencyPrice(number);

    return calculateBaseToQuoteCurrencyPrice(subtract(
      quoteInBaseCurrencyPrice,
      baseCurrency.value.step,
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
