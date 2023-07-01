<template>
  <Transition name="appPreloaderTransition">
    <template v-if="isPreparing">
      <AppPreloader :class="$style.preloader" />
    </template>
    <template v-else>
      <div :class="$style.appContainer">
        <Layout :class="$style.layout" />
        <ModalLayer :class="$style.modalLayer" />
        <ToastLayer :class="$style.toastLayer" />
        <UiLevitatingLayer :class="$style.levitatingLayer" />
        <UiIconsMap />
        <UiCoinLogoMap />
      </div>
    </template>
  </Transition>
</template>

<script setup lang="ts">
import UiCoinLogoMap from '@terminal/uikit/components/coinLogo/CoinLogoMap.vue';
import UiIconsMap from '@terminal/uikit/components/icon/IconsMap.vue';
import { UiLevitatingLayer } from '@terminal/uikit/components/leviatingLayer';
import Layout from '@/components/app/layout/Layout.vue';
import ToastLayer from '@/components/app/toastLayer/ToastLayer.vue';
import ModalLayer from '@/components/app/modalLayer/ModalLayer.vue';
import AppPreloader from '@/components/app/appPreloader/AppPreloader.vue';

import { useApp } from '@/hooks/useApp';

const { isPreparing } = useApp();
</script>

<style lang="scss" module>
.appContainer {}

.layout {}

.preloader {
  position: fixed;
  z-index: 2000;
  inset: 0;
}

.modalLayer {
  position: fixed;
  inset: 0;
  z-index: 3000;
}

.toastLayer {
  position: fixed;
  inset: 0;
  z-index: 4000;
}

.levitatingLayer {
  position: fixed;
  inset: 0;
  z-index: 5000;
}

.debugPanel {
  position: fixed;
  z-index: 999999;
  top: 0;
  right: 500px;
}
</style>

<style lang="scss">
@import "@terminal/uikit/assets/styles";
@import "@/assets/fonts";

.appPreloaderTransition-enter-active,
.appPreloaderTransition-leave-active {
  transition: transform 460ms;
}

.appPreloaderTransition-enter-from {

}
.appPreloaderTransition-leave-to {
  transform: translateY(-100%);
}
</style>
