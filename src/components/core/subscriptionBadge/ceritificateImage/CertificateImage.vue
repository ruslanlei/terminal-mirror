<template>
  <Picture
    :src="computedSrc"
    :srcset="computedSrcset"
    :class="$style.certificatePicture"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Picture from '@/components/core/picture/Picture.vue';
import { collectSrcSet } from '@/helpers/dom';
import { CertificateImageProps } from './index';

import PurpleCertificatePng from '../assets/purpleCertificate.png';
import PurpleCertificateWebp from '../assets/purpleCertificate.webp';
import OrangeCertificatePng from '../assets/orangeCertificate.png';
import OrangeCertificateWebp from '../assets/orangeCertificate.webp';

const props = defineProps<CertificateImageProps>();

const purpleCertificateSrcset = computed(() => collectSrcSet([
  PurpleCertificateWebp,
  PurpleCertificatePng,
]));
const orangeCertificateSrcset = computed(() => collectSrcSet([
  OrangeCertificateWebp,
  OrangeCertificatePng,
]));

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
