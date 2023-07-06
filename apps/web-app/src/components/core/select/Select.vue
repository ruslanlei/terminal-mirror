<template>
  <div
    ref="root"
    v-click-outside="onClickOutside"
    :class="[
      $style.root,
      isDisabled && $style.disabled,
      !!error && $style.error,
      isDropdownVisible && $style.active,
      $style[state],
      $style[size],
    ]"
    @click="handleShowDropdown"
  >
    <div
      v-if="label || 'label' in $slots"
      :class="$style.label"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </div>
    <button
      ref="trigger"
      type="button"
      :class="$style.trigger"
      :tabindex="computedTriggerTabIndex"
      @keydown.tab.shift.exact="disableTriggerBlurPrevent"
      @keydown.space.exact.prevent="calculatePositionAndShowDropdown"
      @keydown.enter.exact.prevent="calculatePositionAndShowDropdown"
      @focus="onFocusTrigger"
      @blur="onTriggerBlur"
    >
      <slot
        name="trigger"
        :display-value="displayValue"
        :placeholder="placeholder"
        :is-dropdown-visible="isDropdownVisible"
      >
        <template v-if="isMultiSelect && displayValue.length">
          <button
            v-for="selectedOption in displayValue"
            :key="selectedOption.value"
            :class="$style.tag"
            @click="onSelectOption(selectedOption.value)"
          >
            {{ selectedOption.label }}
          </button>
        </template>
        <template v-else-if="typeof displayValue === 'string' && displayValue">
          <div :class="$style.displayValue">
            {{ displayValue }}
          </div>
        </template>
        <template v-else>
          <div :class="$style.placeholder">
            {{ placeholder }}
          </div>
        </template>
        <Icon
          :class="$style.arrow"
          icon="small-arrow-down"
        />
      </slot>
    </button>
    <div
      v-if="error"
      :class="$style.error"
    >
      {{ error }}
    </div>
  </div>
  <teleport :to="teleportTarget">
    <div
      ref="dropdown"
      :class="[
        $style.dropdown,
        $style[size],
        isDropdownVisible && $style.active,
        $style[state],
        $style[computedPosition],
      ]"
      :style="computedDropdownStyles"
    >
      <input
        v-if="isSearchable"
        ref="search"
        v-model="query"
        :class="$style.search"
        type="text"
        :placeholder="searchPlaceholder"
        @keydown.prevent.up.exact="closeDropdownAndFocusTrigger"
        @keydown.prevent.down.exact="onSearchDown"
        @keydown.tab.shift.exact="closeDropdownAndFocusTrigger"
        @keydown.esc.exact.prevent="closeDropdownAndFocusTrigger"
      >
      <button
        v-for="(option, optionIndex) in computedOptions"
        :ref="el => { optionRefs[optionIndex] = el }"
        :key="option.value"
        :class="[
          $style.selectItem,
          option.isSelected && $style.selected,
        ]"
        tabindex="0"
        :data-role="selectRole.ITEM"
        @click="selectOptionAndCloseDropdown(option.value)"
        @keydown.space.exact.prevent="selectOptionAndCloseDropdown(option.value)"
        @keydown.enter.prevent="selectOptionAndCloseDropdown(option.value)"
        @keydown.tab.exact="onOptionTab(optionIndex)"
        @keydown.tab.shift.exact="onOptionShiftTab(optionIndex)"
        @keydown.prevent.down.exact="onNextOption(optionIndex)"
        @keydown.prevent.up.exact="onPreviousOption(optionIndex)"
        @keydown.esc.exact.prevent="closeDropdownAndFocusTrigger"
      >
        <slot
          name="option"
          :option="option"
        >
          {{ option.label }}
        </slot>
      </button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  onBeforeUpdate,
} from 'vue';
import Icon from '@/components/core/icon/Icon.vue';
import { teleportTargets } from '@/enums/teleport';
import { useSelect } from '@/hooks/useSelect';
import { useEnvironmentObserver } from '@/hooks/useEnvironmentObserver';
import {
  SelectProps,
  SelectOption,
  selectState,
  selectDropdownPosition, selectSize,
} from './index';

const props = withDefaults(
  defineProps<SelectProps>(),
  {
    dropdownPosition: 'bottom' as selectDropdownPosition.BOTTOM,
    state: 'primary' as selectState.PRIMARY,
    size: 'md' as selectSize.MD,
  },
);

const emit = defineEmits<{(e: 'update:modelValue', value: string | string[]): void,
  (e: 'focus'): void,
  (e: 'blur'): void,
}>();

enum selectRole {
  ITEM = 'select-item'
}

// logic
const {
  isDropdownVisible,
  showDropdown,
  closeDropdown,
  isMultiSelect,
  displayValue,
  onSelectOption,
  query,
  computedOptions,
} = useSelect(props, emit);

// presentation
const root = ref<HTMLElement | null>(null);
const trigger = ref<HTMLElement | null>(null);
const dropdown = ref<HTMLElement | null>(null);
const search = ref<HTMLElement | null>(null);

