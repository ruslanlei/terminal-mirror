<template>
  <div :class="[$style.orderFormRatio, $style[state]]">
    <div :class="$style.ratio">
      <div :class="$style.ratioLabel">
        <Icon
          v-if="isRadioLabelIconVisible"
          :size="20"
          icon="info"
          :class="$style.ratioTip"
        />
        <div :class="$style.ratioLabelText">
          {{ t('order.takeProfit.ratio') }}
        </div>
      </div>
      <OrderRatioBadge
        :take-profits-sum="takeProfitsSum"
        :stop-loss-risk="stopLossRisk"
      />
    </div>
    <div :class="$style.metrics">
      <div :class="$style.metric">
        <div
          v-if="isMetricsLabelVisible"
          :class="$style.label"
        >
          {{ t('order.takeProfit.risk') }}
        </div>
        <div :class="$style.risk">
          {{ riskDisplayValue }}
        </div>
      </div>
      <div :class="$style.metric">
        <div
          v-if="isMetricsLabelVisible"
          :class="$style.label"
        >
          {{ t('order.takeProfit.profit') }}
        </div>
        <div :class="$style.profit">
          {{ profitDisplayValue }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Icon from '@/components/core/icon/Icon.vue';
import OrderRatioBadge from '@/components/app/orderRatioBadge/OrderRatioBadge.vue';
import { computed } from 'vue';
import { useMarketStore } from '@/stores/market';
import { storeToRefs } from 'pinia';
import { compose } from '@/utils/fp';
import { roundToDecimalPlaces } from '@/utils/number';
import { reduceTakeProfitsToAmountOfProfit } from '@/helpers/math/formulas/takeProfit';
import { injectOrderFormState } from '@/components/app/orderForm';
import { calculateVolumeDifference } from '@/helpers/math/formulas/order';
import { OrderFormEstimatesProps } from './index';

const { t } = useI18n();

const props = defineProps<OrderFormEstimatesProps>();

const {
  model,
  stopLossPrice,
  takeProfits,
} = injectOrderFormState();

const marketStore = useMarketStore();
const {
  activePairData,
  quoteCurrencyDecimals,
} = storeToRefs(marketStore);

const isRadioLabelIconVisible = computed(() => props.state === 'default');
const isMetricsLabelVisible = computed(() => props.state === 'default');

const takeProfitsSum = computed(() => compose(
  roundToDecimalPlaces(quoteCurrencyDecimals.value),
  reduceTakeProfitsToAmountOfProfit(model.price),
)(takeProfits.value));

const profitDisplayValue = computed(() => t('order.takeProfit.profitValue', {
  profit:
    t('common.currencyAmount', {
      amount: takeProfitsSum.value,
      currency: activePairData.value?.quote,
    }),
}));

const stopLossRisk = computed(
  () => compose(
    roundToDecimalPlaces(quoteCurrencyDecimals.value),
    calculateVolumeDifference,
  )(
    model.quantity,
    model.price,
    stopLossPrice.value,
  ),
);

const riskDisplayValue = computed(() => t('order.takeProfit.riskValue', {
  risk:
    t('common.currencyAmount', {
      amount: stopLossRisk.value,
      currency: activePairData.value?.quote,
    }),
}));
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.orderFormRatio {
  width: 100%;
}

.label {
  @include title2;
  font-weight: 600;
  color: rgb(var(--color-accent-1));
}

.ratio {
  display: flex;
  justify-content: space-between;
}

.ratioTip {
  color: rgb(var(--color-danger-2));
}

.ratioLabel {
  display: flex;
  color: rgb(var(--color-accent-1));
  @include title2;
  font-weight: 600;
}

.metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.metric {
  .label {
    @include title4;
  }
}

.profit, .risk {
  @include title5;
  font-weight: 600;
}

.profit {
  color: rgb(var(--color-primary-2));
}

.risk {
  color: rgb(var(--color-danger-3));
}

.default {
  .profit, .risk {
    border-radius: 5px;
    padding: 7px 0;
    display: flex;
    justify-content: center;
    margin-top: 5px;
  }

  .ratioLabel {
    @include title2;
  }

  .metrics {
    margin-top: 10px;
  }

  .profit {
    background-color: rgb(var(--color-background-4));
  }

  .risk {
    background-color: rgb(var(--color-danger-4));
  }

  .ratioLabelText {
    margin-left: 10px;
  }
}

.tiny {
  display: flex;
  flex-direction: column-reverse;

  .profit {
    text-align: right;
  }

  .ratioLabel {
    @include title4;
  }

  .risk {
  }

  .metrics {
  }

  .ratio {
    margin-top: 6px;
  }
}
</style>
