<template>
  <div
    ref="trigger"
    :class="$style.trigger"
    @click="onTriggerClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @dblclick="onTriggerDbClick"
  >
    <slot name="trigger" />
  </div>
  <Teleport :to="teleportTarget">
    <div
      ref="dropdown"
      v-click-outside="onClickOutside"
      :style="computedDropdownStyles"
      :class="[
        $style.dropdown,
        !localIsVisible && $style.hidden,
      ]"
    >
      <div
        ref="dropdownInner"
        :class="$style.dropdownInner"
      >
        <slot name="dropdown" />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onBeforeMount,
  onMounted,
  watch,
  Teleport,
} from 'vue';
import { compose } from '@terminal/common/utils/fp';
import { getValueByKey } from '@terminal/common/utils/object';
import { divideRight, max, roundToDecimalPlaces } from '@terminal/common/utils/number';
import { teleportTargets } from '../../enums/teleport';
import { useEnvironmentObserver } from '../../hooks/useEnvironmentObserver';
import { playAnimation } from '../../utils/animation';
import { getRect } from '../../utils/dom';
import { DropdownProps, DropdownEmits, DropdownPlacement } from './index';

const props = withDefaults(
  defineProps<DropdownProps>(),
  {
    isVisible: undefined,
    placement: 'bottom',
    toggleByClick: true,
    keepWithinWindowVertical: false,
    keepWithinWindowHorizontal: true,
    containerGap: 10,
    automaticReplace: true,
    dropAnimationInitialPositionShift: 60,
    transitionDuration: 720,
    blockInnerToggling: false,
    showBy: 'click',
  },
);

const emit = defineEmits<DropdownEmits>();

const trigger = ref<HTMLElement>();

const dropdown = ref<HTMLElement>();

const dropdownInner = ref<HTMLElement>();

const localIsVisibleState = ref(false);

const localIsVisible = computed({
  get: () => (props.isVisible !== undefined
    ? props.isVisible
    : localIsVisibleState.value),
  set: (value: boolean) => {
    if (props.isVisible !== undefined) {
      emit('update:isVisible', value);
      return;
    }
    localIsVisibleState.value = value;
  },
});

const setIsVisible = (
  isVisible: boolean,
) => {
  if (props.blockInnerToggling) return;

  localIsVisible.value = isVisible;
};

const onClickOutside = (event: MouseEvent) => {
  if (!trigger.value || !dropdown.value) return;

  const target = (event.target as HTMLElement);

  if (
    target === trigger.value
      || trigger.value.contains(target)
      || target === dropdown.value
      || dropdown.value.contains(target)
  ) return;

  emit('clickOutside');

  setIsVisible(false);
};

const teleportTarget = computed(() => `#${teleportTargets.LEVITATING}`);

const computedDropdownStyles = ref({
  transform: 'translateY(0) translateX(0)',
});

const normalizePlacement = (
  placement: DropdownPlacement,
  triggerRect: DOMRect,
  dropdownRect: DOMRect,
) => {
  let normalizedPlacement = placement;

  if (placement === 'top' && triggerRect.top < dropdownRect.height + props.containerGap) {
    normalizedPlacement = 'bottom';
  }

  if (placement === 'bottom' && (
    triggerRect.top
      + triggerRect.height
      + props.containerGap
      + dropdownRect.height
  ) > window.innerHeight
  ) {
    normalizedPlacement = 'top';
  }

  return normalizedPlacement;
};

