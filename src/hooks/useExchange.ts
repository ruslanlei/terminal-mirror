import {
  computed,
  Ref,
} from 'vue';
import { compose } from '@/utils/fp';
import {
  divideRight,
  multiply,
  roundToDecimalPoint,
} from '@/utils/number';
import {
  incrementQuoteDepositByBaseStep,
  decrementQuoteDepositByBaseStep,
} from '@/helpers/math/formulas/currency';

export const useExchange = (
  quoteCurrencyDecimals: Ref<number>,
  baseCurrencyStep: Ref<number>,
  price: Ref<number>,
  balance: Ref<number>,
  leverage: Ref<number>,
) => {
  const incrementDeposit = (deposit: number) => compose(
    roundToDecimalPoint(quoteCurrencyDecimals.value),
    incrementQuoteDepositByBaseStep(
      baseCurrencyStep.value,
      price.value,
    ),
  )(deposit);

  const decrementDeposit = (quoteDeposit: number) => compose(
    roundToDecimalPoint(quoteCurrencyDecimals.value),
    decrementQuoteDepositByBaseStep(
      baseCurrencyStep.value,
      price.value,
    ),
  )(quoteDeposit);

  const maxQuoteCurrencyDeposit = computed(
    () => balance.value,
  );

  const maxQuoteCurrencyDepositLeveraged = computed(() => multiply(
    balance.value,
    leverage.value,
  ));

  const maxBaseCurrencyDepositLeveraged = computed(
    () => divideRight(
      price.value,
      maxQuoteCurrencyDepositLeveraged.value,
    ),
  );

  return {
    incrementDeposit,
    decrementDeposit,
    maxQuoteCurrencyDeposit,
    maxQuoteCurrencyDepositLeveraged,
    maxBaseCurrencyDepositLeveraged,
  };
};
