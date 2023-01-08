import { computed, reactive, ref } from 'vue';
import { roundToDecimalPoint } from '@/utils/number';
import { add, subtract } from '@/utils/float';
import { NumberInputNormalizer } from '@/components/core/numberInput';

export interface QuoteCurrency {
  balance: number,
  decimals: number,
}

export interface BaseCurrency {
  price: number,
  decimals: number,
  step: number,
}

export const useExchange = (
  baseCurrency: BaseCurrency,
  quoteCurrency: QuoteCurrency,
) => {
  const calculateBaseToQuoteCurrencyPrice = (
    baseCurrencyQuantity: number,
  ) => roundToDecimalPoint(
    baseCurrencyQuantity * baseCurrency.price,
    quoteCurrency.decimals,
  );

  const calculateQuoteToBaseCurrencyPrice = (
    quoteCurrencyQuantity: number,
  ) => roundToDecimalPoint(
    quoteCurrencyQuantity / baseCurrency.price,
    baseCurrency.decimals,
  );

  const incrementDeposit = (number: number) => {
    const quoteInBaseCurrencyPrice = calculateQuoteToBaseCurrencyPrice(number);

    return calculateBaseToQuoteCurrencyPrice(add(
      [
        quoteInBaseCurrencyPrice,
        baseCurrency.step,
      ],
      baseCurrency.decimals,
    ));
  };

  const decrementDeposit = (number: number) => {
    const quoteInBaseCurrencyPrice = calculateQuoteToBaseCurrencyPrice(number);

    return calculateBaseToQuoteCurrencyPrice(subtract(
      quoteInBaseCurrencyPrice,
      baseCurrency.step,
      baseCurrency.decimals,
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

  const maxDeposit = computed(() => decrementDeposit(quoteCurrency.balance));

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
