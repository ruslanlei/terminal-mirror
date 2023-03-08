<template>
  <div
    :class="[
      $style.courseLogo,
      $style[shape],
      $style[size],
      ...computedState,
    ]"
  >
    <div :class="$style.logoIconWrapper">
      <div ref="logoIcon">
        <LogoIcon
          :class="$style.logoIcon"
        />
      </div>
    </div>
    <LogoText
      v-if="type === 'full'"
      :class="$style.logoText"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useComputedState } from '@/hooks/useComputedState';
import { CourseLogoProps } from './index';
import LogoIcon from './assets/courseLogoIcon.svg';
import LogoText from './assets/courseLogoText.svg';

const props = withDefaults(
  defineProps<CourseLogoProps>(),
  {
    type: 'full',
    size: 'md',
    state: null,
    shape: 'circle',
  },
);

const logoIcon = ref();

const computedState = useComputedState(props);
</script>

<style lang="scss" module>
.courseLogo {
  display: flex;
  align-items: center;
}

.xlThickBorder {
  background: var(--color-blue-gradient);
  position: relative;

  border-radius: 50%;

  &::before {
    border-radius: 50%;
    content: '';
    display: block;
    position: absolute;
    inset: 5px;
    background-color: rgb(var(--color-background-2));
  }

  .logoIconWrapper {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logoIcon {
    width: 50px;
    height: 50px;
  }
}

.background2Color {
  .logoIconWrapper {
    background-color: rgb(var(--color-background-2));
  }
}

.logoIconWrapper {}

.logoIcon {
  display: block;
  position: relative;
  z-index: 3;
}

.logoText {
  margin-left: 15px;
}

.md {
  .logoIcon {
    width: 56px;
  }
}
</style>
