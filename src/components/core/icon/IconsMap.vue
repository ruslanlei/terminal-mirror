<template>
  <div :class="$style.root">
    <component
      :is="component"
      v-for="[icon, component] in icons"
      :id="`icon-${icon}`"
      :key="icon"
    />
  </div>
</template>

<script setup lang="ts">
const clearIconName = (icon: string) => icon
  .replace(/\.\/assets\/(.*)\.svg$/, '$1')
  .split('/')
  .map((part) => (part.replace(/[\s]/g, '')))
  .join('_');

const icons = (Object.entries(
  import.meta.globEager<any>('./assets/**/*.svg'),
))
  .map(([key, value]) => ([
    clearIconName(key),
    value.default,
  ]));
</script>

<style lang="scss" module>
.root {
  position: fixed;
  top: -9999px;
  right: -9999px;
}
</style>
