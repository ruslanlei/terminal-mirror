<template>
  <Icon
    :size="32"
    :icon="computedIconName"
  />
</template>

<script setup lang="ts">
import Icon from '@/components/core/icon/Icon.vue';
import { computed } from 'vue';
import { GradientCheckIconProps } from './index';

const props = defineProps<GradientCheckIconProps>();

const computedIconName = computed(() => (props.value ? ({
  purple: 'checkGradientPurple',
  orange: 'checkGradientOrange',
  blue: 'checkGradientBlue',
}[props.state]) : 'crossSpecial'));
</script>
