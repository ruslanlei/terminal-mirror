<template>
  <CourseLandingContainer :class="$style.courseLandingLayout">
    <template #header>
      <CourseLandingHeader
        v-model:active-chapter="activeSection"
        :chapters="chapters"
        :state="computedHeaderState"
      />
    </template>
    <template #welcomeScreen>
      <WelcomeScreen
        id="about"
        @click-buy="scrollToTarifs"
        @click-course-program="onClickCourseProgram"
      />
    </template>
    <template #courseExplanationCard>
      <CourseExplanation @click-sign-up="scrollToTarifs" />
    </template>
    <template #creatorsTeamInfo>
      <CreatorsTeamInfo id="whoWeAre" />
    </template>
    <template #forWhomTheCourse>
      <ForWhomTheCourse id="forWhom" />
    </template>
    <template #practiceBadge>
      <PracticeBadge />
    </template>
    <template #courseAdvantagesCard>
      <CourseAdvantages
        id="benefits"
        @click-sign-up="scrollToTarifs"
      />
    </template>
    <template #studentsReviews>
      <StudentsReviews id="reviews" />
    </template>
    <template #courseProgram>
      <CourseProgram id="courseProgram" />
    </template>
    <template #startDateTape>
      <!--        <StartDateTape />-->
    </template>
    <template #studyPlans>
      <StudyPlans id="tariffs" />
    </template>
    <template #ecoSystemBlock>
      <EcosystemCap state="blue" />
    </template>
    <template #faq>
      <Faq id="questions" />
    </template>
    <template #landingFooter>
      <LandingFooter @click-buy="scrollToTarifs" />
    </template>
  </CourseLandingContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useScroll } from '@vueuse/core';
import CourseLandingContainer from '~/containers/courseLandingContainer/CourseLandingContainer.vue';
import CourseLandingHeader
  from '~/components/course/courseLandingHeader/CourseLandingHeader.vue';
import WelcomeScreen from '~/components/course/welcomeScreen/WelcomeScreen.vue';
import CourseExplanation
  from '~/components/course/courseExplanation/CourseExplanation.vue';
import CreatorsTeamInfo from '~/components/course/creatorsTeamInfo/CreatorsTeamInfo.vue';
import ForWhomTheCourse from '~/components/course/forWhomTheCourse/ForWhomTheCourse.vue';
import PracticeBadge from '~/components/course/practiceBadge/PracticeBadge.vue';
import CourseAdvantages
  from '~/components/course/courseAdvantages/CourseAdvantages.vue';
import StudentsReviews from '~/components/course/studentsReviews/StudentsReviews.vue';
import CourseProgram from '~/components/course/courseProgram/CourseProgram.vue';
import StudyPlans from '~/components/course/studyPlans/StudyPlans.vue';
import EcosystemCap from '~/components/common/ecosystemCap/EcosystemCap.vue';
import Faq from '~/components/course/faq/Faq.vue';
import LandingFooter from '~/components/course/landingFooter/LandingFooter.vue';
/*
import StartDateTape
from '@/components/app/courseLanding/composables
/startDateTape/StartDateTape.vue';
*/
import { useLandingAnchor } from '~/hooks/useLandingAnchor';
import { CourseLandingChapter } from '~/types/course';

const { t } = useI18n();

const chapters = computed<CourseLandingChapter[]>(() => [
  {
    label: t('courseLanding.chapter.about'),
    slug: 'about',
  },
  {
    label: t('courseLanding.chapter.whoWeAre'),
    slug: 'whoWeAre',
  },
  {
    label: t('courseLanding.chapter.forWhom'),
    slug: 'forWhom',
  },
  {
    label: t('courseLanding.chapter.benefits'),
    slug: 'benefits',
  },
  {
    label: t('courseLanding.chapter.reviews'),
    slug: 'reviews',
  },
  {
    label: t('courseLanding.chapter.courseProgram'),
    slug: 'courseProgram',
  },
  {
    label: t('courseLanding.chapter.tariffs'),
    slug: 'tariffs',
  },
  {
    label: t('courseLanding.chapter.questions'),
    slug: 'questions',
  },
]);

const {
  y,
} = useScroll(process.client ? window : undefined);

const computedHeaderState = computed(() => (y.value > 100 ? 'filled' : 'transparent'));

const {
  activeSection,
} = useLandingAnchor(
  chapters.value.map((
    { slug }: CourseLandingChapter,
  ) => slug),
);

const onClickCourseProgram = () => {
  activeSection.value = 'courseProgram';
};

const scrollToTarifs = () => {
  activeSection.value = 'tariffs';
};
</script>

<style lang="scss" module>
.courseLandingLayout {}
</style>
