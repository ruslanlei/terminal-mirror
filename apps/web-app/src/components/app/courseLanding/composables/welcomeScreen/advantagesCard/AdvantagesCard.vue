<template>
  <div :class="$style.advantagesCard">
    <div :class="$style.advantageCardImgWrapper">
      <div
        :class="[
          $style.circle,
          $style[card.pictureBackground]
        ]"
      />
      <Picture
        :srcset="card.picture"
        :class="$style.advantageCardImg"
      />
    </div>
    <Typography
      :state="['accent1', 'semiBold']"
      size="text"
      :class="$style.cardText"
    >
      {{ card.text }}
    </Typography>
  </div>
</template>

<script setup lang="ts">
import Picture from '@/components/core/picture/Picture.vue';
import Typography from '@/components/app/typography/Typography.vue';
import { useI18n } from 'vue-i18n';
import { AdvantagesCardProps } from './index';

const props = defineProps<AdvantagesCardProps>();

const { t } = useI18n();
</script>

<style lang="scss" module>
.advantagesCard {
  display: flex;
  align-items: center;
  gap: 5px;
}

.advantageCardImgWrapper {
  width: 105px;
  height: 105px;
  position: relative;
}

.cardText {
  max-width: 190px;
}

.advantageCardImg {
  position: absolute;
  top: 5px;
  z-index: 3;
  width: 100px;
  height: 100px;
}

.circle {
  position: absolute;
  width: 66px;
  height: 66px;
  border-radius: 50%;
}

.yellow {
  background-color: rgb(var(--color-danger-3));
}

.green {
  background-color: rgb(var(--color-success-2));
}

.purple {
  background-color: rgb(var(--color-purple));
}

.blue {
  background-color: rgb(var(--color-purple-2));
}
</style>
