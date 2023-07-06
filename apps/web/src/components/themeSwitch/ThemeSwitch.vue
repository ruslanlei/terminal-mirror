<template>
  <div :class="$style.root">
    <div
      :class="{
        [$style.button]: true,
        [$style.active]: activeTheme === theme.LIGHT
      }"
      @click="setLightTheme"
    >
      {{ t('theme.light') }}
    </div>
    <div
      :class="{
        [$style.button]: true,
        [$style.active]: activeTheme === theme.DARK
      }"
      @click="setDarkTheme"
    >
      {{ t('theme.dark') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useCommonStore } from '@/stores/common';
import { theme } from '@/enums/theme';

const { t } = useI18n();
const commonStore = useCommonStore();

const activeTheme = computed(() => commonStore.activeTheme);

const setLightTheme = () => {
  commonStore.setTheme(theme.LIGHT);
};
const setDarkTheme = () => {
  commonStore.setTheme(theme.DARK);
};
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

.root {
  display: flex;
  align-items: center;
}

.button {
  color: rgb(var(--color-primary-3));
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 6px;
  }
  &.active {
    color: rgb(var(--color-primary-1));
  }
}
</style>
