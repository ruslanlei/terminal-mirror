<template>
  <button
    :class="$style.playButton"
    @click="toggle"
  >
    <transition
      name="playButtonTransition"
      mode="out-in"
    >
      <Icon
        v-if="localValue"
        icon="pause"
      />
      <Icon
        v-else
        icon="play"
      />
    </transition>
  </button>
</template>

<script setup lang="ts">
import Icon from '@/components/core/icon/Icon.vue';
import { PlayButtonEmits, PlayButtonProps } from '@/components/app/playerControls/playButton/index';
import { useLocalValue } from '@/hooks/useLocalValue';

const props = defineProps<PlayButtonProps>();

const emit = defineEmits<PlayButtonEmits>();

const localValue = useLocalValue(props, emit, 'modelValue');

const toggle = () => {
  localValue.value = !localValue.value;
};
</script>

<style lang="scss" module>
.playButton {
  display: flex;
  align-items: center;
  position: relative;
  transition: transform 250ms;
  cursor: pointer;
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