const optionRefs = ref<HTMLElement[]>([]);
onBeforeUpdate(() => {
  optionRefs.value = [];
});

const computedPosition = ref(props.dropdownPosition);
const calculateDropdownPosition = () => {
  if (!trigger.value || !dropdown.value || !isDropdownVisible.value) return;
  const triggerRect = trigger.value.getBoundingClientRect();
  const dropdownRect = dropdown.value.getBoundingClientRect();

  const isIntersectingBottom = (
    triggerRect.top + triggerRect.height + dropdownRect.height
  ) > window.innerHeight;

  const isIntersectingTop = (
    triggerRect.top - dropdownRect.height
  ) < 0;

  if (isIntersectingBottom) {
    computedPosition.value = selectDropdownPosition.TOP;
  } else if (isIntersectingTop) {
    computedPosition.value = selectDropdownPosition.BOTTOM;
  } else {
    computedPosition.value = props.dropdownPosition;
  }
};

// trigger
const computedTriggerTabIndex = computed(
  () => ((props.disableTabNavigation || props.isDisabled) ? -1 : props.tabIndex),
);

const focusTrigger = () => {
  if (props.isDisabled) return;
  trigger.value?.focus();
};

const isPreventTriggerBlur = ref(true);
const setTriggerBlurPrevent = () => {
  isPreventTriggerBlur.value = true;
};
const disableTriggerBlurPrevent = () => {
  isPreventTriggerBlur.value = false;
};
const onTriggerBlur = (e: FocusEvent) => {
  if (isPreventTriggerBlur.value) {
    e.preventDefault();
    setTriggerBlurPrevent();
    if (props.isSearchable) {
      search.value?.focus();
      return;
    }
    if (optionRefs.value[0]) {
      optionRefs.value[0].focus();
    }
    return;
  }
  emit('blur');
  closeDropdown();
};

// dropdown
const computedDropdownStyles = ref({
  width: '0px',
  transform: 'translateX(0px) translateY(0px)',
  transition: 'none',
});

const calculateDropdownRect = () => {
  if (!trigger.value || !dropdown.value) return;
  const triggerRect = trigger.value.getBoundingClientRect();
  const dropdownRect = dropdown.value.getBoundingClientRect();

  if (computedPosition.value === selectDropdownPosition.BOTTOM) {
    computedDropdownStyles.value.transform = `translateY(${triggerRect.top + triggerRect.height}px) translateX(${triggerRect.left}px)`;
    computedDropdownStyles.value.width = `${triggerRect.width}px`;
  } else if (computedPosition.value === selectDropdownPosition.TOP) {
    computedDropdownStyles.value.transform = `translateY(${triggerRect.top - dropdownRect.height}px) translateX(${triggerRect.left}px)`;
    computedDropdownStyles.value.width = `${triggerRect.width}px`;
  }
};

const teleportTarget = computed(() => `#${teleportTargets.LEVITATING}`);

const transitionTime = 250;
const setTransition = () => {
  computedDropdownStyles.value.transition = `
    clip-path ${transitionTime}ms,
    opacity ${transitionTime}ms,
    transform ${transitionTime}ms ease
  `;
};
const removeTransition = () => {
  computedDropdownStyles.value.transition = 'none';
};

const showDropdownTransition = (cb: any) => {
  setTransition();
  setTimeout(removeTransition, transitionTime);
  cb?.();
};
const showDropdownWithTransition = () => showDropdownTransition(showDropdown);
const closeDropdownWithTransition = () => showDropdownTransition(closeDropdown);

const calculatePositionAndShowDropdown = () => {
  setTriggerBlurPrevent();
  calculateDropdownPosition();
  showDropdownWithTransition();
};

const closeDropdownAndFocusTrigger = () => {
  focusTrigger();
  disableTriggerBlurPrevent();
  closeDropdownWithTransition();
};

// search
const onSearchDown = () => {
  const firstOption = optionRefs.value?.[0];

  if (firstOption) {
    firstOption.focus();
  }
};

// options
const selectOptionAndCloseDropdown = (optionValue: SelectOption['value']) => {
  onSelectOption(optionValue);
  if (!isMultiSelect.value) {
    closeDropdownAndFocusTrigger();
  }
};

const onOptionTab = (optionIndex: number) => {
  const isLastOption = (optionIndex + 1) === computedOptions.value.length;

  if (isLastOption) {
    closeDropdownAndFocusTrigger();
  }
};

const onOptionShiftTab = (optionIndex: number) => {
  const isFirstElementAndNotSearchable = optionIndex === 0 && !props.isSearchable;

  if (isFirstElementAndNotSearchable) {
    closeDropdownAndFocusTrigger();
  }
};

const onNextOption = (optionIndex: number) => {
  const nextOptionIndex = optionIndex + 1;
  const nextOption = optionRefs.value?.[nextOptionIndex];

  if (nextOption) {
    nextOption.focus();
  } else {
    closeDropdownAndFocusTrigger();
  }
};

