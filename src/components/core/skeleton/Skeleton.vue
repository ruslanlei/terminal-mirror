<template>
  <div :class="$style.skeleton" />
</template>

<script setup lang="ts">
</script>

<style lang="scss" module>
@keyframes skeletonHighlight {
  from {
    transform: translateX(-150%);
    opacity: 0.2;
  }
  10% {
    opacity: 0.2;
  }
  40% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  80% {
    transform: translateX(300%);
    opacity: 0.2;
  }
  to {
    transform: translateX(300%);
    opacity: 0.2;
  }
}

.skeleton {
  background-color: rgb(var(--color-background-2));
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    display: block;
    width: 50%;
    height: 150%;
    position: absolute;
    background-color: rgba(#262938, 1);
    animation: 1800ms skeletonHighlight infinite linear;
    //filter: blur(2px);
  }
}
</style>
