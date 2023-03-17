<template>
  <div :class="$style.reviewCard">
    <Card :class="$style.content">
      <div :class="$style.reviewPicture">
        <Picture
          :srcset="data.picture"
          :class="$style.picture"
        />
      </div>
      <div :class="$style.userInformation">
        <div :class="$style.personalData">
          <Typography
            :state="['accent1', 'semiBold']"
            size="h2"
          >
            {{ data.username }}
          </Typography>
          <Typography
            :state="['accent2', 'medium']"
            size="text"
          >
            {{ data.userPosition }}
          </Typography>
        </div>
        <div :class="$style.date">
          <Typography
            :state="['accent2', 'medium']"
            size="text"
          >
            {{ data.date }}
          </Typography>
        </div>
      </div>
      <div :class="$style.underline" />
      <div
        v-for="(chapter, index) in data.chapters"
        :key="index"
        :class="$style.point"
      >
        <div :class="$style.pointDot" />
        <Typography
          :class="$style.pointTextWrapper"
          :state="['accent2']"
          size="text"
        >
          <i18n-t
            tag="span"
            keypath="common.colon"
          >
            <template #key>
              <Typography
                is-inline
                state="accent1"
              >
                {{ chapter.label }}
              </Typography>
            </template>
            <template #value>
              {{ chapter.text }}
            </template>
          </i18n-t>
        </Typography>
      </div>
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

.reviewPicture {
  width: 100%;
}

.picture {
  width: 100%;
}

.userInformation {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.personalData {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.underline {
  width: 100%;
  height: 1px;
  background: rgb(var(--color-accent-3));
  margin: 40px 0;
}

.pointDot {
  width: 6px;
  min-width: 6px;
  height: 6px;
  min-height: 6px;
  border-radius: 50%;
  background: var(--color-blue-gradient);
  margin-top: 10px;
}

.point {
  display: flex;
  &:not(:first-child) {
    margin-top: 20px;
  }
}

.pointTextWrapper {
  display: flex;
  margin-left: 10px;
  max-width: 494px;
}

.pointText {
  max-width: 400px;
}
</style>
