<template>
  <Card
    v-click-outside="close"
    :class="$style.root"
  >
    <div
      :class="{
        [$style.loader]: true,
        [$style.active]: isLoading,
      }"
    >
      <Loader />
    </div>
    <template #head>
      <div :class="$style.head">
        <slot name="head">
          {{ label }}
        </slot>
        <button
          :class="$style.closeButton"
          @click="close"
        >
          close
        </button>
      </div>
    </template>
    <div :class="[$style.content, contentClass]">
      <slot />
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/core/card/Card.vue';
import Loader from '@/components/core/loader/Loader.vue';
import { ModalProps } from '@/components/core/modal/index';

withDefaults(
  defineProps<ModalProps>(),
  {
    isLoading: false,
  },
);
const emit = defineEmits<{(e: 'close'): void }>();

const close = () => emit('close');
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  position: relative;
  max-width: 600px;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.content {
  margin-top: 20px;
}

.closeButton {
  margin-left: auto;
}

.loader {
  position: absolute;
  z-index: 300;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: .2s opacity;
  pointer-events: none;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
}
</style>
