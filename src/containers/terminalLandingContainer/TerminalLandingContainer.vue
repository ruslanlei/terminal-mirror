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
import { ref } from 'vue';
import LearnToEarnScreenBlob from '@/components/app/terminalLanding/assets/LearnToEarnScreenBlob.webp';
import Picture from '@/components/core/picture/Picture.vue';

const learnToEarnScreenBlobRight = ref();
const learnToEarnScreenBlobLeft = ref();
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
  @keyframes learnToEarnScreenBlobLeft {
    from {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-300px) scale(1.5);
    }
    to {
      transform: translateY(0) scale(1);
    }
  }
  animation: 18s learnToEarnScreenBlobLeft  infinite ease-in-out;
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
  @keyframes learnToEarnScreenBlobRight {
    from {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(300px) scale(1.5);
    }
    to {
      transform: translateY(0) scale(1);
    }
  }
  animation: 18s learnToEarnScreenBlobRight infinite ease-in-out;
  .learnToEarnScreenBlobRightImg {
    width: 100%;
  }
}
</style>
