<template>
  <div :class="$style.orderEventToast">
    <div :class="$style.head">
      <Typography
        size="title1"
        :state="['accent1', 'semiBold']"
      >
        {{ t('orderExecuted.label') }}
      </Typography>
      <Button
        :state="null"
        :size="null"
        :is-wide="false"
        @click="close"
      >
        <Typography state="accent2">
          <Icon icon="cross" />
        </Typography>
      </Button>
    </div>
    <div :class="$style.coinRow">
      <Typography
        state="accent2"
        size="text"
        :class="$style.coinRowLabel"
      >
        {{ t('orderExecuted.coin') }}
      </Typography>
      <div :class="$style.coin">
        <CoinLogo :coin="pairData?.base" />
        <Typography
          size="title2"
          :state="['accent1', 'semiBold']"
          :class="$style.coinLabel"
        >
          {{ pairData?.base }}
        </Typography>
      </div>
    </div>
    <div :class="$style.volume">
      <Typography
        state="accent2"
        size="text"
      >
        <i18n-t
          tag="span"
          keypath="orderExecuted.volume"
        >
          <template #value>
            <Typography
              size="title1"
              state="accent1"
              is-inline
            >
              <i18n-t keypath="common.currencyAmount">
                <template #amount>
                  {{ quoteCurrencyAmount }}
                </template>
                <template #currency>
                  <Typography
                    state="accent2"
                    is-inline
                  >
                    {{ pairData?.quote }}
                  </Typography>
                </template>
              </i18n-t>
            </Typography>
          </template>
        </i18n-t>
      </Typography>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import Icon from '@/components/core/icon/Icon.vue';
import Button from '@/components/core/button/Button.vue';
import { computed } from 'vue';
import { useMarketStore } from '@/stores/market';
import CoinLogo from '@/components/core/coinLogo/CoinLogo.vue';
import { multiply, roundToDecimalPoint } from '@/helpers/number';
import { compose } from '@/utils/fp';
import { OrderEventToastEmits, OrderEventToastProps } from './index';

const props = defineProps<OrderEventToastProps>();

const emit = defineEmits<OrderEventToastEmits>();

const close = () => {
  emit('close');
};

setTimeout(close, 7000);

const { t } = useI18n();

const marketStore = useMarketStore();

const pairData = computed(() => marketStore.getPairData(props.order.pair));

const quoteCurrencyAmount = computed(() => compose(
  roundToDecimalPoint(2),
  multiply,
)(props.order.quantity, props.order.price));
</script>

<style lang="scss" module>
.orderEventToast {
  background-color: rgba(var(--color-background-3), 0.9);
  backdrop-filter: blur(7px);
  border-radius: 8px;
  padding: 25px;
}

.head {
  display: flex;
  justify-content: space-between;
}

.coinRow {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.coinRowLabel {}

.coin {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.coinLabel {
  margin-left: 10px;
}

.volume {
  margin-top: 10px;
}
</style>
