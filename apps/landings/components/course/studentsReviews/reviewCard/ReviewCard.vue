<template>
  <div :class="$style.reviewCard">
    <UiCard :class="$style.content">
      <UiPicture
        :srcset="data.picture"
        :class="$style.picture"
      />
      <UiTypography
        :class="$style.text"
        :state="['accent2']"
        size="text"
      >
        {{ data.text }}
      </UiTypography>
    </UiCard>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiCard } from '@terminal/uikit/components/card';
import { UiPicture } from '@terminal/uikit/components/picture';
import { ReviewCardProps } from './index';

const { t } = useI18n();

const props = defineProps<ReviewCardProps>();

</script>

<style lang="scss" module>
.reviewCard {
}

.content {
  padding: 40px;
}

.picture {
  width: 100%;
}

.text {
  margin-top: 40px;
}
</style>
