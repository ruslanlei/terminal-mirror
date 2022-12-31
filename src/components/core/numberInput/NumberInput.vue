<template>
  <div
    :class="[
      $style.numberInput,
      ...states.map((s) => $style[s]),
    ]"
  >
    <input
      type="number"
      :value="localValue"
      @input="onInput"
    >
    <div
      v-if="'append' in $slots"
      :class="$style.append"
    >
      <slot name="append" />
    </div>
  </div>
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
  width: 100%;
  display: flex;
  align-items: center;
}

.smSize {
  @include title4;
  border-radius: 5px;
  & > input {
    padding: 7px 10px;
    height: 100%;
    width: 100%;
  }
}

.defaultColor {
  color: rgb(var(--color-accent-1));
  border: 1px solid rgb(var(--color-accent-2));
  transition: border-color 150ms;
  &:hover {
    border: 1px solid rgb(var(--color-accent-1));
  }
}

.append {
  margin-right: 10px;
}
</style>
