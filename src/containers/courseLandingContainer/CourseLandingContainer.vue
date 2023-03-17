<template>
  <div :class="$style.courseLandingContainer">
    <div :class="$style.header">
      <slot name="header" />
    </div>
    <div :class="$style.welcomeScreen">
      <slot name="welcomeScreen" />
    </div>
    <div :class="$style.courseExplanationCard">
      <slot name="courseExplanationCard" />
    </div>
    <div :class="$style.creatorsTeamInfo">
      <slot name="creatorsTeamInfo" />
    </div>
    <div :class="$style.forWhomTheCourse">
      <slot name="forWhomTheCourse" />
    </div>
    <div :class="$style.practiceBadge">
      <div :class="$style.practiceBadgeWrapper">
        <slot name="practiceBadge" />
      </div>
    </div>
    <div :class="$style.courseAdvantagesCard">
      <slot name="courseAdvantagesCard" />
    </div>
    <div :class="$style.studentsReviews">
      <slot name="studentsReviews" />
    </div>
    <div :class="$style.courseProgram">
      <slot name="courseProgram" />
    </div>
    <div :class="$style.startDateTape">
      <slot name="startDateTape" />
    </div>
    <div :class="$style.studyPlans">
      <slot name="studyPlans" />
    </div>
    <div :class="$style.ecoSystemBlock">
      <slot name="ecoSystemBlock" />
    </div>
    <div :class="$style.faq">
      <slot name="faq" />
    </div>
    <div :class="$style.landingFooter">
      <slot name="landingFooter" />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" module>
.courseLandingContainer {
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
.practiceBadge {
  display: flex;
  justify-content: center;
}
.practiceBadgeWrapper {
  width: 100%;
  max-width: 1450px;
  position: relative;
  z-index: 3;
}

.startDateTape {
  transform: rotate(-0.71deg) translateY(-50%);
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

</style>
