<template>
  <div :class="$style.wrapper">
    <div
      v-if="label"
      :class="$style.label"
    >
      {{ label }}
    </div>
    <div
      ref="container"
      :class="[
        $style.options,
        ...states.map((s) => $style[s])
      ]"
    >
      <button
        v-for="option in options"
        :ref="optionElement => { optionRefs[option.value] = optionElement }"
        :key="option.value"
        type="button"
        :class="[
          $style.item,
          localValue === option.value && $style.active,
          ...[localValue === option.value && option?.activeState
            ? [$style[option.activeState]]
            : []
          ],
          ...[option?.state
            ? [$style[option.state]]
            : []
          ]
        ]"
        :data-value="option.value"
        @click="onOptionClick(option)"
      >
        <slot
          name="option"
          :option="option"
          :active-option="localValue"
        >
          {{ option.label }}
        </slot>
      </button>
      <div
        :style="computedGhostStyles"
        :class="[
          $style.ghost,
          isGhostAppearAnimation && $style.animated,
          ...[activeOption?.ghostState
            ? [
              $style[activeOption.ghostState]
            ]
            : []
          ]
        ]"
      />
    </div>
  </div>
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
import { useLocalValue } from '@/hooks/useLocalValue';
import { useEnvironmentObserver } from '@/hooks/useEnvironmentObserver';
import { arrayFrom } from '@/utils/array';
import { SelectorEmits, SelectorOption, SelectorProps } from './index';

const props = withDefaults(
  defineProps<SelectorProps>(),
  {
    state: 'primaryColor',
    thickening: 2,
    isGhostAppearAnimation: true,
  },
);
const emit = defineEmits<SelectorEmits>();

const states = computed(() => arrayFrom(props.state));

if (!props.modelValue) {
  throw new Error('[MultiSwitch Error]: modelValue is not passed (check v-model)');
}

const container = ref<HTMLElement>();
const optionRefs = ref<Record<SelectorOption['value'], HTMLElement>>({});
onBeforeUpdate(() => {
  optionRefs.value = {};
});

const localValue = useLocalValue<string>(
  props,
  emit,
  'modelValue',
);

const detectDirection = (nextOption: string, previousOption: string) => {
  const activeOptionIndex = props.options.findIndex(
    (option: SelectorOption) => option.value === previousOption,
  );
  const nextOptionIndex = props.options.findIndex(
    (option: SelectorOption) => option.value === nextOption,
  );
  const isForward = activeOptionIndex < nextOptionIndex;

  if (isForward) {
    emit('selectNext');
  } else {
    emit('selectPrev');
  }
};
watch(localValue, detectDirection);

const activeOption = ref<SelectorOption>();
onMounted(() => {
  const option = props.options.find(
    (option: SelectorOption) => option.value === localValue.value,
  );
  if (option) {
    activeOption.value = option;
  }
});

const onOptionClick = (selectingOption: SelectorOption) => {
  detectDirection(selectingOption.value, localValue.value);
  localValue.value = selectingOption.value;
  activeOption.value = selectingOption;
};

const computedGhostStyles = ref({
  width: '0px',
  height: 'auto',
  left: '0px',
  top: '0px',
});

const findActiveTab = () => {
  if (!container.value || !localValue.value) return;

  const activeTabElement = optionRefs.value[localValue.value];

  const { left: containerLeft } = container.value.getBoundingClientRect();
  const { width, height, left } = activeTabElement.getBoundingClientRect();

  const { thickening } = props;

  const normalized = thickening * 2;

  computedGhostStyles.value.width = `${width + normalized}px`;
  computedGhostStyles.value.height = `${height + normalized}px`;
  computedGhostStyles.value.left = `${(left - containerLeft) - (normalized / 2)}px`;
  computedGhostStyles.value.top = `${-(normalized / 2)}px`;
};

const {
  setListeners,
  removeListeners,
} = useEnvironmentObserver(container, findActiveTab);

watch(localValue, findActiveTab);
onMounted(() => {
  findActiveTab();
  setListeners();
});
onBeforeUnmount(removeListeners);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

@keyframes options-ghost {
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.wrapper {}

.label {
  font-weight: 400;
  & + .options {
    margin-top: 6px;
  }
}

.options {
  position: relative;
  display: flex;
}

.item {
  position: relative;
  z-index: 2;
  cursor: pointer;
  transition: color 300ms, transform 200s;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ghost {
  position: absolute;
  transition: 300ms left, 300ms width, 360ms background-color;
  border-radius: 5px;
  &.animated {
    animation: options-ghost .7s ease-in-out;
  }
}

.primaryColor, .primaryColor2 {
  &.options {
    border-radius: 5px;
  }
  .item {
    color: rgb(var(--color-accent-2));
    transition: 300ms color;
    flex-grow: 1;
    &.active {
      color: rgb(var(--color-accent-1));
    }
  }
  .ghost {
    background: var(--color-main-gradient);
    border-radius: 5px;
  }
}

.primaryColor {
  background-color: rgb(var(--color-background-3));
}

.primaryColor2 {
  background-color: rgb(var(--color-background-2));
}

.defaultSize {
  &.options {
    border-radius: 5px;
  }
  .item {
    @include title4;
    padding: 4px 10px;
    font-weight: 600;
    font-size: 14px;
    height: 100%;
    flex-grow: 1;
  }
  .ghost {
    border-radius: 5px;
  }
}

.mdSize {
  &.options {
    border-radius: 5px;
  }
  .item {
    @include title4;
    padding: 5.5px 10px;
    font-weight: 600;
    font-size: 14px;
    height: 100%;
    flex-grow: 1;
  }
  .ghost {
    border-radius: 5px;
  }
}

.lgSize {
  &.options {
    border-radius: 5px;
  }
  .item {
    @include title1;
    font-weight: 700;
    padding: 10px;
    height: 100%;
    flex-grow: 1;
  }
  .ghost {
    border-radius: 5px;
  }
}

.secondaryColor5 {
  &.options {
    background-color: rgb(var(--color-background-2));
  }
  .item {
    color: rgb(var(--color-accent-2));
    flex-grow: 1;
    &.active {
      color: rgb(var(--color-accent-1));
    }
  }
  .ghost {
    background: rgb(var(--color-background-5));
    border-radius: 5px;
  }
}

.secondaryColor2 {
  &.options {
    background-color: rgb(var(--color-background-2));
  }
  .item {
    color: rgb(var(--color-accent-2));
    &.active {
      color: rgb(var(--color-accent-1));
    }
  }
  .ghost {
    background-color: rgb(var(--color-background-3));
  }
}

.simpleColor {
  &.options {
  }
  .item {
    color: rgb(var(--color-accent-2));
    &.active {
      //color: rgb(var(--color-accent-1));
    }
  }
  .ghost {
    display: none;
  }
}

.tabsShape {
  &.options {
    border-radius: 10px 10px 0 0;
    overflow: hidden;
  }
  .item {
    @include title4;
    padding: 15px 0;
    font-weight: 600;
    font-size: 14px;
    height: 100%;
    flex-grow: 1;
  }
  .ghost {
    border-radius: 10px 10px 0 0;
  }
}

.successBackground {
  background-color: rgb(var(--color-success)) !important;
}

.dangerBackground {
  background-color: rgb(var(--color-danger)) !important;
}

.primaryTextColor {
  color: rgb(var(--color-primary-1)) !important;
}

.danger2TextColor {
  color: rgb(var(--color-danger-2)) !important;
}

.accent1TextColor {
  color: rgb(var(--color-accent-1)) !important;
}
</style>
