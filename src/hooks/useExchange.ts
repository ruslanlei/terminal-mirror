import { computed, ref } from 'vue';
import { roundToDecimalPoint } from '@/utils/number';
import { add, subtract } from '@/utils/float';
import { NumberInputNormalizer } from '@/components/core/numberInput';

export const useExchange = () => {
  const quoteCurrencyBalance = ref(3208);
  const quoteCurrencyDecimals = ref(2);

  const baseCurrencyPrice = ref(16890);
  const baseCurrencyDecimals = ref(3);
  const baseCurrencyStep = ref(0.001);

  const calculateBaseToQuoteCurrencyPrice = (
    baseCurrencyQuantity: number,
  ) => roundToDecimalPoint(
    baseCurrencyQuantity * baseCurrencyPrice.value,
    quoteCurrencyDecimals.value,
  );

  const calculateQuoteToBaseCurrencyPrice = (
    quoteCurrencyQuantity: number,
  ) => roundToDecimalPoint(
    quoteCurrencyQuantity / baseCurrencyPrice.value,
    baseCurrencyDecimals.value,
  );

  const incrementDeposit = (number: number) => {
    const quoteInBaseCurrencyPrice = calculateQuoteToBaseCurrencyPrice(number);

    return calculateBaseToQuoteCurrencyPrice(add(
      [
        quoteInBaseCurrencyPrice,
        baseCurrencyStep.value,
      ],
      baseCurrencyDecimals.value,
    ));
  };

  const decrementDeposit = (number: number) => {
    const quoteInBaseCurrencyPrice = calculateQuoteToBaseCurrencyPrice(number);

    return calculateBaseToQuoteCurrencyPrice(subtract(
      quoteInBaseCurrencyPrice,
      baseCurrencyStep.value,
      baseCurrencyDecimals.value,
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

  const maxDeposit = computed(() => decrementDeposit(quoteCurrencyBalance.value));

  return {
    quoteCurrencyBalance,
    baseCurrencyPrice,
    baseCurrencyDecimals,
    baseCurrencyStep,
    quoteCurrencyDecimals,
    calculateBaseToQuoteCurrencyPrice,
    calculateQuoteToBaseCurrencyPrice,
    incrementDeposit,
    decrementDeposit,
    normalizer,
    maxDeposit,
  };
};