<template>
  <div :class="$style.orderListPlaceholder">
    <UiButton
      :is-wide="false"
      state="gradientColor"
      :class="$style.button"
    >
      <UiIcon
        :size="18"
        icon="plus"
        :class="$style.buttonIcon"
      />
    </UiButton>
    <UiTypography
      size="title1"
      :state="['accent1', 'alignCenter']"
      :class="$style.text"
    >
      {{ t('orderList.placeholder') }}
    </UiTypography>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import { UiIcon } from '@terminal/uikit/components/icon';
import { UiTypography } from '@terminal/uikit/components/typography';

const { t } = useI18n();
</script>

<style lang="scss" module>
.orderListPlaceholder {
  background-color: rgb(var(--color-background-3));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 26px;
  &:hover {
    .button {
      transform: rotate(225deg);
    }
    .buttonIcon {
      transform: rotate(-225deg);
    }
  }
}

.button {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transform: rotate(45deg);
  transition: transform 320ms;
}

.buttonIcon {
  transform: rotate(-45deg);
  transition: transform 320ms;
}

.text {
  margin-top: 12px;
  max-width: 200px;
}
</style>
