<template>
  <div :class="$style.imagesStack">
    <div
      v-for="{ className, srcset, interactive } in images"
      :key="className"
      :class="[
        className,
        $style.imageContainer,
        interactive ? $style.interactive : $style.noninteractive,
      ]"
    >
      <Picture
        :srcset="srcset"
        is-fill
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import Picture from '@/components/core/picture/Picture.vue';
import { useCssModules } from '@/hooks/useCssModules';
import { reactive } from 'vue';
import { collectSrcSet } from '@/utils/dom';
import PurpleSquarePng from './assets/purpleSquare.png';
import PurpleSquareWebp from './assets/purpleSquare.webp';
import PurpleSquareAvif from './assets/purpleSquare.avif';

import BlueSquarePng from './assets/blueSquare.png';
import BlueSquareWebp from './assets/blueSquare.webp';
import BlueSquareAvif from './assets/blueSquare.avif';

import YellowSquarePng from './assets/yellowSquare.png';
import YellowSquareWebp from './assets/yellowSquare.webp';
import YellowSquareAvif from './assets/yellowSquare.avif';

import StatsScalePng from './assets/statsScale.png';
import StatsScaleWebp from './assets/statsScale.webp';
import StatsScaleAvif from './assets/statsScale.avif';

import AnalysisPng from './assets/analysis.png';
import AnalysisWebp from './assets/analysis.webp';
import AnalysisAvif from './assets/analysis.avif';

import BlockChainInfoPng from './assets/blockchainInfo.png';
import BlockChainInfoWebp from './assets/blockchainInfo.webp';
import BlockChainInfoAvif from './assets/blockchainInfo.avif';

const { $style } = useCssModules();

const images = reactive([
  {
    className: $style.purpleSquareImg,
    srcset: collectSrcSet([
      PurpleSquareAvif,
      PurpleSquareWebp,
      PurpleSquarePng,
    ]),
  },
  {
    className: $style.blockchainImg,
    srcset: collectSrcSet([
      BlockChainInfoAvif,
      BlockChainInfoWebp,
      BlockChainInfoPng,
    ]),
    interactive: true,
  },
  {
    className: $style.yellowSquareImg,
    srcset: collectSrcSet([
      YellowSquareAvif,
      YellowSquareWebp,
      YellowSquarePng,
    ]),
  },
  {
    className: $style.statsScale,
    srcset: collectSrcSet([
      StatsScaleAvif,
      StatsScaleWebp,
      StatsScalePng,
    ]),
    interactive: true,
  },
  {
    className: $style.blueSquareImg,
    srcset: collectSrcSet([
      BlueSquareAvif,
      BlueSquareWebp,
      BlueSquarePng,
    ]),
  },
  {
    className: $style.analysisImg,
    srcset: collectSrcSet([
      AnalysisAvif,
      AnalysisWebp,
      AnalysisPng,
    ]),
    interactive: true,
  },
]);
</script>

<style lang="scss" module>
.imagesStack {
  width: 565px;
  height: 632px;
  position: relative;
  &:hover {
    .noninteractive {
      transform: scale(0.9);
    }
  }
}

.imageContainer {
}

.interactive {
  display: block;
  transition: transform 200ms;
  &:hover {
    transform: translateY(-30%) rotate(10deg) scale(1.08);
  }
}

.noninteractive {
  transition: transform 200ms;
}

.purpleSquareImg {
  position: absolute;
  top: 0;
  left: 0;
  width: 340px;
}

.blockchainImg {
  position: absolute;
  top: 40px;
  left: 70px;
  max-width: 444px;
}

.yellowSquareImg {
  position: absolute;
  right: 0;
  top: 145px;
  width: 340px;
}

.statsScale {
  position: absolute;
  left: 25px;
  top: 205px;
  max-width: 444px;
}

.blueSquareImg {
  position: absolute;
  left: 45px;
  top: 285px;
  width: 340px;
}

.analysisImg {
  position: absolute;
  right: 35px;
  top: 340px;
  max-width: 444px;
}
</style>
