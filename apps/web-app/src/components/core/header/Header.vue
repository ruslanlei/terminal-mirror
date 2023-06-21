<template>
  <header
    :style="computedStyles"
    :class="$style.header"
  >
    <Logo />
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
import { useI18n } from 'vue-i18n';
import Logo from '@/components/core/logo/Logo.vue';
import { size } from '@/enums/sizing';

const { t } = useI18n();

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
