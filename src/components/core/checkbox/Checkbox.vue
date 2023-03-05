<template>
  <div
    :class="{
      [$style.checkbox]: true,
      [$style[state]]: true,
      [$style[size]]: true,
      [$style[labelAlignment]]: true,
      [$style.active]: localValue,
      [$style.disabled]: isDisabled,
      [$style.disabled]: isDisabled,
    }"
    :tabindex="(disableTabNavigation || isDisabled) ? -1 : tabIndex"
    @click="toggle"
    @keydown.space="toggle"
    @focus="onFocus"
    @blur="onBlur"
  >
    <div :class="$style.box">
      <Icon
        :size="24"
        :class="$style.check"
        icon="check"
      />
    </div>
    <div
      v-if="label || 'label' in $slots"
      :class="$style.label"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/core/icon/Icon.vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import { CheckboxEmits, CheckboxProps } from './index';

const props = withDefaults(
  defineProps<CheckboxProps>(),
  {
    modelValue: false,
    tabIndex: 0,
    state: 'default',
    size: 'md',
    labelAlignment: 'center',
  },
);
const emit = defineEmits<CheckboxEmits>();

const localValue = useLocalValue(props, emit, 'modelValue');

const toggle = () => {
  if (props.isDisabled) return;
  localValue.value = !localValue.value;
  emit('toggle');
};

const onFocus = () => {
  emit('focus');
};

const onBlur = () => {
  emit('blur');
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.checkbox {
  display: flex;
  &:not(.disabled) {
    cursor: pointer;
  }
  .check {
    opacity: 0;
    transition: .15s opacity;
  }
  &.active {
    .check {
      opacity: 1;
    }
  }
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.label {
  user-select: none;
  transition: .15s color;
}

.center {
  align-items: center;
}
.top {
  align-items: flex-start;
}

.md {
  .box {
    width: 24px;
    height: 24px;
    border-radius: 5px;
    border-width: 1.5px;
    border-style: solid;
    & + .label {
      margin-left: 8px;
    }
  }
  .label {
    @include text;
    font-weight: 600;
  }
}

.default {
  &:not(.disabled) {
    &:hover, &:focus {
      .box {
        border-color: rgba(var(--color-accent-1), 1);
      }
      .label, .check {
        color: rgba(var(--color-accent-1), 1);
      }
    }
  }
  .box {
    border-color: rgba(var(--color-accent-2), 1);
    color: rgba(var(--color-accent-2), 1);
    transition: .15s color, .15s border-color;
  }
  .label {
    color: rgba(var(--color-accent-2), 1);
  }
}
</style>
