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
import { useComputedState } from '@/hooks/useComputedState';
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

.lg {
  .logoIconWrapper {
    padding: 12px;
  }

  .logoIcon {
    width: 26px;
    height: 26px;
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
}

.logoText {
  margin-left: 15px;
}
</style>
