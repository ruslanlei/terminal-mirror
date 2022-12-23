<template>
  <Layout
    v-if="Layout"
    :class="$style.layout"
  >
    <router-view v-slot="{ Component }">
      <transition
        name="layout-transition"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
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

const DefaultLayout = defineAsyncComponent(() => import('@/layouts/default/Default.vue'));
const BlankLayout = defineAsyncComponent(() => import('@/layouts/blank/Blank.vue'));
const AuthLayout = defineAsyncComponent(() => import('@/layouts/auth/Auth.vue'));

const route = useRoute();
const commonStore = useCommonStore();

const layoutsMap: Record<string, any> = {
  default: DefaultLayout,
  blank: BlankLayout,
  auth: AuthLayout,
};

const Layout = computed(() => {
  const layoutName = route.meta.layout
    ? String(route.meta.layout)
    : null;
  return layoutName ? layoutsMap[layoutName] : null;
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
