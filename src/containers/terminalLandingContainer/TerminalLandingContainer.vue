<template>
  <div :class="$style.terminalLandingContainer">
    <div :class="$style.header">
      <slot name="header" />
    </div>
    <div :class="$style.welcomeScreen">
      <slot name="welcomeScreen" />
    </div>
    <div :class="$style.learnToEarnScreen">
      <div :class="$style.learnToEarnScreenContent">
        <slot name="learnToEarnScreen" />
      </div>
      <div
        ref="learnToEarnScreenBlobLeft"
        :class="$style.learnToEarnScreenBlobLeft"
      >
        <Picture
          :class="$style.learnToEarnScreenBlobLeftImg"
          :src="LearnToEarnScreenBlob"
        />
      </div>
      <div
        ref="learnToEarnScreenBlobRight"
        :class="$style.learnToEarnScreenBlobRight"
      >
        <Picture
          :class="$style.learnToEarnScreenBlobRightImg"
          :src="LearnToEarnScreenBlob"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import LearnToEarnScreenBlob from '@/components/app/terminalLanding/assets/LearnToEarnScreenBlob.webp';
import Picture from '@/components/core/picture/Picture.vue';
import { playAnimation } from '@/utils/animation';

const learnToEarnScreenBlobRight = ref();
const learnToEarnScreenBlobLeft = ref();

onMounted(() => {
  playAnimation({
    targets: learnToEarnScreenBlobLeft.value,
    loop: true,
    easing: 'easeInOutQuint',
    scale: [1, 1.5, 1, 1.5, 0.8, 1.6, 1],
    translateY: [0, -300, 0],
    delay: 4000,
    duration: 18000,
  });
  playAnimation({
    targets: learnToEarnScreenBlobRight.value,
    loop: true,
    easing: 'easeInOutQuint',
    scale: [1, 1.5, 1],
    translateY: [0, 300, 0],
    duration: 18000,
  });
});
</script>

<style lang="scss" module>
.terminalLandingContainer {
  height: 3000px; // temporary
  background-color: rgb(var(--color-background-1));
  overflow: hidden;
}

.header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
}

.content {}

.welcomeScreen {
}

.learnToEarnScreen {
  position: relative;
  //overflow: hidden;
}

.learnToEarnScreenContent {
  position: relative;
  z-index: 2;
}

.learnToEarnScreenBlobLeft {
  position: absolute;
  left: -500px;
  bottom: -400px;
  height: 1200px;
  width: 1000px;
  .learnToEarnScreenBlobLeftImg {
    width: 100%;
  }
}
.learnToEarnScreenBlobRight {
  position: absolute;
  right: -500px;
  top: -400px;
  height: 1200px;
  width: 1000px;
  .learnToEarnScreenBlobRightImg {
    width: 100%;
  }
}
</style>