const calculateDropdownPosition = () => {
  if (!trigger.value || !dropdown.value) return;

  const triggerRect = trigger.value.getBoundingClientRect();
  const dropdownRect = dropdown.value.getBoundingClientRect();

  let basePlacement = Array.isArray(props.placement)
    ? props.placement[0]
    : props.placement as DropdownPlacement;

  if (props.automaticReplace) {
    basePlacement = normalizePlacement(basePlacement, triggerRect, dropdownRect);
  }

  const secondaryPlacement = Array.isArray(props.placement)
    ? props.placement[1]
    : 'center';

  let dropdownTop = 0;
  let dropdownLeft = 0;

  // calculate base placement
  if (basePlacement === 'bottom') {
    dropdownTop = triggerRect.top + triggerRect.height;
  }
  if (basePlacement === 'top') {
    dropdownTop = triggerRect.top - dropdownRect.height;
  }
  if (basePlacement === 'left') {
    dropdownLeft = triggerRect.left - dropdownRect.width;
  }
  if (basePlacement === 'right') {
    dropdownLeft = triggerRect.left + triggerRect.width;
  }

  // calculate secondary placement
  if (basePlacement === 'bottom' || basePlacement === 'top') {
    if (secondaryPlacement === 'left') {
      dropdownLeft = triggerRect.left;
    }
    if (secondaryPlacement === 'center') {
      const triggerCenter = triggerRect.left + (triggerRect.width / 2);
      dropdownLeft = triggerCenter - (dropdownRect.width / 2);
    }
    if (secondaryPlacement === 'right') {
      const difference = triggerRect.width - dropdownRect.width;
      dropdownLeft = triggerRect.left + difference;
    }
  }
  if (basePlacement === 'left' || basePlacement === 'right') {
    if (secondaryPlacement === 'top') {
      dropdownTop = triggerRect.top;
    }
    if (secondaryPlacement === 'center') {
      const triggerCenter = triggerRect.top + (triggerRect.height / 2);
      dropdownTop = triggerCenter - (dropdownRect.height / 2);
    }
    if (secondaryPlacement === 'bottom') {
      const difference = triggerRect.height - dropdownRect.height;
      dropdownTop = triggerRect.top + difference;
    }
  }

  // add distance
  if (props.distance) {
    if (basePlacement === 'bottom') {
      dropdownTop += props.distance;
    }
    if (basePlacement === 'top') {
      dropdownTop -= props.distance;
    }
    if (basePlacement === 'left') {
      dropdownLeft -= props.distance;
    }
    if (basePlacement === 'right') {
      dropdownLeft += props.distance;
    }
  }

  // keep within bounds
  if (props.keepWithinWindowHorizontal) {
    if (dropdownLeft < props.containerGap) {
      dropdownLeft = props.containerGap;
    }
    if ((dropdownLeft + dropdownRect.width) > window.innerWidth) {
      dropdownLeft = window.innerWidth - dropdownRect.width - props.containerGap;
    }
  }
  if (props.keepWithinWindowVertical) {
    if (dropdownTop < props.containerGap) {
      dropdownTop = props.containerGap;
    }
    if ((dropdownTop + dropdownRect.height) > window.innerHeight) {
      dropdownTop = window.innerHeight - dropdownRect.height - props.containerGap;
    }
  }

  dropdownTop = Math.round(dropdownTop);
  dropdownLeft = Math.round(dropdownLeft);

  computedDropdownStyles.value.transform = `translateY(${dropdownTop}px) translateX(${dropdownLeft}px)`;
};

watch(localIsVisible, calculateDropdownPosition);

watch(localIsVisible, () => {
  if (!localIsVisible.value || !dropdown.value) return;

  let translateY: number | number[] = 0;
  let translateX: number | number[] = 0;

  const placement = Array.isArray(props.placement)
    ? props.placement[0]
    : props.placement;

  const positionShift = compose(
    roundToDecimalPlaces(2),
    max(26),
    divideRight(2.8),
    getValueByKey(
      (placement === 'top' || placement === 'bottom')
        ? 'height'
        : 'width',
    ),
    getRect,
  )(dropdown.value);

  if (placement === 'bottom') {
    translateY = [-positionShift, 0];
  }
  if (placement === 'top') {
    translateY = [positionShift, 0];
  }
  if (placement === 'left') {
    translateX = [positionShift, 0];
  }
  if (placement === 'right') {
    translateX = [-positionShift, 0];
  }

  playAnimation({
    targets: dropdownInner.value,
    translateY,
    translateX,
    opacity: [
      { value: 0, easing: 'linear', duration: 0 },
      { value: 1, easing: 'linear', duration: 120 },
    ],
    duration: props.transitionDuration,
  });
});

const onTriggerClick = () => {
  emit('triggerClick');

  if ([
    !props.toggleByClick,
    props.isDisabled,
    props.showBy !== 'click',
  ].some(Boolean)) return;

  setIsVisible(!localIsVisible.value);
};

const onMouseEnter = () => {
  if (props.showBy === 'hover') {
    setIsVisible(true);
  }
};

const onMouseLeave = () => {
  if (props.showBy === 'hover') {
    setIsVisible(false);
  }
};

const onTriggerDbClick = () => {
  emit('triggerDbclick');
};

const {
  setListeners,
  removeListeners,
} = useEnvironmentObserver(trigger, calculateDropdownPosition, true);

onMounted(() => {
  calculateDropdownPosition();
  setListeners();
});
onBeforeMount(removeListeners);
</script>

<style lang="scss" module>
.trigger {}

.dropdown {
  position: absolute;
  top: 0;
  left: 0;
  &.hidden {
    pointer-events: none;
    * {
      pointer-events: none;
    }
    .dropdownInner {
      transition: opacity 200ms;
      opacity: 0 !important;
    }
  }
}
.dropdownInner {}
</style>
