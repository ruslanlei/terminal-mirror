<template>
  <Card
    :class="$style.modal"
  >
    <div
      :class="{
        [$style.loader]: true,
        [$style.active]: isLoading,
      }"
    >
      <Loader />
    </div>
    <div :class="[$style.content, contentClass]">
      <div
        v-if="showClose"
        :class="$style.closeContainer"
      >
        <button :class="$style.closeButton">
          <Icon icon="cross" />
        </button>
      </div>
      <slot />
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from '../card/Card.vue';
import Loader from '../loader/Loader.vue';
import Icon from '../icon/Icon.vue';
import { ModalProps } from './index';

withDefaults(
  defineProps<ModalProps>(),
  {
    isLoading: false,
  },
);
</script>

<style lang="scss" module>
@import "../../assets/styles/utils";

.modal {
  position: relative;
}

.content {
  margin-top: 20px;
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

.closeContainer {
  display: flex;
  justify-content: flex-end;
}

.closeButton {
  color: rgb(var(--color-accent-2));
}
</style>
