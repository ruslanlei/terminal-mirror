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
        <UiPicture
          :class="$style.learnToEarnScreenBlobLeftImg"
          :src="LearnToEarnScreenBlob"
        />
      </div>
      <div
        ref="learnToEarnScreenBlobRight"
        :class="$style.learnToEarnScreenBlobRight"
      >
        <UiPicture
          :class="$style.learnToEarnScreenBlobRightImg"
          :src="LearnToEarnScreenBlob"
        />
      </div>
    </div>
    <div :class="$style.totalBeginnerBadgeContainer">
      <div :class="$style.totalBeginnerBadgeWrapper">
        <slot name="totalBeginnerBadge" />
      </div>
    </div>
    <div :class="$style.assignmentScreen">
      <slot name="assignmentScreen" />
    </div>
    <div :class="$style.whyToTrainScreen">
      <slot name="whyToTrainScreen" />
    </div>
    <div :class="$style.ecosystemScreen">
      <slot name="ecosystemScreen" />
    </div>
    <div :class="$style.plans">
      <slot name="plans" />
    </div>
    <div :class="$style.faq">
      <slot name="faq" />
    </div>
    <div :class="$style.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { UiPicture } from '@terminal/uikit/components/picture';
import LearnToEarnScreenBlob from './assets/learnToEarnScreenBlob.webp';

const learnToEarnScreenBlobRight = ref();
const learnToEarnScreenBlobLeft = ref();
</script>

<style lang="scss" module>
.terminalLandingContainer {
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
  padding-bottom: 240px;
}

.learnToEarnScreenBlobLeft {
  position: absolute;
  left: -500px;
  bottom: -400px;
  height: 1200px;
  width: 1000px;
  //@keyframes learnToEarnScreenBlobLeft {
  //  from {
  //    transform: translateY(0) scale(1);
  //  }
  //  50% {
  //    transform: translateY(-300px) scale(1.5);
  //  }
  //  to {
  //    transform: translateY(0) scale(1);
  //  }
  //}
  animation: 18s learnToEarnScreenBlobLeft  infinite ease-in-out;
}
.learnToEarnScreenBlobLeftImg {
  width: 100%;
}

.learnToEarnScreenBlobRight {
  position: absolute;
  right: -500px;
  top: -400px;
  height: 1200px;
  width: 1000px;
  //@keyframes learnToEarnScreenBlobRight {
  //  from {
  //    transform: translateY(0) scale(1);
  //  }
  //  50% {
  //    transform: translateY(300px) scale(1.5);
  //  }
  //  to {
  //    transform: translateY(0) scale(1);
  //  }
  //}
  animation: 18s learnToEarnScreenBlobRight infinite ease-in-out;
}
.learnToEarnScreenBlobRightImg {
  width: 100%;
}

.totalBeginnerBadgeContainer {
  display: flex;
  justify-content: center;
}

.totalBeginnerBadgeWrapper {
  width: 100%;
  max-width: 1450px;
  position: relative;
  z-index: 3;
}

.whyToTrainScreen {
  margin-top: 240px;
}

.ecosystemScreen {
  margin-top: 103px;
  height: 100vh;
}

.faq {
  display: flex;
  justify-content: center;
  padding: 240px 0 140px 0;
  & > * {
    width: 100%;
    max-width: 1240px;
  }
}

.footer {}
</style>
