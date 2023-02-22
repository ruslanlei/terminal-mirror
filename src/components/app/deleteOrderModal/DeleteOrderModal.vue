<template>
  <Modal :class="$style.deleteOrderModal">
    <Picture
      :class="$style.illustration"
      :srcset="illustrationSrcSet"
    />
    <Typography
      size="title1"
      :state="['accent1', 'bold']"
      :class="$style.label"
    >
      {{ t('deleteOrder.label') }}
    </Typography>
    <transition name="orderModalPnlTransition">
      <Typography
        v-if="isOrderFilled"
        size="title1"
        :state="['accent1', 'medium']"
        :class="$style.pnl"
      >
        <i18n-t
          tag="span"
          keypath="deleteOrder.pnl"
        >
          <template #pnl>
            <Typography
              :is-inline="true"
              :state="[
                isPositive(pnl)
                  ? 'success'
                  : 'danger'
              ]"
            >
              {{ t('common.currencyAmount', { amount: pnl, currency: orderCurrency }) }}
            </Typography>
          </template>
        </i18n-t>
      </Typography>
    </transition>
    <div :class="$style.controls">
      <Button
        :class="$style.control"
        state="successColor"
        size="md"
        @click="close"
      >
        {{ t('common.no') }}
      </Button>
      <Button
        :class="$style.control"
        state="dangerColor"
        size="md"
        :is-loading="isDeleting"
        @click="handleDelete"
      >
        {{ t('common.yes') }}
      </Button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onBeforeUnmount,
} from 'vue';
import { useI18n } from 'vue-i18n';
import Modal from '@/components/core/modal/Modal.vue';
import Picture from '@/components/core/picture/Picture.vue';
import { collectSrcSet } from '@/helpers/dom';
import Typography from '@/components/app/typography/Typography.vue';
import Button from '@/components/core/button/Button.vue';
import { Order, TakeProfit } from '@/api/types/order';
import { reduceTakeProfitsToQuantitiesSum } from '@/helpers/math/formulas/takeProfit';
import { calculatePnl } from '@/helpers/math/formulas/pnl';
import { isPositive, subtractRight } from '@/helpers/number';
import { useMarketStore } from '@/stores/market';
import { useEmulatorStore } from '@/stores/emulator';
import { compose } from '@/utils/fp';
import { cloneDeep } from '@/utils/object';
import { filter } from '@/utils/array';
import { useChartDataStore } from '@/stores/chartData';
import { DeleteOrderModalEmits, DeleteOrderModalProps } from './index';

import IllustrationPng from './assets/illustration.png';
import IllustrationWebp from './assets/illustration.webp';

const props = defineProps<DeleteOrderModalProps>();

const emit = defineEmits<DeleteOrderModalEmits>();

const illustrationSrcSet = computed(() => collectSrcSet([
  IllustrationWebp,
  IllustrationPng,
]));

const { t } = useI18n();

const marketStore = useMarketStore();
const chartDataStore = useChartDataStore();
const emulatorStore = useEmulatorStore();

const close = () => {
  emit('close');
};

const order = ref(cloneDeep(props.order));

const isOrderFilled = computed(() => order.value.status === 'filled');

const orderCurrency = computed(() => marketStore.pairsMap[order.value.pair].quote);

const takeProfits = ref<TakeProfit[]>([]);
const setTakeProfits = (updatedTakeProfits: TakeProfit[]) => {
  takeProfits.value = compose(
    cloneDeep,
    filter(
      (takeProfit: TakeProfit) => takeProfit.status === 'executed',
      updatedTakeProfits,
    ),
  )();
};

const takeProfitsQuantitySum = computed(
  () => reduceTakeProfitsToQuantitiesSum(takeProfits.value || []),
);

const pnl = computed(() => {
  const quantity = subtractRight(
    takeProfitsQuantitySum.value,
    props.order.quantity,
  );

  return calculatePnl(
    props.order.price,
    quantity,
    chartDataStore.currentPrice || 0,
  );
});

const onEmulatorEvent = (updatedOrder: Order) => {
  if (updatedOrder.id === order.value.id) {
    order.value = cloneDeep(updatedOrder);
    return;
  }

  const takeProfitIndex = takeProfits.value.findIndex(
    (takeProfit) => takeProfit.id === order.value.id,
  );

  if (takeProfitIndex !== -1) {
    takeProfits.value[takeProfitIndex] = updatedOrder as TakeProfit;
  }
};

if (props.takeProfits) {
  setTakeProfits(props.takeProfits);
}

const unsubscribeSimulateEvent = emulatorStore.subscribeSimulateEvent(onEmulatorEvent);

const isDeleting = ref(false);
const handleDelete = async () => {
  isDeleting.value = true;

  const {
    result,
  } = await (
    isOrderFilled.value
      ? marketStore.closeOrder
      : marketStore.deleteOrder
  )(order.value.id);

  isDeleting.value = false;

  if (result) {
    close();
  }
};

onBeforeUnmount(unsubscribeSimulateEvent);
</script>

<style lang="scss" module>
.deleteOrderModal {
  padding: 46px;
  position: relative;
}

.illustration {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-15%) translateX(8%);
}

.label {
  max-width: 50%;
  font-size: 24px;
}

.pnl {
  margin-top: 20px;
  & + .controls {
    margin-top: 64px;
  }
}

.controls {
  margin-top: 104px;
  display: flex;
  gap: 20px;
}

.control {
  padding: 12px;
}
</style>

<style lang="scss">
.orderModalPnlTransition {
  &-enter-active,
  &-leave-active {
    transition: opacity 200ms, transform 200ms;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(10%);
  }
}
</style>
