<template>
  <div :class="$style.orderFormRatio">
    <div :class="$style.ratio">
      <div :class="$style.ratioLabel">
        <Icon
          :size="20"
          icon="info"
          :class="$style.ratioTip"
        />
        <div :class="$style.ratioLabelText">
          {{ t('order.takeProfit.ratio') }}
        </div>
      </div>
      <div :class="$style.ratioValue">
        {{ ratio }}
      </div>
    </div>
    <div :class="$style.metrics">
      <div :class="$style.metric">
        <div :class="$style.label">
          {{ t('order.takeProfit.profit') }}
        </div>
        <div :class="$style.profit">
          {{ profit }}
        </div>
      </div>
      <div :class="$style.metric">
        <div :class="$style.label">
          {{ t('order.takeProfit.risk') }}
        </div>
        <div :class="$style.risk">
          {{ risk }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Icon from '@/components/core/icon/Icon.vue';
import { OrderFormRatioProps } from '@/components/app/orderFormRatio/index';

const { t } = useI18n();

const props = defineProps<OrderFormRatioProps>();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.orderFormRatio {
  width: 100%;
}

.label {
  @include title2;
  font-weight: 600;
  color: rgb(var(--color-accent-1));
}

.ratio {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.ratioTip {
  color: rgb(var(--color-danger-2));
}

.ratioLabel {
  display: flex;
  color: rgb(var(--color-accent-1));
  @include title2;
  font-weight: 600;
}

.ratioLabelText {
  margin-left: 10px;
}

.ratioValue {
  padding: 2px 10px;
  background-color: rgb(var(--color-accent-3));
  color: rgb(var(--color-accent-1));
  border-radius: 12px;
  @include title5;
  font-weight: 600;
}

.metrics {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.metric {
  .label {
    @include title4;
  }
}

.profit, .risk {
  border-radius: 5px;
  padding: 7px 0;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  @include title5;
  font-weight: 600;
}

.profit {
  background-color: rgb(var(--color-background-4));
  color: rgb(var(--color-primary-2));
}

.risk {
  background-color: rgb(var(--color-danger-4));
  color: rgb(var(--color-danger-3));
}
</style>
