<template>
  <div
    :class="[
      $style.wrapper,
      state.map((s) => $style[s])
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
import { LogoProps } from './index';
import LogoIcon from './assets/logoIcon.svg';
import LogoText from './assets/logoText.svg';

withDefaults(
  defineProps<LogoProps>(),
  {
    type: 'full',
    state: () => ['mdSize', 'defaultState2'],
  },
);

const logoIcon = ref();
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  align-items: center;
}

.mdSize {
  .logoIconWrapper {
    padding: 10px;
  }

  .logoIcon {
    width: 22px;
    height: 22px;
  }
}
.smSize {
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

.logoIconWrapper {
  border-radius: 50%;
}

.logoIcon {
  display: block;
}

.logoText {
  margin-left: 15px;
}
</style>
