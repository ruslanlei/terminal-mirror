<template>
  <Transition :name="layoutTransition">
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

const layoutTransition = ref('defaultLayoutTransition');

router.beforeEach((to, from, next) => {
  if (!from.name) {
    next();
    return;
  }

  if (
    to.meta?.layoutTransition
      && typeof to.meta.layoutTransition === 'string'
  ) {
    layoutTransition.value = ({
      putOn: 'layoutTransitionPutOn',
      takeOff: 'layoutTransitionTakeOff',
      default: 'defaultLayoutTransition',
      // @ts-ignore
    }[to.meta?.layoutTransition || 'default']) || 'defaultLayoutTransition';
  }

  next();
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
.layoutTransitionTakeOff {
  &-enter-active,
  &-leave-active {
    transition: opacity 200ms, transform 480ms;
  }

  &-enter-from {
    opacity: 0;
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
  &-leave-active, &-enter-active {
    transition: opacity 200ms, transform 480ms;
  }

  &-enter-from {
    opacity: 0;
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

.defaultLayoutTransition {
  &-enter-active,
  &-leave-active {
    transition: opacity 200ms, transform 460ms;
  }

  &-enter-from {
    opacity: 0;
    transform: scale(0.96);
  }
  &-leave-to {
    opacity: 0;
    transform: scale(1.04);
  }
}
</style>
