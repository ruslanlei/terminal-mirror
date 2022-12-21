<template>
  <transition
    name="certificateImageTransition"
    mode="out-in"
  >
    <div :key="state">
      <Picture
        :src="computedSrc"
        :srcset="computedSrcset"
        :class="$style.certificatePicture"
      />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Picture from '@/components/core/picture/Picture.vue';
import { CertificateImageProps } from './index';

import PurpleCertificatePng from '../assets/purpleCertificate.png';
import PurpleCertificateWebp from '../assets/purpleCertificate.webp';
import OrangeCertificatePng from '../assets/orangeCertificate.png';
import OrangeCertificateWebp from '../assets/orangeCertificate.webp';

const props = defineProps<CertificateImageProps>();

const purpleCertificateSrcset = computed(() => `${PurpleCertificateWebp}, ${PurpleCertificatePng}`);
const orangeCertificateSrcset = computed(() => `${OrangeCertificateWebp}, ${OrangeCertificatePng}`);

const computedSrc = computed(() => ({
  purple: PurpleCertificatePng,
  orange: OrangeCertificatePng,
}[props.state]));

const computedSrcset = computed(() => ({
  purple: purpleCertificateSrcset.value,
  orange: orangeCertificateSrcset.value,
}[props.state]));
</script>

<style lang="scss" module>
.certificatePicture {
  width: 80px;
  height: 80px;
}
</style>

<style lang="scss">
.certificateImageTransition {
  &-enter-active,
  &-leave-active {
    transition: transform 250ms, opacity 250ms;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-from {
    transform: translateY(-10px);
  }
  &-leave-to {
    transform: translateY(10px);
  }
}
</style>
