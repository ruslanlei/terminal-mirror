<template>
  <div :class="[$style.wrapper, isDisabled && $style.disabled]">
    <div
      v-if="label"
      :class="$style.label"
    >
      {{ label }}
    </div>
    <div
      ref="container"
    >
      <transition-group
        name="selectorElementAppearance"
        tag="div"
        :class="[
          $style.options,
          ...computedStates,
        ]"
        @before-leave="onElementRemove"
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
          key="$ghost"
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
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  watch,
  onMounted,
  onBeforeUnmount,
  onBeforeUpdate, computed,
} from 'vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import { useEnvironmentObserver } from '@/hooks/useEnvironmentObserver';
import { useComputedState } from '@/hooks/useComputedState';
import { addCssProperty, getRect, toCssPxValue } from '@/helpers/style';
import { compose } from '@/utils/fp';
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

const computedStates = useComputedState(props);

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

const activeOption = computed<SelectorOption>(() => props.options.find(
  (option: SelectorOption) => option.value === localValue.value,
) || { value: '', label: '' });

const onOptionClick = (selectingOption: SelectorOption) => {
  detectDirection(selectingOption.value, localValue.value);
  localValue.value = selectingOption.value;
};

const computedGhostStyles = ref({
  width: '0px',
  height: 'auto',
  left: '0px',
  top: '0px',
});

const findActiveTab = () => {
  if (!container.value || !localValue.value) return;

  const activeTabElement = optionRefs.value?.[localValue.value];

  if (!activeTabElement) {
    Object.assign(computedGhostStyles.value, {
      width: '0px',
      height: 'auto',
      left: '0px',
      top: '0px',
    });

    return;
  }

  const { left: containerLeft, top: containerTop } = container.value.getBoundingClientRect();
  const {
    width, height, left, top,
  } = activeTabElement.getBoundingClientRect();

  const { thickening } = props;

  const normalized = thickening * 2;

  computedGhostStyles.value.width = `${width + normalized}px`;
  computedGhostStyles.value.height = `${height + normalized}px`;
  computedGhostStyles.value.left = `${(left - containerLeft) - (normalized / 2)}px`;
  computedGhostStyles.value.top = `${(top - containerTop) - (normalized / 2)}px`;
};

const onElementRemove = (removingElement: HTMLElement) => {
  // add exact height to make element
  // animate it on remove animation.

  const {
    height,
  } = getRect(removingElement);

  compose(
    addCssProperty(['zIndex', 1]),
    addCssProperty(['height', toCssPxValue(height)]),
  )(removingElement);
};

const {
  setListeners,
  removeListeners,
} = useEnvironmentObserver(container, findActiveTab);

watch(localValue, findActiveTab);
onMounted(() => {
  requestAnimationFrame(() => {
    findActiveTab();
    setListeners();
  });
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

.wrapper {
  @include transparentOnDisabled;
}

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

.vertical {
  flex-direction: column;
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
  transition: 300ms left, 300ms top, 300ms width, 360ms background-color, 300ms opacity;
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

.blueGlassVerticalRight {
  &.options {
  }
  .item {
    color: rgb(var(--color-accent-2));
    &.active {
      color: rgb(var(--color-accent-1));
    }
  }
  .ghost {
    background-color: rgb(var(--color-background-1));
    border-right: 2px solid rgb(var(--color-primary-1));
  }
}

.specialFavoritesSize {
  &.options {
  }
  .item {
    flex-grow: 1;
  }
  .ghost {
    border-radius: 0;
  }
}

.simpleColor {
  &.options {
  }
  .item {
    color: rgb(var(--color-accent-2));
    &.active {
      color: rgb(var(--color-accent-1));
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

<style lang="scss">
@import "src/assets/styles";

.selectorElementAppearance {
  &-enter-active,
  &-leave-active {
    transition: opacity 170ms, transform 200ms, height 200ms;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    height: 0 !important;
    transform: scale(0.9) translateY(10px);
  }

  &-enter-from {
    transform: scale(0.9) translateY(-10px);
  }
}
</style>
