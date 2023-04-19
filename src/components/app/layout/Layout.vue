<template>
  <Transition name="defaultLayoutTransition">
    <Layout
      v-if="Layout"
      :key="route.meta?.layout"
      :class="$style.layout"
    >
      <RouterView v-slot="{ Component }">
        <transition
          name="pageTransition"
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
  onMounted, ref,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCommonStore } from '@/stores/common';
import BlankLayout from '@/layouts/blankLayout/BlankLayout.vue';

const AuthLayout = defineAsyncComponent(() => import('@/layouts/authLayout/AuthLayout.vue'));
const MarketLayout = defineAsyncComponent(() => import('@/layouts/marketLayout/MarketLayout.vue'));

const router = useRouter();
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
.defaultLayoutTransition {
  &-enter-active,
  &-leave-active {
    transition: opacity 480ms, transform 460ms;
  }

  &-enter-from {
    opacity: 0;
    transform: translateY(80px);
  }
  &-leave-to {
    transition: opacity 200ms, transform 360ms;

    opacity: 0;
    transform: translateY(-80px);
    z-index: 10;
    position: fixed;
    inset: 0;
  }
}

.pageTransition {
  &-enter-active,
  &-leave-active {
    transition: opacity 150ms, transform 250ms;
  }

  &-enter-from {
    opacity: 0;
    transform: translateY(16px);
  }
  &-leave-to {
    opacity: 0;
    transform: translateY(-16px);
  }
}
</style>
