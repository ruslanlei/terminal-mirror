<template>
  <div :class="$style.reviewCard">
    <Card :class="$style.content">
      <Picture
        :srcset="data.picture"
        :class="$style.picture"
      />
      <Typography
        :class="$style.text"
        :state="['accent2']"
        size="text"
      >
        {{ data.text }}
      </Typography>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import Card from '@/components/core/card/Card.vue';
import Picture from '@/components/core/picture/Picture.vue';
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
