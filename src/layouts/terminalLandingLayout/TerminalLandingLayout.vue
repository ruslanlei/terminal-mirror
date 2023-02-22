<template>
  <div :class="$style.terminalLandingLayoutContainer">
    <TerminalLandingContainer :class="$style.terminalLandingLayout">
      <template #header>
        <TerminalLandingHeader />
      </template>
      <template #content>
        <slot />
      </template>
    </TerminalLandingContainer>
  </div>
</template>

<script setup lang="ts">
import TerminalLandingHeader from '@/components/app/terminalLanding/composables/terminalLandingHeader/TerminalLandingHeader.vue';
import TerminalLandingContainer from '@/containers/terminalLandingContainer/TerminalLandingContainer.vue';
</script>

<style lang="scss" module>
.terminalLandingLayoutContainer {}

.terminalLandingLayout {}
</style>
