<template>
  <div :class="$style.courseProgram">
    <div :class="$style.picture">
      <UiPicture
        is-fill
        :srcset="data.imageSrcSet"
      />
    </div>
    <UiCard
      state="background3"
      :class="$style.content"
    >
      <div :class="$style.topBlock">
        <UiTypography
          :state="['accent1', 'semiBold']"
          size="textLg"
          :class="$style.moduleBadge"
        >
          {{ data.moduleIndex }}
        </UiTypography>
        <UiTypography
          :state="['accent1', 'bold']"
          size="massive2sm"
          :class="$style.heading"
        >
          {{ data.heading }}
        </UiTypography>
        <UiTypography
          :state="['accent1', 'medium']"
          size="textLg"
          :class="$style.topText"
        >
          {{ data.description }}
        </UiTypography>
      </div>
      <div :class="$style.bottomBlock">
        <UiTypography
          size="text"
          :state="['accent1', 'semiBold']"
          :class="$style.subheading"
        >
          <i18n-t
            tag="span"
            :keypath="data.contentsHeading.keyPath"
          >
            <template #period>
              <UiTypography
                :state="['blueGradient', 'bold']"
                size="h3"
                :class="$style.subheadingPt2"
                is-inline
              >
                {{ data.contentsHeading.period }}
              </UiTypography>
            </template>
          </i18n-t>
        </UiTypography>
        <UiTypography
          size="text"
          state="accent2"
          :class="$style.bottomText"
        >
          {{ data.contents }}
        </UiTypography>
      </div>
    </UiCard>
  </div>
</template>

<script setup lang="ts">
import { UiCard } from '@terminal/uikit/components/card';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiPicture } from '@terminal/uikit/components/picture';
import { useI18n } from '#imports';
import { CourseProgramCard } from './index';

const { t } = useI18n();

const props = defineProps<CourseProgramCard>();
</script>

<style lang="scss" module>
.courseProgram {
  max-width: 610px;
  max-height: 617px;
  position: relative;
}

.content {
  min-height: 617px;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.picture {
  position: absolute;
  top: -77px;
  right: 0;
  width: 295px;
  height: 295px;
}

.moduleBadge {
  padding: 8px 15px;
  background: var(--color-main-gradient);
  border-radius: 10px;
  width: fit-content;
  position: relative;
  z-index: 2;
}

.topBlock {
}

.heading {
  margin-top: 40px;
}

.topText {
  margin-top: 20px;
}

.subheading {
  display: flex;
  align-items: flex-end;
}

.subheadingPt2 {
  padding: 0 8px;
}

.bottomText {
  margin-top: 10px;
}
</style>
