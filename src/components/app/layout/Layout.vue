<template>
  <component
    :is="currentLayout"
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
  </component>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from '@/layouts/default/Default.vue';
import BlankLayout from '@/layouts/blank/Blank.vue';
import AuthLayout from '@/layouts/auth/Auth.vue';
import { useCommonStore } from '@/stores/common';

const route = useRoute();
const commonStore = useCommonStore();

const layoutsMap: Record<string, any> = {
  default: DefaultLayout,
  blank: BlankLayout,
  auth: AuthLayout,
};

const currentLayout = computed(() => {
  const layoutName: string = route.meta.layout
    ? String(route.meta.layout)
    : 'default';
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
