<template>
  <OrderFormTakeProfilePartContainer>
    <template #profit>
      {{ t('order.takeProfit.profit') }}
    </template>
    <template #profitSwitch>
      <Switch v-model="isTakeProfitsEnabled" />
    </template>
    <template #takeProfitsList>
      <TakeProfitList
        v-model="takeProfits"
        :currency="baseCurrency"
        :order-price="model?.price"
        :order-quantity="model?.quantity"
      />
    </template>
    <template #ratioTip="{ tipIconClass }">
      <Icon
        :size="20"
        icon="info"
        :class="tipIconClass"
      />
    </template>
    <template #ratioLabel>
      {{ t('order.takeProfit.ratio') }}
    </template>
    <template #ratio>
      1 to 3
    </template>
    <template #profitLabel>
      {{ t('order.takeProfit.profit') }}
    </template>
    <template #profitValue>
      {{ t('order.takeProfit.profitValue', { profit: '100$' }) }}
    </template>
    <template #riskLabel>
      {{ t('order.takeProfit.risk') }}
    </template>
    <template #riskValue>
      {{ t('order.takeProfit.riskValue', { risk: '100$' }) }}
    </template>
    <template #submit="{ buttonClass }">
      <Button
        :class="buttonClass"
        :state="['successColor', 'mdSize']"
        @click="onSubmit"
      >
        {{ t('common.save') }}
      </Button>
    </template>
  </OrderFormTakeProfilePartContainer>
</template>

<script setup lang="ts">
import {
  inject,
  Ref,
} from 'vue';
import { useI18n } from 'vue-i18n';
import OrderFormTakeProfilePartContainer from '@/containers/orderFormTakeProfitPartContainer/OrderFormTakeProfitPartContainer.vue';
import Switch from '@/components/core/switch/Switch.vue';
import Icon from '@/components/core/icon/Icon.vue';
import Button from '@/components/core/button/Button.vue';
import TakeProfitList from '@/components/app/takeProfitList/TakeProfitList.vue';
import { OrderModel } from '@/hooks/useOrderCreate';
import { BaseCurrency } from '@/hooks/useExchange';
import { TakeProfit } from '@/components/app/takeProfitList';
import {
  OrderFormTakeProfitPartEmits,
} from './index';

const emit = defineEmits<OrderFormTakeProfitPartEmits>();

const { t } = useI18n();

const model = inject<OrderModel>('model');
const baseCurrency = inject<BaseCurrency>('baseCurrency');
const takeProfits = inject<TakeProfit[]>('takeProfits');
const isTakeProfitsEnabled = inject<Ref<boolean>>('isTakeProfitsEnabled');

const onSubmit = () => {
  emit('submit');
};
</script>
