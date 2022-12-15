<template>
  <div :class="$style.card">
    <div
      v-if="'head' in $slots"
      :class="$style.head"
    >
      <slot name="head" />
    </div>
    <slot />
  </div>
</template>

<style lang="scss" module>
.card {}
.head {}
</style>
