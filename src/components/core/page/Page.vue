<template>
  <Suspense timeout="0">
    <template #default>
      <slot name="page" />
    </template>
    <template #fallback>
      <slot name="skeleton" />
    </template>
  </Suspense>
</template>

<style lang="scss">
.pageTransition {
  &-enter-active,
  &-leave-active {
    transition: opacity 20s, transform 20s;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scale(1.1);
  }
}
</style>
