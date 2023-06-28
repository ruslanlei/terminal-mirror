<template>
  <label
    :class="[
      $style[size],
      ...computedState,
      isDisabled && $style.disabled,
      !!error && $style.error,
      isFocused && $style.focus,
    ]"
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
      <div v-if="type === 'password'">
        <Transition
          name="inputPasswordIcon"
          mode="out-in"
        >
          <button
            :key="isPasswordVisible"
            :class="$style.passwordVisibilityButton"
            type="button"
            :tabindex="-1"
            @click="togglePassword"
          >
            <Icon
              :icon="isPasswordVisible ? 'eyeOpen' : 'eyeClose'"
            />
          </button>
        </Transition>
      </div>
      <div
        v-if="'append' in $slots"
        :class="$style.append"
      >
        <slot name="append" />
      </div>
    </div>
    <FieldError
      :text="error"
      :class="$style.errorMessage"
      :offset="6"
      :size="size"
      :show-icon="showErrorIcon"
    />
  </label>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import { useInput } from '@/hooks/useInput';
import FieldError from '@/components/fieldError/FieldError.vue';
import Icon from '@/components/icon/Icon.vue';
import { useComputedState } from '@/hooks/useComputedState';
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
    state: 'defaultColor',
    size: 'lg',
    showErrorIcon: true,
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

const computedState = useComputedState(props);

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
.defaultColor {
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

.secondary2Color {
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
  }

  .passwordVisibilityButton {
    margin-right: 20px;
  }

  .errorMessage {
    @include text;
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
  }

  .errorMessage {
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
  &.focus {
    .field {
      border-color: rgba(var(--color-danger-2), 1);
      color: rgba(var(--color-danger-2), 1);
      & > input {
        &::placeholder {
          color: rgba(var(--color-danger-2), 1);
        }
      }
    }
  }
  .field {
    border: 1px solid rgba(var(--color-danger-2), 1);
    &:hover {
      border-color: rgba(var(--color-danger-2), 1);
    }
    & > input {
      &::placeholder {
        color: rgba(var(--color-danger-2), 1);
      }
    }
  }
  .errorMessage {
    color: rgb(var(--color-danger-2));
  }
}

.passwordVisibilityButton {
  cursor: pointer;
}

.errorMessage {}
</style>

<style lang="scss">
.inputPasswordIcon {
  &-enter-active,
  &-leave-active {
    transition: opacity 80ms, transform 80ms;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0.4;
    transform: scale(0.8);
  }
}
</style>
