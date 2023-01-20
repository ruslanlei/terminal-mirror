<template>
  <Layout :class="$style.layout" />
  <ModalLayer :class="$style.modalLayer" />
  <ToastLayer :class="$style.toastLayer" />
  <LevitatingLayer :class="$style.levitatingLayer" />
  <IconsMap />
</template>

<script setup lang="ts">
import Layout from '@/components/app/layout/Layout.vue';
import ToastLayer from '@/components/app/toastLayer/ToastLayer.vue';
import ModalLayer from '@/components/app/modalLayer/ModalLayer.vue';
import LevitatingLayer from '@/components/app/leviatingLayer/LevitatingLayer.vue';
import IconsMap from '@/components/core/icon/IconsMap.vue';
import { useApp } from '@/hooks/useApp';

useApp();
</script>

<style lang="scss" module>
.layout {}

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
</style>

<style lang="scss">
@import "src/assets/styles";

#nprogress {
  .bar {
    background: lightgray;
    z-index: 100000;
  }
  .spinner {
    display: none;
  }
}
</style>
