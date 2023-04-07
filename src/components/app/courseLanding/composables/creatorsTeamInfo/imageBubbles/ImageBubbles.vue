<template>
  <div
    ref="container"
    :class="$style.imageBubbles"
  >
    <div
      v-for="{ srcset, className } in images"
      :key="className"
      :class="[className, isSmoothContainer && $style.imageMoveContainer]"
      :style="computedStyles"
    >
      <div
        :class="$style.imageContainer"
        data-role="imageBubblesContainer"
      >
        <Picture
          :srcset="srcset"
          is-fill
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed, onMounted, reactive, ref, toRefs, watch,
} from 'vue';
import { collectSrcSet } from '@/helpers/dom';
import Picture from '@/components/core/picture/Picture.vue';

import { useCssModules } from '@/hooks/useCssModules';
import { useElementBounding, useMouseInElement, useTimeout } from '@vueuse/core';
import {
  divideRight,
  max,
  min,
  subtractRight,
} from '@/utils/number';
import { compose } from '@/utils/fp';
import {
  percentFormat,
} from '@/utils/numberFormat';
import { useAnimation } from '@/hooks/useAnimation';
import anime from 'animejs';
import HamsterPng from './assets/hamsterNft.png';
import HamsterWebp from './assets/hamsterNft.webp';
import HamsterAvif from './assets/hamsterNft.avif';

import EtheriumPng from './assets/etheriumNft.png';
import EtheriumWebp from './assets/etheriumNft.webp';
import EtheriumAvif from './assets/etheriumNft.avif';

import MonkeyPng from './assets/monkeyNft.png';
import MonkeyWebp from './assets/monkeyNft.webp';
import MonkeyAvif from './assets/monkeyNft.avif';

import PepeFrogPng from './assets/pepeFrog.png';
import PepeFrogWebp from './assets/pepeFrog.webp';
import PepeFrogAvif from './assets/pepeFrog.avif';

import GirlPng from './assets/girl.png';
import GirlWebp from './assets/girl.webp';
import GirlAvif from './assets/girl.avif';

import PixelArtPng from './assets/pixelArtNft.png';
import PixelArtWebp from './assets/pixelArtNft.webp';
import PixelArtAvif from './assets/pixelArtNft.avif';

import YodaPng from './assets/yoda.png';
import YodaWebp from './assets/yoda.webp';
import YodaAvif from './assets/yoda.avif';

const { $style } = useCssModules();

const container = ref();

const { elementX: x, elementY: y, isOutside } = useMouseInElement(container);
const {
  width: elementWidth,
  height: elementHeight,
} = toRefs(
  useElementBounding(container),
);

const elementShift = computed(() => ({
  x: compose(
    divideRight(30), // reduce value to get abstract number of shift
    max(
      -divideRight(2, elementWidth.value),
    ),
    // min and max to keep number in rect
    min(
      divideRight(2, elementWidth.value),
    ),
    subtractRight(
      // subtract half of element width to find shift from center of element
      divideRight(2, elementWidth.value),
    ),
  )(x.value),
  y: compose(
    divideRight(30),
    max(
      -divideRight(2, elementHeight.value),
    ),
    min(
      divideRight(2, elementHeight.value),
    ),
    subtractRight(
      divideRight(2, elementHeight.value),
    ),
  )(y.value),
}));

const isSmoothContainer = ref(false);

const computedStyles = reactive({
  transform: 'translateY(0) translateX(0)',
});

const { start, stop } = useTimeout(100, {
  controls: true,
  callback: () => {
    isSmoothContainer.value = false;
  },
});
watch(isOutside, () => {
  stop();
  isSmoothContainer.value = true;
  start();
});

watch(elementShift, () => {
  if (isOutside.value) {
    computedStyles.transform = 'none';
    return;
  }

  computedStyles.transform = `translateY(${
    percentFormat(7, elementShift.value.y)
  }) translateX(${
    percentFormat(7, elementShift.value.x)
  })`;
});

const images = reactive([
  {
    className: $style.hamsterNft,
    srcset: collectSrcSet([
      HamsterAvif,
      HamsterWebp,
      HamsterPng,
    ]),
  },
  {
    className: $style.etheriumNft,
    srcset: collectSrcSet([
      EtheriumAvif,
      EtheriumWebp,
      EtheriumPng,
    ]),
  },
  {
    className: $style.pixelArtNft,
    srcset: collectSrcSet([
      PixelArtAvif,
      PixelArtWebp,
      PixelArtPng,
    ]),
  },
  {
    className: $style.monkeyNft,
    srcset: collectSrcSet([
      MonkeyAvif,
      MonkeyWebp,
      MonkeyPng,
    ]),
  },
  {
    className: $style.pepeFrogImg,
    srcset: collectSrcSet([
      PepeFrogAvif,
      PepeFrogWebp,
      PepeFrogPng,
    ]),
  },
  {
    className: $style.girlImg,
    srcset: collectSrcSet([
      GirlPng,
      GirlAvif,
      GirlWebp,
    ]),
  },
  {
    className: $style.yodaImg,
    srcset: collectSrcSet([
      YodaAvif,
      YodaWebp,
      YodaPng,
    ]),
  },
]);

const {
  init,
  play,
} = useAnimation(() => ({
  targets: '[data-role="imageBubblesContainer"]',
  loop: true,
  scale: [
    { value: 0.9, easing: 'easeOutSine', duration: 800 },
    { value: 1.05, easing: 'easeInOutQuad', duration: 1800 },
    { value: 1, easing: 'easeInOutQuad', duration: 600 },
  ],
  delay: anime.stagger(400, { grid: [2, 3], from: 'first' }),
}));

onMounted(() => {
  init();
  play();
});
</script>

<style lang="scss" module>
.imageBubbles {
  position: relative;
  width: 500px;
  height: 711px;
}

.imageContainer {
  width: 100%;
  height: 100%;
}

.imageMoveContainer {
  transition: 100ms transform;
}

.hamsterNft {
  position: absolute;
  left: 100px;
  top: 15px;
  width: 78px;
  height: 78px;
}

.etheriumNft {
  position: absolute;
  left: 225px;
  width: 166px;
  height: 166px;
}

.pixelArtNft {
  position: absolute;
  right: 0;
  top: 50px;
  width: 94px;
  height: 94px;
}

.monkeyNft {
  position: absolute;
  left: 0;
  top: 116px;
  width: 285px;
  height: 285px;
}

.pepeFrogImg {
  position: absolute;
  right: 25px;
  top: 195px;
  width: 166px;
  height: 166px;
}

.girlImg {
  position: absolute;
  left: 5px;
  bottom: 140px;
  width: 154px;
  height: 154px;
}

.yodaImg {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 330px;
  height: 330px;
}
</style>
