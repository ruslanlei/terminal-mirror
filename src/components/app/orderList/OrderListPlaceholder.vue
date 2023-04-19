<template>
  <div :class="$style.ordersListPlaceholder">
    <Button
      :is-wide="false"
      state="gradientColor"
      :class="$style.button"
    >
      <Icon
        :size="18"
        icon="plus"
        :class="$style.buttonIcon"
      />
    </Button>
    <Typography
      size="title1"
      :state="['accent1', 'alignCenter']"
      :class="$style.text"
    >
      {{ t('orderList.placeholder') }}
    </Typography>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/core/icon/Icon.vue';
import Button from '@/components/core/button/Button.vue';
import Typography from '@/components/app/typography/Typography.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="scss" module>
.ordersListPlaceholder {
  background-color: rgb(var(--color-background-3));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
