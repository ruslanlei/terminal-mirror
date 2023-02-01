<template>
  <Form
    v-model="model"
    :validation-schema="validationSchema"
    :class="$style.ordersForm"
    @submit="handleSubmit"
  >
    <OrderFromContainer>
      <template
        #orderDirectionSelector="{
          selectOptionClass
        }"
      >
        <FormSelector
          :state="['mdSize', 'secondaryColor5']"
          :options="orderDirectionOptions"
          name="side"
        >
          <template #option="{ option }">
            <div :class="selectOptionClass">
              <Icon :icon="option.icon" />
              {{ option.label }}
            </div>
          </template>
        </FormSelector>
      </template>
      <template #tabs="{ tabContentClass, tabsClass }">
        <Tabs
          v-model="settingsActiveTab"
          :tabs="settingsTabs"
          :selector-props="{
            state: ['primaryColor2', 'mdSize'],
            thickening: 2,
          }"
          :class="tabsClass"
          :content-class="tabContentClass"
        >
          <template #tab(input)>
            <OrderFormInputPart>
              <template #submit>
                <Button
                  type="submit"
                  :state="['gradientColor', 'mdSize', 'interactive']"
                  :class="$style.submit"
                  :is-loading="isLoading"
                >
                  {{ t('order.submit') }}
                </Button>
              </template>
            </OrderFormInputPart>
          </template>
          <template #tab(tp)>
            <OrderFormTakeProfitPart
              @take-profits-amount-input="autoCalculateTakeProfits"
              @submit="openTab('input')"
            />
          </template>
          <template #tab(sl)>
            <OrderFormStopLossPart @submit="openTab('input')" />
          </template>
        </Tabs>
      </template>
    </OrderFromContainer>
  </Form>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  provide,
} from 'vue';
import { useI18n } from 'vue-i18n';
import Icon from '@/components/core/icon/Icon.vue';
import Tabs from '@/components/core/tabs/Tabs.vue';
import OrderFromContainer from '@/containers/orderFormContainer/OrderFormContainer.vue';
import Button from '@/components/core/button/Button.vue';
import { Form, FormSelector } from '@/form';

import { useOrderCreate } from '@/hooks/useOrderCreate';
import { OrderFormInjectionKey, OrderFormTab } from '@/components/app/orderForm/index';
import { Tab } from '@/components/core/tabs';

import { divideRight, roundToDecimalPoint } from '@/math/float';
import { compose } from '@/utils/fp';
import OrderFormInputPart from './composables/orderFormInputPart/OrderFormInputPart.vue';
import OrderFormTakeProfitPart from './composables/orderFormTakeProfitPart/OrderFormTakeProfitPart.vue';
import OrderFormStopLossPart from './composables/orderFormStopLossPart/OrderFormStopLossPart.vue';

const { t } = useI18n();

const settingsActiveTab = ref<OrderFormTab>('input');

const settingsTabs = computed<Tab<OrderFormTab>[]>(() => [
  {
    label: t('order.additionalSettings.input'),
    value: 'input',
  },
  {
    label: t('order.additionalSettings.tp'),
    value: 'tp',
  },
  {
    label: t('order.additionalSettings.sl'),
    value: 'sl',
  },
  {
    label: t('order.additionalSettings.slx'),
    value: 'slx',
  },
]);

const openTab = (tab: OrderFormTab) => {
  settingsActiveTab.value = tab;
};

const {
  model,
  validationSchema,
  orderDirectionOptions,
  takeProfits,
  takeProfitsIncomeSum,
  isTakeProfitsEnabled,
  quoteCurrency,
  baseCurrency,
  autoCalculateTakeProfits,
  maxTakeProfits,
  takeProfitsAmount,
  isStopLossEnabled,
  stopLossPrice,
  stopLossRisk,
  pledge,
  liquidationPrice,
  isLoading,
  handleSubmit,
} = useOrderCreate();

const ratio = computed(() => {
  const isNumbersValid = takeProfitsIncomeSum.value
      && stopLossRisk.value
      && takeProfitsIncomeSum.value > stopLossRisk.value;

  return isNumbersValid
    ? t('order.ratio', {
      loss: 1,
      profit: compose(
        roundToDecimalPoint(1),
        divideRight,
      )(stopLossRisk.value, takeProfitsIncomeSum.value),
    })
    : t('order.ratio', { loss: 0, profit: 0 });
});

const profitDisplayValue = computed(() => t('order.takeProfit.profitValue', {
  profit:
    t('common.currencyAmount', {
      amount: takeProfitsIncomeSum.value,
      currency: quoteCurrency.value.name,
    }),
}));

const riskDisplayValue = computed(() => t('order.takeProfit.riskValue', {
  risk:
    t('common.currencyAmount', {
      amount: stopLossRisk.value,
      currency: quoteCurrency.value.name,
    }),
}));

provide(OrderFormInjectionKey, {
  model,
  takeProfits,
  takeProfitsIncomeSum,
  isTakeProfitsEnabled,
  quoteCurrency,
  baseCurrency,
  maxTakeProfits,
  takeProfitsAmount,
  isStopLossEnabled,
  stopLossPrice,
  stopLossRisk,
  pledge,
  liquidationPrice,
  ratio,
  profitDisplayValue,
  riskDisplayValue,
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.ordersForm {
  height: 100%;
}

.tabs {
  margin-top: 22px;
  flex-grow: 1;
}

.orderSideOption {
  display: flex;
  align-items: center;
  gap: 5px;
}

.settingsTabsContent {
  margin: 0 -22px;
}

.tab {
  height: 100%;
}
</style>
