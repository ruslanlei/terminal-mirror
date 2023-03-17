<template>
  <div :class="$style.courseProgram">
    <div :class="$style.picture">
      <Picture
        is-fill
        :srcset="data.imageSrcSet"
      />
    </div>
    <Card
      state="background3"
      :class="$style.content"
    >
      <div :class="$style.topBlock">
        <Typography
          :state="['accent1', 'semiBold']"
          size="textLg"
          :class="$style.moduleBadge"
        >
          {{ data.moduleIndex }}
        </Typography>
        <Typography
          :state="['accent1', 'bold']"
          size="massive2sm"
          :class="$style.heading"
        >
          {{ data.heading }}
        </Typography>
        <Typography
          :state="['accent1', 'medium']"
          size="textLg"
          :class="$style.topText"
        >
          {{ data.description }}
        </Typography>
      </div>
      <div :class="$style.bottomBlock">
        <Typography
          size="text"
          :state="['accent1', 'semiBold']"
          :class="$style.subheading"
        >
          <i18n-t
            tag="span"
            :keypath="data.contentsHeading.keyPath"
          >
            <template #period>
              <Typography
                :state="['blueGradient', 'bold']"
                size="h3"
                :class="$style.subheadingPt2"
                is-inline
              >
                {{ data.contentsHeading.period }}
              </Typography>
            </template>
          </i18n-t>
        </Typography>
        <Typography
          size="text"
          state="accent2"
          :class="$style.bottomText"
        >
          {{ data.contents }}
        </Typography>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import Card from '@/components/core/card/Card.vue';
import { CourseProgramCard } from '@/components/app/courseLanding/composables/courseProgram/courseProgramCard/index';
import Picture from '@/components/core/picture/Picture.vue';

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
