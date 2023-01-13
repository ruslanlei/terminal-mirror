<template>
  <OrderFormStopLossPartContainer>
    <template #stopLossLabel>
      {{ t('order.stopLoss.switchLabel') }}
    </template>
    <template #stopLossSwitch>
      <Switch v-model="isStopLossEnabled" />
    </template>
    <template #exactPriceLabel>
      {{ t('order.stopLoss.exactPrice') }}
    </template>
    <template #exactPriceInput>
      <NumberInput :state="['smSize', 'defaultColor']" />
    </template>
    <template #amountOfRiskLabel>
      {{ t('order.stopLoss.amountOfRisk') }}
    </template>
    <template #amountOfRiskInput>
      <NumberInput :state="['smSize', 'defaultColor']" />
    </template>
    <template #percentOfOrderLabel>
      {{ t('order.stopLoss.percentOfOrder') }}
    </template>
    <template #percentOfOrderInput>
      <NumberInput :state="['smSize', 'defaultColor']" />
    </template>
    <template #percentOfDepositLabel>
      {{ t('order.stopLoss.percentOfDeposit') }}
    </template>
    <template #percentOfDepositInput>
      <NumberInput :state="['smSize', 'defaultColor']" />
    </template>
    <template #ratio>
      <OrderFormRatio />
    </template>
    <template #submit="{ buttonClass }">
      <Button
        :class="buttonClass"
        :state="['primaryColor', 'mdSize']"
      >
        {{ t('common.save') }}
      </Button>
    </template>
  </OrderFormStopLossPartContainer>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import OrderFormStopLossPartContainer
  from '@/containers/orderFormStopLossPartContainer/OrderFormStopLossPartContainer.vue';
import Switch from '@/components/core/switch/Switch.vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import OrderFormRatio from '@/components/app/orderFormRatio/OrderFormRatio.vue';
import Button from '@/components/core/button/Button.vue';

const { t } = useI18n();

const isStopLossEnabled = inject<Ref<boolean>>('isStopLossEnabled');
</script>
