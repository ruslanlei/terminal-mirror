import { computed, toRefs, watch } from 'vue';
import { DepositInputEmits, DepositInputProps } from '@/components/core/depositInput';
import { useLocalValue } from '@/hooks/useLocalValue';
import { useExchange } from '@/hooks/useExchange';
import { convertQuoteBalanceToBase } from '@/helpers/math/formulas/currency';
import {
  checkIsRoundedValueEqualToPercentOfTotal,
  percentsToRoundedValue,
  valueToRoundedPercents,
} from '@/helpers/math/percents';

export const useDepositInput = (
  props: DepositInputProps,
  emit: DepositInputEmits,
) => {
  const {
    quoteCurrencyDecimals,
    baseCurrencyDecimals,
    baseCurrencyStep,
    price,
    balance,
    leverage,
  } = toRefs(props);

  const localValue = useLocalValue<number>(props, emit, 'modelValue');

  const {
    maxQuoteCurrencyDeposit,
    maxQuoteCurrencyDepositLeveraged,
  } = useExchange(
    quoteCurrencyDecimals,
    baseCurrencyStep,
    price,
    balance,
    leverage,
  );

  const showLeveragedBalance = computed(
    () => maxQuoteCurrencyDeposit.value !== maxQuoteCurrencyDepositLeveraged.value,
  );

  const baseCurrencyBalance = computed(() => convertQuoteBalanceToBase(
    price.value,
    maxQuoteCurrencyDepositLeveraged.value,
  ));

  const localValueInPercents = computed({
    get: () => valueToRoundedPercents(2, baseCurrencyBalance.value)(
      localValue.value,
    ),
    set: (percents: number) => {
      localValue.value = percentsToRoundedValue(
        baseCurrencyDecimals.value,
        baseCurrencyBalance.value,
        percents,
      );
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
  ) => (!!baseCurrencyBalance.value
    && checkIsRoundedValueEqualToPercentOfTotal(
      baseCurrencyDecimals.value,
      baseCurrencyBalance.value,
      percents,
      localValue.value,
    )
  );

  return {
    localValue,
    showLeveragedBalance,
    baseCurrencyBalance,
    localValueInPercents,
    setPercentOfBalance,
    checkIsValueEqualToPercent,
    maxQuoteCurrencyDeposit,
    maxQuoteCurrencyDepositLeveraged,
  };
};
