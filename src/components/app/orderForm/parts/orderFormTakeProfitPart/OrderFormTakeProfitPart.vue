<template>
  <OrderFormTakeProfilePartContainer>
    <template #profit>
      {{ t('order.takeProfit.profit') }}
    </template>
    <template #profitSwitch>
      <Switch v-model="isTakeProfitsEnabled" />
    </template>
    <template #takeProfitsAmountLabel>
      {{ t('order.takeProfit.amountOfOrders') }}
    </template>
    <template #takeProfitsAmountInput>
      <NumberInput
        v-model="takeProfitsAmount"
        :min="1"
        :max="maxTakeProfits"
        :state="['smSize', 'defaultColor']"
        @input="onTakeProfitsAmountInput"
      />
    </template>
    <template #takeProfitsList>
      <TakeProfitList
        v-model="takeProfits"
        v-model:take-profits-amount="takeProfitsAmount"
        :currency="baseCurrency"
        :order-price="model?.price"
        :order-quantity="model?.quantity || baseCurrency?.step"
      />
    </template>
    <template #ratio>
      <OrderFormRatio />
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
  ComputedRef,
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
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import OrderFormRatio from '@/components/app/orderFormRatio/OrderFormRatio.vue';
import { OrderFormTakeProfitPartEmits } from './index';

const emit = defineEmits<OrderFormTakeProfitPartEmits>();

const { t } = useI18n();

const model = inject<OrderModel>('model');
const baseCurrency = inject<BaseCurrency>('baseCurrency');
const takeProfits = inject<TakeProfit[]>('takeProfits');
const isTakeProfitsEnabled = inject<Ref<boolean>>('isTakeProfitsEnabled');

const maxTakeProfits = inject<ComputedRef<number>>('maxTakeProfits');
const takeProfitsAmount = inject<Ref<number>>('takeProfitsAmount');

const onTakeProfitsAmountInput = () => {
  emit('takeProfitsAmountInput');
};

const onSubmit = () => {
  emit('submit');
};
</script>
