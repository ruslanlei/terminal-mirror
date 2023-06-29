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
        <LevitatingLayer :class="$style.levitatingLayer" />
        <IconsMap />
        <CoinLogoMap />
      </div>
    </template>
  </Transition>
</template>

<script setup lang="ts">
import Layout from '@/components/app/layout/Layout.vue';
import ToastLayer from '@/components/app/toastLayer/ToastLayer.vue';
import ModalLayer from '@/components/app/modalLayer/ModalLayer.vue';
import LevitatingLayer from '@/components/app/leviatingLayer/LevitatingLayer.vue';
import IconsMap from '@/components/core/icon/IconsMap.vue';
import CoinLogoMap from '@/components/core/coinLogo/CoinLogoMap.vue';
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
//@import "src/assets/styles";
@import "@terminal/uikit/assets/styles";

#nprogress {
  .bar {
    background: lightgray;
    z-index: 100000;
  }
  .spinner {
    display: none;
  }
}

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
