import { computed, toRefs, watch } from 'vue';
import { DepositInputEmits, DepositInputProps } from '@/components/core/depositInput';
import { useLocalValue } from '@/hooks/useLocalValue';
import { useExchange } from '@/hooks/useExchange';
import { convertQuoteBalanceToBase } from '@/math/formulas/currency';
import {
  checkIsRoundedValueEqualToPercentOfTotal,
  percentsToRoundedValue,
  valueToRoundedPercents,
} from '@/math/percents';

export const useDepositInput = (
  props: DepositInputProps,
  emit: DepositInputEmits,
) => {
  const {
    baseCurrency,
    quoteCurrency,
  } = toRefs(props);

  const localValue = useLocalValue<number>(props, emit, 'modelValue');

  const {
    maxQuoteCurrencyDeposit,
    maxQuoteCurrencyDepositLeveraged,
  } = useExchange(
    baseCurrency,
    quoteCurrency,
  );

  const showLeveragedBalance = computed(
    () => maxQuoteCurrencyDeposit.value !== maxQuoteCurrencyDepositLeveraged.value,
  );

  const baseCurrencyBalance = computed(() => convertQuoteBalanceToBase(
    baseCurrency.value.price,
    maxQuoteCurrencyDepositLeveraged.value,
  ));

  const localValueInPercents = computed({
    get: () => valueToRoundedPercents(2, baseCurrencyBalance.value)(
      localValue.value,
    ),
    set: (percents: number) => {
      localValue.value = percentsToRoundedValue(
        baseCurrency.value.decimals,
        baseCurrencyBalance.value,
      )(percents);
    },
  });

  const setPercentOfBalance = (percents: number) => {
    localValueInPercents.value = percents;
  };

  watch(localValueInPercents, () => {
    if (localValueInPercents.value > 100) {
      localValueInPercents.value = 100;
    }
  });

  const checkIsValueEqualToPercent = (
    percents: number,
  ) => checkIsRoundedValueEqualToPercentOfTotal(
    baseCurrency.value.decimals,
    baseCurrencyBalance.value,
    percents,
  )(localValue.value);

  return {
    localValue,
    baseCurrency,
    quoteCurrency,
    showLeveragedBalance,
    baseCurrencyBalance,
    localValueInPercents,
    setPercentOfBalance,
    checkIsValueEqualToPercent,
    maxQuoteCurrencyDeposit,
    maxQuoteCurrencyDepositLeveraged,
  };
};
