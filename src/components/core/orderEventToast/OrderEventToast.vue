<template>
  <div :class="$style.orderEventToast">
    <div :class="$style.head">
      <div :class="$style.mainInfo">
        <Typography
          size="title1"
          :state="['accent1', 'semiBold']"
        >
          {{ t('orderExecuted.label') }}
        </Typography>
        <OrderSideLabel
          v-if="!hideOrderSide"
          :side="order.side"
        />
      </div>
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
    <div :class="$style.badges">
      <Badge
        :state="computedStatusBadgeState"
        size="sm"
        :class="$style.badge"
      >
        <Typography
          size="title4"
          state="accent1"
        >
          {{ computedStatus }}
        </Typography>
      </Badge>
      <Badge
        v-if="order.order_type === 'tp'"
        size="sm"
        state="primary1Background"
        :class="$style.badge"
      >
        <Typography
          size="title4"
          state="accent1"
        >
          {{ t('order.shortType.tp') }}
        </Typography>
      </Badge>
      <Badge
        v-if="order.order_type === 'sl'"
        size="sm"
        state="danger2"
        :class="$style.badge"
      >
        <Typography
          size="title4"
          state="accent1"
        >
          {{ t('order.shortType.sl') }}
        </Typography>
      </Badge>
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
import { multiply, roundToDecimalPlaces } from '@/utils/number';
import { compose } from '@/utils/fp';
import Badge from '@/components/core/badge/Badge.vue';
import OrderSideLabel from '@/components/core/orderSideLabel/OrderSideLabel.vue';
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
  roundToDecimalPlaces(6),
  multiply,
)(props.order.quantity, props.order.price));

const hideOrderSide = computed(() => [
  props.order.order_type === 'tp',
  props.order.order_type === 'sl',
].some(Boolean));

const computedStatus = computed(() => ({
  new: t('order.status.new'),
  filled: t('order.status.filled'),
  expired: t('order.status.expired'),
  canceled: t('order.status.canceled'),
  executed: t('order.status.executed'),
  closed: t('order.status.closed'),
}[props.order.status]));

const computedStatusBadgeState = computed(() => ({
  new: 'success',
  filled: 'success',
  expired: 'danger',
  canceled: 'danger',
  executed: 'success',
  closed: 'success',
}[props.order.status]));
</script>

<style lang="scss" module>
.orderEventToast {
  background-color: rgba(var(--color-background-3), 0.9);
  backdrop-filter: blur(7px);
  border-radius: 8px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.head {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mainInfo {
  display: flex;
  align-items: center;
  gap: 10px;
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

.badge {
  padding: 4px 10px;
}

.badges {
  margin-top: 15px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
}
</style>
