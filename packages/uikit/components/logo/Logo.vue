<template>
  <div
    :class="[
      $style.wrapper,
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
import { useComputedState } from '../../hooks/useComputedState';
import { LogoProps } from './index';
import LogoIcon from './assets/logoIcon.svg';
import LogoText from './assets/logoText.svg';

const props = withDefaults(
  defineProps<LogoProps>(),
  {
    type: 'full',
    size: 'md',
    state: 'defaultState2',
    shape: 'circle',
  },
);

const logoIcon = ref();

const computedState = useComputedState(props);
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  align-items: center;
}

.xlThickBorder {
  background: var(--color-main-gradient);
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
    width: 42px;
    height: 42px;
  }
}

.lg {
  .logoIconWrapper {
    padding: 12px;
  }

  .logoIcon {
    width: 26px;
    height: 26px;
  }

  .logoText {
    width: 95px;
  }
}

.md {
  .logoIconWrapper {
    padding: 10px;
  }

  .logoIcon {
    width: 22px;
    height: 22px;
  }
}

.sm {
  .logoIconWrapper {
    padding: 10px;
  }

  .logoIcon {
    width: 20px;
    height: 28px;
  }

  .logoText {
    margin-left: 5px;
  }
}

.defaultState {
  .logoIconWrapper {
    background-color: rgb(var(--color-background-2));
  }
}

.defaultState2 {
  .logoIconWrapper {
    background-color: rgb(var(--color-background-3));
  }
}

.circle {
  .logoIconWrapper {
    border-radius: 50%;
  }
}

.square {
  .logoIconWrapper {
    border-radius: 10px;
  }
}

.logoIcon {
  display: block;
  position: relative;
  z-index: 3;
}

.logoText {
  margin-left: 15px;
  width: 70px;
}
</style>
