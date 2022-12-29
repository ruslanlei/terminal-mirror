<template>
  <OrderFromContainer>
    <template
      #orderDirectionSelector="{
        selectOptionClass
      }"
    >
      <Selector
        v-model="orderDirection"
        :state="['mdSize', 'secondaryColor5']"
        :options="orderDirectionOptions"
      >
        <template #option="{ option }">
          <div :class="selectOptionClass">
            <Icon :icon="option.icon" />
            {{ option.label }}
          </div>
        </template>
      </Selector>
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
      </Tabs>
    </template>
  </OrderFromContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Selector from '@/components/core/selector/Selector.vue';
import Icon from '@/components/core/icon/Icon.vue';
import Tabs from '@/components/core/tabs/Tabs.vue';
import { SelectorProps } from '@/components/core/selector';
import OrderFromContainer from '@/containers/orderFormContainer/OrderFormContainer.vue';
import OrderFormInputPart from '@/components/app/orderForm/parts/orderFormInputPart/OrderFormInputPart.vue';

const { t } = useI18n();

const orderDirection = ref('long');

const orderDirectionOptions = computed<SelectorProps['options']>(() => [
  {
    label: t('order.direction.long'),
    value: 'long',
    state: 'success',
    icon: 'trendingUp',
  },
  {
    label: t('order.direction.short'),
    value: 'short',
    state: 'danger',
    icon: 'trendingDown',
  },
]);

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
</script>

<style lang="scss" module>
@import "@/assets/styles/utils";

.ordersForm {
  height: 100%;
  padding: 22px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
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
