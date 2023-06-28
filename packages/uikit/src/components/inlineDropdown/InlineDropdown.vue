<template>
  <div
    ref="root"
    :class="[
      $style.inlineDropdown,
      $style[size],
      isExpanded && $style.active,
      ...computedState,
    ]"
  >
    <button
      type="button"
      :class="$style.trigger"
      @click="toggle"
    >
      <div :class="$style.triggerContent">
        <slot name="trigger" />
      </div>
    </button>
    <div
      :style="computedContainerStyles"
      :class="$style.contentContainer"
    >
      <div
        ref="content"
        :class="$style.content"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { compose } from '@terminal/common/utils/fp';
import { add } from '@terminal/common/utils/number';
import { useEnvironmentObserver } from '@/hooks/useEnvironmentObserver';
import { toCssPxValue } from '@/utils/style';
import { useComputedState } from '@/hooks/useComputedState';
import { getRectField } from '@/utils/dom';
import { InlineDropdownProps } from './index';

const props = withDefaults(
  defineProps<InlineDropdownProps>(),
  {
    gap: 0,
  },
);

const root = ref();
const content = ref();

const computedState = useComputedState(props);

const computedContainerStyles = ref({
  height: toCssPxValue(0),
});
const setContainerHeight = (height: number) => {
  computedContainerStyles.value.height = toCssPxValue(height);
};

const setContentHeightToContainerHeight = () => compose(
  setContainerHeight,
  add(props.gap),
  getRectField('height'),
)(content.value);

const setContainerHeightToZero = () => setContainerHeight(0);

const isExpanded = ref(false);

const toggle = () => {
  isExpanded.value = !isExpanded.value;
};

const calculateContainerHeight = () => (
  isExpanded.value
    ? setContentHeightToContainerHeight
    : setContainerHeightToZero
)();

watch(isExpanded, calculateContainerHeight);
useEnvironmentObserver(root, calculateContainerHeight);
</script>

<style lang="scss" module>
.inlineDropdown {}

.trigger {
  width: 100%;
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
}

.triggerContent {
  position: relative;
  z-index: 2;
}

.contentContainer {
  position: relative;
  overflow: hidden;
  transition: height 300ms;
}

.content {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.lg {
  .trigger {
    padding: 25px 40px;
    border-radius: 10px;
    &:before {
      border-radius: 10px;
    }
  }
  .contentContainer {
    border-radius: 10px;
  }
  .content {
    border-radius: 10px;
    padding: 25px 40px;
  }
}

@keyframes gradientPurpleTriggerOnActiveKeyframes {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradientPurpleTriggerOnActive {
  .trigger {
    &:before {
      content: '';
      display: block;
      position: absolute;
      inset: 0;
      opacity: 0;
      transform: scale(0.1, 0.8);
      transition: transform 200ms, opacity 100ms;
      background: linear-gradient(
        90deg,
        transparent,
        transparent,
        #CC42EE,
        #6271EB,
        transparent,
        transparent
      );
      background-size: 600% 100%;
    }
  }
  &.active {
    .trigger {
      &:before {
        animation: gradientPurpleTriggerOnActiveKeyframes 26s ease infinite;
        opacity: 1;
        transform: scale(1);
      }
    }
  }
}

@keyframes gradientBlueTriggerOnActiveKeyframes {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradientBlueTriggerOnActive {
  .trigger {
    &:before {
      content: '';
      display: block;
      position: absolute;
      inset: 0;
      opacity: 0;
      transform: scale(0.1, 0.8);
      transition: transform 200ms, opacity 100ms;
      background: linear-gradient(
        90deg,
        transparent,
        transparent,
        #42E4EE,
        #6271EB,
        transparent,
        transparent
      );
      background-size: 600% 100%;
    }
  }
  &.active {
    .trigger {
      &:before {
        animation: gradientPurpleTriggerOnActiveKeyframes 26s ease infinite;
        opacity: 1;
        transform: scale(1);
      }
    }
  }
}

.background3TriggerColor {
  .trigger {
    background-color: rgb(var(--color-background-3));
  }
}

.background2BodyColor {
  .content {
    background-color: rgb(var(--color-background-2));
  }
}
</style>