const onPreviousOption = (optionIndex: number) => {
  const previousOptionIndex = optionIndex - 1;
  const previousOption = optionRefs.value?.[previousOptionIndex];

  if (previousOption) {
    previousOption.focus();
  } else {
    if (props.isSearchable) {
      search.value?.focus();
      return;
    }
    closeDropdownAndFocusTrigger();
  }
};

// common
const onFocusTrigger = () => {
  if (props.isDisabled) return;
  emit('focus');
  calculatePositionAndShowDropdown();
};

const handleShowDropdown = () => {
  if (props.isSearchable) {
    search.value?.focus();
  }
  calculatePositionAndShowDropdown();
};

const onClickOutside = (e: PointerEvent) => {
  if (
    e.target !== dropdown.value
      && !root.value?.contains(e.target)
      && !dropdown.value?.contains(e.target)
      && isDropdownVisible.value
  ) {
    closeDropdownAndFocusTrigger();
  }
};

// listeners
watch(isDropdownVisible, calculateDropdownPosition);

const onEnvironmentMutation = () => {
  calculateDropdownPosition();
  calculateDropdownRect();
};

const {
  setListeners,
  removeListeners,
} = useEnvironmentObserver(root, onEnvironmentMutation, true);

onMounted(setListeners);
onBeforeUnmount(removeListeners);

defineExpose({
  focus: focusTrigger,
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.arrow {
  margin-left: auto;
  color: white;
  width: 20px;
  height: 20px;
  transition: .2s transform;
}

// states
.primary {
  .label {
    color: rgb(var(--color-primary-1));
  }
  .trigger {
    color: rgba(var(--color-primary-1), 1);
    background-color: rgba(var(--color-secondary-2), 1);
    &:focus, &:hover {
      box-shadow: 0 0 0 1px rgba(var(--color-primary-1), 1);
    }
    .displayValue {
      color: rgb(var(--color-primary-1));
    }
    .placeholder {
      color: rgb(var(--color-primary-3));
    }
    .tag {
      color: rgb(var(--color-primary-1));
      background-color: rgba(var(--color-secondary-4), 1);
    }
  }
}
.dropdown.primary {
  background-color: rgba(var(--color-secondary-3), 1);
  box-shadow: 0 20px 100px 0 rgba(var(--color-black), 0.3);
  .search {
    color: rgb(var(--color-primary-1));
    border-bottom: 1px solid rgba(var(--color-primary-5), 1);
    &::placeholder {
      color: rgb(var(--color-primary-3));
    }
    &:focus {
      background-color: rgba(var(--color-secondary-4));
      border-bottom: 1px solid transparent;
    }
  }
  .selectItem {
    color: rgb(var(--color-primary-3));
    &.selected {
      color: rgb(var(--color-primary-1));
      background-color: rgb(var(--color-secondary-2));
    }
    &:focus, &:hover {
      color: rgb(var(--color-primary-1));
      &:not(.selected) {
        background-color: rgb(var(--color-black-2));
      }
    }
    &:focus {
      transform: scale(1.001);
    }
  }
}

// sizes
.md {
  .label {
    & + .trigger {
      margin-top: 6px;
    }
  }
  .trigger {
    border-radius: 6px;
    padding: 12px 14px;
    // gap between multiselect tags
    grid-gap: 4px;
  }
  .tag {
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 9.5px;
  }
}
.dropdown.md {
  .search {
    padding: 10px;
  }
  .selectItem {
    padding: 10px;
  }
}

// default styles
.root {
  &.active {
    .arrow {
      transform: rotate(180deg);
    }
    .trigger {
      box-shadow: 0 0 0 1px rgba(var(--color-primary-1), 1);
    }
  }
  &.disabled {
    opacity: 0.5;
  }
  &.error {
    .label {
      color: rgba(var(--color-danger), 1);
    }
    .trigger {
      box-shadow: 0 0 0 1px rgba(var(--color-danger), 1);
      .placeholder {
        color: rgba(var(--color-danger), 1);
      }
      color: rgba(var(--color-danger), 1);
    }
  }
}

.trigger {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: .15s box-shadow;
}

.dropdown {
  position: fixed;
  border-radius: 6px;
  overflow: hidden;
  pointer-events: none;
  * {
    pointer-events: none;
  }
  opacity: 0;
  &.top {
    clip-path: circle(7% at 40% 85%);
    transform: translateY(9%) translateX(-1%);
  }
  &.bottom {
    clip-path: circle(7% at 40% 15%);
    transform: translateY(-9%) translateX(-1%);
  }
  &.active {
    opacity: 1;
    pointer-events: all;
    &.bottom, &.top {
      transform: translateY(0);
      clip-path: circle(100% at 40% 15%);
    }
    * {
      pointer-events: all;
    }
  }
  .search {
    display: block;
    width: 100%;
  }
}

.selectItem {
  width: 100%;
  text-align: left;
  display: block;
  cursor: pointer;
}
</style>
