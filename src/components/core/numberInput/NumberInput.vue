<template>
  <input
    :value="localValue"
    type="number"
    :class="[
      $style.numberInput,
      ...states.map((s) => $style[s]),
    ]"
    @input="onInput"
  >
</template>

<script setup lang="ts">
import { NumberInputEmits, NumberInputProps } from '@/components/core/numberInput/index';
import { useLocalValue } from '@/hooks/useLocalValue';
import { computed } from 'vue';
import { arrayFrom } from '@/utils/array';

const props = withDefaults(
  defineProps<NumberInputProps>(),
  {
    min: -Infinity,
    max: Infinity,
  },
);

const emit = defineEmits<NumberInputEmits>();

const localValue = useLocalValue<number>(props, emit, 'modelValue');
const onInput = (event: InputEvent) => {
  const eventTarget = (event.target as HTMLInputElement);
  let value = Number(eventTarget.value);

  if (value < props.min) {
    value = props.min;
  }

  if (value > props.max) {
    value = props.max;
  }

  localValue.value = value;
  eventTarget.value = String(value);
};

const states = computed(() => arrayFrom(props.state));
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.numberInput {
  display: block;
  width: 100%;
}

.smSize {
  padding: 7px 10px;
  @include title4;
  border-radius: 5px;
}

.defaultColor {
  color: rgb(var(--color-accent-1));
  border: 1px solid rgb(var(--color-accent-2));
}
</style>
