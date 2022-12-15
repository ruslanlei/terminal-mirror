<template>
  <img
    :class="[
      $style.picture,
      loaded && $style.loaded
    ]"
    :src="src"
    :srcset="srcset"
    :alt="alt"
  >
</template>

<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';
import { PictureProps } from '@/components/core/picture/index';

const props = defineProps<PictureProps>();
const {
  src,
  srcset,
} = toRefs(props);

const loaded = ref(false);

const preload = () => {
  const img = document.createElement('img');
  if (src?.value) {
    img.src = src.value;
  }
  if (srcset?.value) {
    img.srcset = srcset.value;
  }

  img.style.opacity = '0';
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
  transition: .15s opacity;
  &.loaded {
    opacity: 1;
  }
}
</style>
