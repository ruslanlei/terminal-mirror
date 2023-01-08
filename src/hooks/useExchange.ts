import {
  computed,
  Ref,
} from 'vue';
import { roundToDecimalPoint } from '@/utils/number';
import { add, subtract } from '@/utils/float';
import { NumberInputNormalizer } from '@/components/core/numberInput';

export interface QuoteCurrency {
  balance: number,
  leverage: number,
  decimals: number,
}

export interface BaseCurrency {
  price: number,
  decimals: number,
  step: number,
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

  const normalizer: NumberInputNormalizer = (
    number: number,
    direction?: 'increment' | 'decrement',
  ) => {
    switch (direction) {
      case 'increment': return incrementDeposit(number);
      case 'decrement': return decrementDeposit(number);
      default: return calculateBaseToQuoteCurrencyPrice(number);
    }
  };

  const maxDeposit = computed(
    () => decrementDeposit(quoteCurrency.value.balance) * quoteCurrency.value.leverage,
  );

  return {
    baseCurrency,
    quoteCurrency,
    calculateBaseToQuoteCurrencyPrice,
    calculateQuoteToBaseCurrencyPrice,
    incrementDeposit,
    decrementDeposit,
    normalizer,
    maxDeposit,
  };
};
