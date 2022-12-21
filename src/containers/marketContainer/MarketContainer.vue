<template>
  <div :class="$style.marketContainer">
    <div
      :style="stickyElementStyles"
      :class="$style.tools"
    >
      <slot name="tools" />
    </div>
    <main :class="$style.main">
      main
    </main>
    <aside
      :style="stickyElementStyles"
      :class="$style.sideBar"
    >
      <div :class="$style.orderSettings">
        <slot name="orderSettings" />
      </div>
      <div
        v-if="'playerControls' in $slots"
        :class="$style.playerControls"
      >
        <slot name="playerControls" />
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { size } from '@/enums/sizing';

const stickyElementStyles = computed(() => ({
  position: 'sticky',
  top: `${size.HEADER}px`,
  height: `calc(100 * var(--vh) - ${size.HEADER}px)`,
}));
</script>

<style lang="scss" module>
.marketContainer {
  display: grid;
  grid-template-columns: 50px 1fr 320px;
  gap: 20px;
  padding: 0 20px;
}

.tools {
  padding-bottom: 20px;
}

.main {
  border: 1px solid rgba(var(--color-accent-2), 0.1);
  height: 130vh;
}

.sideBar {
  display: grid;
  grid-template-rows: 1fr 152px;
  gap: 20px;
  padding-bottom: 20px;
}

.orderSettings {
}

.playerControls {
}
</style>
