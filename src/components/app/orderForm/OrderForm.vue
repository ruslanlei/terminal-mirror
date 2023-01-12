<template>
  <Form
    v-model="model"
    :validation-schema="validationSchema"
    :class="$style.ordersForm"
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
            <OrderFormInputPart />
          </template>
          <template #tab(tp)>
            <OrderFormTakeProfitPart
              @submit="openTab('input')"
            />
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
  Ref,
  ComputedRef,
} from 'vue';
import { useI18n } from 'vue-i18n';
import Icon from '@/components/core/icon/Icon.vue';
import Tabs from '@/components/core/tabs/Tabs.vue';
import OrderFromContainer from '@/containers/orderFormContainer/OrderFormContainer.vue';
import { Form, FormSelector } from '@/components/form';

import { OrderModel, useOrderCreate } from '@/hooks/useOrderCreate';
import { OrderFormTab } from '@/components/app/orderForm/index';
import { Tab } from '@/components/core/tabs';
import { TakeProfit } from '@/components/app/takeProfitList';
import { BaseCurrency, QuoteCurrency } from '@/hooks/useExchange';
import OrderFormInputPart from './parts/orderFormInputPart/OrderFormInputPart.vue';
import OrderFormTakeProfitPart from './parts/orderFormTakeProfitPart/OrderFormTakeProfitPart.vue';

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
  isTakeProfitsEnabled,
  quoteCurrency,
  baseCurrency,
} = useOrderCreate();

provide<OrderModel>('model', model);
provide<Ref<TakeProfit[]>>('takeProfits', takeProfits);
provide<Ref<boolean>>('isTakeProfitsEnabled', isTakeProfitsEnabled);
provide<ComputedRef<QuoteCurrency>>('quoteCurrency', quoteCurrency);
provide<ComputedRef<BaseCurrency>>('baseCurrency', baseCurrency);
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
