<template>
  <header :class="[$style.header, $style[state]]">
    <div :class="$style.logo">
      <CourseLogo />
    </div>
    <div :class="$style.chapters">
      <Button
        v-for="chapter in chapters"
        :key="chapter.slug"
        :state="[
          'interactive',
          'nowrap',
          (localActiveChapter === chapter.slug
            ? 'textAccent1'
            : 'textAccent2')
        ]"
        :size="null"
        :is-wide="false"
        @click="setActiveChapter(chapter.slug)"
      >
        {{ chapter.label }}
      </Button>
    </div>
    <div :class="$style.rightColumn">
      <Button
        :state="['blueGradientColor']"
        size="xl"
        :is-wide="false"
        :class="$style.signUpButton"
        @click="setActiveChapter('tariffs')"
      >
        {{ t('courseLanding.buyCourse') }}
      </Button>
      <LanguageSelect />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Button from '@/components/core/button/Button.vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import LanguageSelect from '@/components/app/languageSelect/LanguageSelect.vue';
import CourseLogo from '@/components/core/courseLogo/CourseLogo.vue';
import { CourseLandingChapter } from '@/components/app/courseLanding';
import Link from '@/components/core/link/Link.vue';
import { TerminalLandingHeaderEmits, TerminalLandingHeaderProps } from './index';

const { t } = useI18n();

const props = withDefaults(
  defineProps<TerminalLandingHeaderProps>(),
  {
    state: 'filled',
  },
);

const emit = defineEmits<TerminalLandingHeaderEmits>();

const localActiveChapter = useLocalValue(props, emit, 'activeChapter');

const setActiveChapter = (
  activeChapter: CourseLandingChapter['slug'],
) => {
  localActiveChapter.value = activeChapter;
};
</script>

<style lang="scss" module>
.header {
  width: 100%;
  padding: 38px 100px;
  display: grid;
  grid-template-columns: 1fr 3fr 1.5fr;
  transition: background-color 200ms, border-color 200ms;
  border-bottom: 2px solid transparent;
}

.filled {
  background-color: rgb(var(--color-background-1));
}

.logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.chapters {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 13px 26px;
}

.rightColumn {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;
}

.signUpButton {
  padding: 16px 50px;
}
</style>
