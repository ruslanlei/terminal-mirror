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
      :class="[$style.dropdown, !localIsVisible && $style.hidden]"
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
import { DropdownProps, DropdownEmits, DropdownPlacement } from './index';

const props = withDefaults(
  defineProps<DropdownProps>(),
  {
    placement: 'bottom',
    toggleByClick: true,
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

const calculateDropdownPosition = () => {
  if (!trigger.value || !dropdown.value) return;

  const triggerRect = trigger.value.getBoundingClientRect();
  const dropdownRect = dropdown.value.getBoundingClientRect();

  const basePlacement = Array.isArray(props.placement)
    ? props.placement[0]
    : props.placement as DropdownPlacement;

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
      const difference = Math.abs(triggerRect.width - dropdownRect.width);
      dropdownLeft = triggerRect.left - difference;
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
  }

  const gap = 10;

  // keep within bounds
  if (dropdownLeft < gap) {
    dropdownLeft = gap;
  }
  if ((dropdownLeft + dropdownRect.width) > window.innerWidth) {
    dropdownLeft = window.innerWidth - dropdownRect.width - gap;
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
.trigger {

}

.dropdown {
  position: absolute;
  top: 0;
  left: 0;
  .dropdownInner {
    transform: translateY(0);
    transition: transform 200ms, opacity 200ms, clip-path 200ms;
    clip-path: circle(150% at 100% 0);
  }
  &.hidden {
    pointer-events: none;
    * {
      pointer-events: none;
    }
    .dropdownInner {
      opacity: 0;
      transform: translateY(-16px);
      clip-path: circle(0% at 100% 0);
    }
  }
}

.dropdownInner {}
</style>
