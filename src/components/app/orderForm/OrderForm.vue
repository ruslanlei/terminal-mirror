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
            <OrderFormInputPart :model="model" />
          </template>
          <template #tab(tp)>
            <OrderFormTakeProfitPart />
          </template>
        </Tabs>
      </template>
    </OrderFromContainer>
  </Form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Icon from '@/components/core/icon/Icon.vue';
import Tabs from '@/components/core/tabs/Tabs.vue';
import OrderFromContainer from '@/containers/orderFormContainer/OrderFormContainer.vue';
import { Form, FormSelector } from '@/components/form';

import { useOrderCreate } from '@/hooks/useOrderCreate';
import OrderFormInputPart from './parts/orderFormInputPart/OrderFormInputPart.vue';
import OrderFormTakeProfitPart from './parts/orderFormTakeProfitPart/OrderFormTakeProfitPart.vue';

const { t } = useI18n();

const settingsActiveTab = ref('input');

const settingsTabs = computed(() => [
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

const {
  model,
  validationSchema,
  orderDirectionOptions,
} = useOrderCreate();
</script>

<style lang="scss" module>
@import "@/assets/styles/utils";

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
