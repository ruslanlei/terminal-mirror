<template>
  <div :class="$style.iconsMap">
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
  import.meta.glob<any>('./assets/**/*.svg', { eager: true }),
))
  .map(([key, value]) => ([
    clearIconName(key),
    value.default,
  ]));
</script>

<style lang="scss" module>
.iconsMap {
  position: fixed;
  top: -9999px;
  right: -9999px;
}
</style>
