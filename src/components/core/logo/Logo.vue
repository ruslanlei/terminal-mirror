<template>
  <div :class="[$style.wrapper, $style[size]]">
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
import { onMounted, ref } from 'vue';
import { playAnimation } from '@/utils/animation';
import { LogoProps } from './index';
import LogoIcon from './assets/logoIcon.svg';
import LogoText from './assets/logoText.svg';

withDefaults(
  defineProps<LogoProps>(),
  {
    type: 'full',
    size: 'md',
  },
);

const logoIcon = ref();

onMounted(() => {
  playAnimation({
    targets: logoIcon.value,
    duration: 2000,
    rotate: -360,
    loop: true,
    delay: 20000,
  });
});
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  align-items: center;
  &.md {
    .logoIconWrapper {
      padding: 10px;
    }

    .logoIcon {
      width: 22px;
      height: 22px;
    }
  }
  &.sm {
    .logoIconWrapper {
      padding: 10px;
    }

    .logoIcon {
      width: 22px;
      height: 22px;
    }

    .logoText {
      margin-left: 5px;
    }
  }
}

.logoIconWrapper {
  background-color: rgb(var(--color-background-3));
  border-radius: 50%;
}

.logoIcon {
  display: block;
}

.logoText {}
</style>
