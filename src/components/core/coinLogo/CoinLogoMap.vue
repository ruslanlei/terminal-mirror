<template>
  <div :class="$style.coinLogoMap">
    <component
      :is="component"
      v-for="[icon, component] in logos"
      :id="`coin-logo-${icon}`"
      :key="icon"
    />
  </div>
</template>

<script setup lang="ts">

const clearLogoName = (icon: string) => icon
  .replace(/\.\/assets\/(.*)\.svg$/, '$1')
  .split('/')
  .map((part) => (part.replace(/[\s]/g, '')))
  .join('_');

const logos = (Object.entries(
  import.meta.glob<any>('./assets/**/*.svg', { eager: true }),
))
  .map(([key, value]) => ([
    clearLogoName(key),
    value.default,
  ]));

</script>

<style lang="scss" module>
.coinLogoMap {
  position: fixed;
  top: -9999px;
  right: -9999px;
}
</style>
