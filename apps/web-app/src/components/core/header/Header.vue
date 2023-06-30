<template>
  <header
    :style="computedStyles"
    :class="$style.header"
  >
    <UiLogo />
    <div :class="$style.leftColumn">
      <slot name="leftColumn" />
    </div>
    <div :class="$style.rightColumn">
      <slot name="rightColumn" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { UiLogo } from '@terminal/uikit/components/logo';
import { size } from '@/enums/sizing';

const computedStyles = computed(() => ({
  height: `${size.HEADER}px`,
}));
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.header {
  padding: 30px 23px;
  display: flex;
  align-items: center;
}

.leftColumn {
  margin-left: 40px;
}

.rightColumn {
  margin-left: auto;
}
</style>
