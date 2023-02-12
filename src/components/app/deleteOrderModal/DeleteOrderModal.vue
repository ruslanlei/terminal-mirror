<template>
  <Modal
    :class="$style.deleteOrderModal"
  >
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
    <Typography
      v-if="showPnl"
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
import { Order, SubOrder } from '@/api/types/order';
import { reduceTakeProfitsToQuantitiesSum } from '@/helpers/math/formulas/takeProfit';
import { calculatePnl } from '@/helpers/math/formulas/pnl';
import { isPositive, subtractRight } from '@/helpers/number';
import { useMarketStore } from '@/stores/market';
import { useEmulatorStore } from '@/stores/emulator';
import { compose, filter } from '@/utils/fp';
import { cloneDeep } from '@/utils/object';
import { DeleteOrderModalProps } from './index';

import IllustrationPng from './assets/illustration.png';
import IllustrationWebp from './assets/illustration.webp';

const props = defineProps<DeleteOrderModalProps>();

const illustrationSrcSet = computed(() => collectSrcSet([
  IllustrationWebp,
  IllustrationPng,
]));

const { t } = useI18n();

const marketStore = useMarketStore();
const emulatorStore = useEmulatorStore();

const order = ref(cloneDeep(props.order));

const showPnl = computed(() => order.value.status === 'filled');

const orderCurrency = computed(() => marketStore.pairsMap[order.value.pair].quote);

const takeProfits = ref<SubOrder[]>([]);
const setTakeProfits = (tps: SubOrder[]) => {
  takeProfits.value = compose(
    cloneDeep,
    filter(
      tps,
      (takeProfit: SubOrder) => takeProfit.status === 'executed',
    ),
  )();
};

const takeProfitsQuantitySum = computed(
  () => reduceTakeProfitsToQuantitiesSum(takeProfits.value),
);

const pnl = computed(() => {
  const quantity = subtractRight(
    takeProfitsQuantitySum.value,
    props.order.quantity,
  );

  return calculatePnl(
    props.order.price,
    quantity,
    marketStore.activePairPrice,
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
    takeProfits.value[takeProfitIndex] = updatedOrder as SubOrder;
  }
};

if (props.takeProfits) {
  setTakeProfits(props.takeProfits);
  emulatorStore.subscribeSimulateEvent(onEmulatorEvent);
}

onBeforeUnmount(() => {
  emulatorStore.unsubscribeSimulateEvent(onEmulatorEvent);
});
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
}
</style>
