<template>
  <label
    :class="{
      [$style.root]: true,
      [$style[state]]: true,
      [$style[size]]: true,
      [$style.disabled]: isDisabled,
      [$style.error]: error,
      [$style.focus]: isFocused,
    }"
  >
    <span
      v-if="('label' in $slots) || label"
      :class="$style.label"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </span>
    <div :class="$style.field">
      <div
        v-if="'prepend' in $slots"
        :class="$style.prepend"
      >
        <slot name="prepend" />
      </div>
      <input
        ref="input"
        v-model="localValue"
        v-mask="mask"
        :tabindex="computedTabIndex"
        :type="computedType"
        :autocomplete="autocomplete"
        :inputmode="inputmode"
        :placeholder="placeholder"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      >
      <div
        v-if="'append' in $slots"
        :class="$style.append"
      >
        <slot name="append" />
      </div>
    </div>
    <div
      v-if="error"
      :class="$style.error"
    >
      {{ error }}
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import { useInput } from '@/hooks/useInput';
import {
  inputType,
  InputProps,
  InputEmits,
} from './index';

const props = withDefaults(
  defineProps<InputProps>(),
  {
    modelValue: '',
    name: undefined,
    label: undefined,
    placeholder: undefined,
    isDisabled: false,
    tabIndex: 0,
    disableTabNavigation: false,
    type: 'text' as inputType.TEXT,
    autocomplete: undefined,
    inputmode: undefined,
    state: 'default',
    size: 'lg',
  },
);

const emit = defineEmits<InputEmits>();

const {
  localValue,
  isPasswordVisible,
  togglePassword,
  computedType,
  onInput,
  isFocused,
  onFocus,
  onBlur,
} = useInput(props, emit);

const input = ref<HTMLElement | null>(null);
const computedTabIndex = computed(
  () => ((props.disableTabNavigation || props.isDisabled) ? -1 : props.tabIndex),
);

const focus = async () => {
  await nextTick();
  input.value?.focus?.();
};

defineExpose({
  focus,
  togglePassword,
  isPasswordVisible,
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

// states
.default {
  -webkit-appearance: none;
  &.focus {
    .field {
      border: 1px solid rgb(var(--color-accent-1));
    }
  }
  .label {
    color: rgba(var(--color-primary-1), 1);
  }
  .field {
    color: rgba(var(--color-accent-1), 1);
    border: 1px solid rgb(var(--color-accent-2));
    transition: .15s border-color;
    @include text;
    font-weight: 500;
    & > input {
      &::placeholder {
        color: rgba(var(--color-accent-2), 1);
        font-weight: 500;
      }
    }
    &:hover {
      border: 1px solid rgb(var(--color-accent-1));
    }
  }
}

.secondary2 {
  .prepend, .append {
    color: rgb(var(--color-accent-2));
    transition: color 200ms;
  }
  &.focus {
    .field {
    }
    .prepend, .append {
      color: rgb(var(--color-accent-1));
    }
  }
  .label {
    color: rgba(var(--color-primary-1), 1);
  }
  .field {
    color: rgba(var(--color-accent-1), 1);
    background-color: rgb(var(--color-background-2));
    transition: .15s border-color;
    @include text;
    font-weight: 500;
    & > input {
      &::placeholder {
        color: rgba(var(--color-accent-2), 1);
        font-weight: 500;
      }
    }
    &:hover {
    }
  }
}

// sizes
.lg {
  .label {
    & + .field {
      margin-top: 6px;
    }
  }

  .field {
    border-radius: 10px;
    & > input {
      padding: 18px 20px;
    }
    & + .error {
      margin-top: 6px;
    }
  }

  .error {
  }
}

.md {
  .label {
    & + .field {
      margin-top: 6px;
    }
  }

  .field {
    border-radius: 10px;
    & > input {
      padding: 9px;
    }
    & > input, .append {
      @include title3;
    }
    & + .error {
      margin-top: 6px;
    }
  }

  .error {
  }
}

.sm {
  .label {
    & + .field {
      margin-top: 6px;
    }
  }

  .field {
    border-radius: 5px;
    & > input {
      padding: 7px 10px;
    }
    & > input, .append {
      @include title4;
    }
    & + .error {
      margin-top: 6px;
    }
  }

  .error {
  }
}

// default styles
.root {
  display: block;
  &.error {
    .label {
      color: rgba(var(--color-danger), 1);
    }
    .field {
      border: 1px solid rgba(var(--color-danger), 1);
      & > input {
        &::placeholder {
          color: rgba(var(--color-danger), 1);
        }
        color: rgba(var(--color-danger), 1);
      }
    }
  }
}

.field {
  width: 100%;
  transition: .15s box-shadow;
  display: flex;
  align-items: center;
  & > input {
    height: 100%;
    width: 100%;
  }
}

.prepend {
  margin-left: 10px;
}

.append {
  margin-right: 10px;
}

.error {
  color: rgba(var(--color-danger), 1);
}
</style>
