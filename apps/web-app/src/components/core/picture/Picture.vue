<template>
  <img
    :class="[
      $style.picture,
      isFill && $style.fill,
      loaded && $style.loaded,
    ]"
    :style="computedStyles"
    :src="src"
    :srcset="srcset"
    :alt="alt"
  >
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  toRefs,
  watch,
} from 'vue';
import { PictureProps } from './index';

const props = withDefaults(
  defineProps<PictureProps>(),
  {
    transitionDuration: 200,
  },
);
const {
  src,
  srcset,
  transitionDuration,
} = toRefs(props);

const loaded = ref(false);

const computedStyles = computed(() => ({
  transition: `opacity ${transitionDuration.value}ms`,
}));

const preload = () => {
  const img = document.createElement('img');
  if (src?.value) {
    img.src = src.value;
  }
  if (srcset?.value) {
    img.srcset = srcset.value;
  }

  img.style.display = 'none';
  img.onload = () => {
    loaded.value = true;
    img.remove();
  };

  document.documentElement.appendChild(img);
};

preload();

watch([src, srcset], () => {
  loaded.value = false;
  preload();
});
</script>

<style lang="scss" module>
.picture {
  display: block;
  opacity: 0;
  background-size: cover;
  &.loaded {
    opacity: 1;
  }
}

.fill {
  width: 100%;
  height: 100%;
}
</style>
