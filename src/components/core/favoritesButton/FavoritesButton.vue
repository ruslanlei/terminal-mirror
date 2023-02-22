<template>
  <ToggleButton
    v-model="localValue"
    :class="$style.favoritesButton"
    @click="toggle"
  >
    <Icon icon="starFilled" />
  </ToggleButton>
</template>

<script setup lang="ts">

import { useLocalValue } from '@/hooks/useLocalValue';
import ToggleButton from '@/components/app/toggleButton/ToggleButton.vue';
import Icon from '@/components/core/icon/Icon.vue';
import { FavoritesButtonEmits, FavoritesButtonProps } from './index';

const props = defineProps<FavoritesButtonProps>();

const emits = defineEmits<FavoritesButtonEmits>();

const localValue = useLocalValue(props, emits);

const toggle = () => {
  localValue.value = !localValue.value;
};
</script>

<style lang="scss" module>
.favoritesButton {
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
