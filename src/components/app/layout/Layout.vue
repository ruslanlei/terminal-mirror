<template>
  <Layout
    v-if="Layout"
    :class="$style.layout"
  >
    <RouterView v-slot="{ Component }">
      <transition
        name="layout-transition"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </RouterView>
  </Layout>
</template>

<script setup lang="ts">
import {
  computed,
  defineAsyncComponent,
  onBeforeUnmount,
  onMounted,
} from 'vue';
import { useRoute } from 'vue-router';
import { useCommonStore } from '@/stores/common';
import BlankLayout from '@/layouts/blankLayout/BlankLayout.vue';

const AuthLayout = defineAsyncComponent(() => import('@/layouts/authLayout/AuthLayout.vue'));
const MarketLayout = defineAsyncComponent(() => import('@/layouts/marketLayout/MarketLayout.vue'));

const route = useRoute();
const commonStore = useCommonStore();

const layoutsMap: Record<string, any> = {
  market: MarketLayout,
  blank: BlankLayout,
  auth: AuthLayout,
};

const Layout = computed(() => {
  if (!route.meta.layout) return null;

  const layoutName = route.meta?.layout
    ? String(route.meta.layout)
    : 'blank';
  return layoutsMap[layoutName];
});

const handleBaseUnit = () => {
  const vh = window.innerHeight / 100;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  commonStore.setVh(vh);
};

onMounted(() => {
  handleBaseUnit();
  window.addEventListener('resize', handleBaseUnit);
  window.addEventListener('orientationchange', handleBaseUnit);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleBaseUnit);
  window.removeEventListener('orientationchange', handleBaseUnit);
});
</script>

<style lang="scss" module>
.layout {
  min-height: calc(100 * var(--vh));
  & > * {
    min-height: 100%;
  }
}
</style>

<style lang="scss">
.layout-transition {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.15s ease, .15s transform;
  }

  &-enter-from {
    opacity: 0;
    transform: translateX(6px);
  }
  &-leave-to {
    opacity: 0;
    transform: translateX(-6px);
  }
}

</style>
