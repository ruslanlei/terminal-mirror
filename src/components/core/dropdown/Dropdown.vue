<template>
  <div
    ref="trigger"
    :class="$style.trigger"
    @click="onTriggerClick"
  >
    <slot name="trigger" />
  </div>
  <teleport :to="teleportTarget">
    <div
      ref="dropdown"
      v-click-outside="onClickOutside"
      :style="computedDropdownStyles"
      :class="[
        $style.dropdown,
        $style[computedTransitionName],
        !localIsVisible && $style.hidden,
        smooth && $style.smooth,
      ]"
    >
      <div :class="$style.dropdownInner">
        <slot name="dropdown" />
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onBeforeMount,
  onMounted,
} from 'vue';
import { teleportTargets } from '@/enums/teleport';
import { useLocalValue } from '@/hooks/useLocalValue';
import { useEnvironmentObserver } from '@/hooks/useEnvironmentObserver';
import { capitalizeFirstLetter } from '@/utils/string';
import { DropdownProps, DropdownEmits, DropdownPlacement } from './index';

const props = withDefaults(
  defineProps<DropdownProps>(),
  {
    placement: 'bottom',
    toggleByClick: true,
    keepWithinWindowVertical: false,
    keepWithinWindowHorizontal: true,
    containerGap: 10,
    automaticReplace: true,
    smooth: true,
  },
);

const emit = defineEmits<DropdownEmits>();

const trigger = ref<HTMLElement>();

const dropdown = ref<HTMLElement>();

const localIsVisible = useLocalValue<boolean>(props, emit, 'isVisible');

const onClickOutside = (event: MouseEvent) => {
  if (!trigger.value || !dropdown.value) return;

  const target = (event.target as HTMLElement);

  if (
    target === trigger.value
      || trigger.value.contains(target)
      || target === dropdown.value
      || dropdown.value.contains(target)
  ) return;

  localIsVisible.value = false;
};

const teleportTarget = computed(() => `#${teleportTargets.LEVITATING}`);

const computedDropdownStyles = ref({
  transform: 'translateY(0) translateX(0)',
});

const computedTransitionName = computed(() => (
  Array.isArray(props.placement)
    ? `${props.placement[0]}${capitalizeFirstLetter(props.placement[1])}`
    : props.placement));

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

const onTriggerClick = () => {
  if (!props.toggleByClick) return;

  localIsVisible.value = !localIsVisible.value;
};

const {
  setListeners,
  removeListeners,
} = useEnvironmentObserver(calculateDropdownPosition);

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
  &.smooth {
    transition: transform 80ms;
  }
  .dropdownInner {
    transform: translateY(0);
    transition: transform 200ms, opacity 200ms, clip-path 200ms;
  }
  &.hidden {
    pointer-events: none;
    * {
      pointer-events: none;
    }
    .dropdownInner {
      opacity: 0;
    }
  }
}

// transitions

.bottomRight, .leftTop {
  .dropdownInner {
    clip-path: circle(150% at 100% 0);
  }
  &.hidden {
    .dropdownInner {
      transform: translateY(-16px);
      clip-path: circle(0% at 100% 0);
    }
  }
}

.bottom {
  .dropdownInner {
    clip-path: circle(150% at 50% 0);
  }
  &.hidden {
    .dropdownInner {
      transform: translateY(-16px);
      clip-path: circle(0% at 50% 0);
    }
  }
}

.bottomLeft, .rightTop {
  .dropdownInner {
    clip-path: circle(150% at 0 0);
  }
  &.hidden {
    .dropdownInner {
      transform: translateY(-16px);
      clip-path: circle(0% at 0 0);
    }
  }
}

.top {
  .dropdownInner {
    clip-path: circle(120% at 50% 100%);
  }
  &.hidden {
    .dropdownInner {
      transform: translateY(16px);
      clip-path: circle(0% at 50% 100%);
    }
  }
}

.topRight {
  .dropdownInner {
    clip-path: circle(150% at 100% 100%);

  }
  &.hidden {
    .dropdownInner {
      transform: translateY(16px);
      clip-path: circle(0 at 100% 100%);
    }
  }
}

.dropdownInner {}
</style>
