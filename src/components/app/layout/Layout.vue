<template>
  <Transition :name="computedLayoutTransition">
    <Layout
      v-if="Layout"
      :key="route.meta?.layout"
      :class="$style.layout"
    >
      <RouterView v-slot="{ Component }">
        <transition
          name="layoutTransition"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </RouterView>
    </Layout>
  </Transition>
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

const computedLayoutTransition = computed(() => ({
  putOn: 'layoutTransitionPutOn',
  takeOff: 'layoutTransitionTakeOff',
  default: 'defaultLayoutTransition',
  // @ts-ignore
}[route.meta?.layoutTransition || 'default']));

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
.layoutTransitionTakeOff {
  &-enter-active,
  &-leave-active {
    transition: opacity 200ms, transform 460ms;
  }

  &-enter-from {
    transform: scale(0.96);
    position: fixed;
    top: 0;
    left: 0;
    inset: 0;
    z-index: 5000;
  }
  &-leave-to {
    opacity: 0;
    transform: translateY(-100%);
    position: fixed;
    top: 0;
    left: 0;
    inset: 0;
    z-index: 10000;
  }
}

.layoutTransitionPutOn {
  &-enter-active,
  &-leave-active {
    transition: opacity 200ms, transform 460ms;
  }

  &-enter-from {
    transform: translateY(-100%);
    position: fixed;
    top: 0;
    left: 0;
    inset: 0;
    z-index: 10000;
  }
  &-leave-to {
    opacity: 0;
    transform: scale(0.96);
    position: fixed;
    top: 0;
    left: 0;
    inset: 0;
    z-index: 5000;
  }
}
</style>
