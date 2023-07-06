<template>
  <button
    type="button"
    :class="[$style.playButton, isDisabled && $style.disabled]"
    :disabled="isDisabled"
    @click="toggle"
  >
    <transition
      name="playButtonTransition"
      mode="out-in"
    >
      <UiIcon
        v-if="localValue"
        icon="pause"
      />
      <UiIcon
        v-else
        icon="play"
      />
    </transition>
  </button>
</template>

<script setup lang="ts">
import { UiIcon } from '@terminal/uikit/components/icon';
import { useLocalValue } from '@terminal/uikit/hooks/useLocalValue';
import { PlayButtonEmits, PlayButtonProps } from '@/components/playerControls/playButton/index';

const props = defineProps<PlayButtonProps>();

const emit = defineEmits<PlayButtonEmits>();

const localValue = useLocalValue(props, emit, 'modelValue');

const toggle = () => {
  localValue.value = !localValue.value;
};
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

.playButton {
  display: flex;
  align-items: center;
  position: relative;
  transition: transform 250ms, opacity 200ms;
  cursor: pointer;
  @include transparentOnDisabled;
  &:active {
    transform: scale(0.9);
  }
}

.pauseIcon {
  position: absolute;
  transform: rotate(-180deg);
}

.playIcon {}
</style>

<style lang="scss">
.playButtonTransition {
  &-enter-active,
  &-leave-active {
    transition: transform 80ms, opacity 80ms;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: rotateY(90deg) scale(0.6);
  }
}
</style>
