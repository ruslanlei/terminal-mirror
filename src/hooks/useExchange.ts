import {
  computed,
  Ref,
} from 'vue';
import { compose } from '@/utils/fp';
import {
  divideRight,
  multiply,
  roundToDecimalPoint,
} from '@/math/float';
import { Currency } from '@/types/currency';
import {
  incrementQuoteDepositByBaseStep,
  decrementQuoteDepositByBaseStep,
} from '@/math/formulas/currency';

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
  const incrementDeposit = (deposit: number) => compose(
    roundToDecimalPoint(quoteCurrency.value.decimals),
    incrementQuoteDepositByBaseStep(
      baseCurrency.value.step,
      baseCurrency.value.price,
    ),
  )(deposit);

  const decrementDeposit = (quoteDeposit: number) => compose(
    roundToDecimalPoint(quoteCurrency.value.decimals),
    decrementQuoteDepositByBaseStep(
      baseCurrency.value.step,
      baseCurrency.value.price,
    ),
  )(quoteDeposit);

  const maxQuoteCurrencyDeposit = computed(
    () => decrementDeposit(quoteCurrency.value.balance),
  );

  const maxQuoteCurrencyDepositLeveraged = computed(() => compose(
    decrementDeposit,
    multiply,
  )(
    quoteCurrency.value.balance,
    quoteCurrency.value.leverage,
  ));

  const maxBaseCurrencyDepositLeveraged = computed(
    () => divideRight(
      baseCurrency.value.price,
      maxQuoteCurrencyDepositLeveraged.value,
    ),
  );

  return {
    baseCurrency,
    quoteCurrency,
    incrementDeposit,
    decrementDeposit,
    maxQuoteCurrencyDeposit,
    maxQuoteCurrencyDepositLeveraged,
    maxBaseCurrencyDepositLeveraged,
  };
};
