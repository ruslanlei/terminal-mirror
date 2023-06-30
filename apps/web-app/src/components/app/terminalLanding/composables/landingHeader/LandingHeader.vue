<template>
  <header :class="[$style.header, $style[state]]">
    <UiLogo
      shape="square"
      size="lg"
      state="defaultState2"
    />
    <div :class="$style.chapters">
      <UiButton
        v-for="chapter in chapters"
        :key="chapter.slug"
        :state="[
          'interactive',
          (localActiveChapter === chapter.slug
            ? 'textAccent1'
            : 'textAccent2')
        ]"
        :size="null"
        :is-wide="false"
        @click="setActiveChapter(chapter.slug)"
      >
        {{ chapter.label }}
      </UiButton>
    </div>
    <div :class="$style.rightColumn">
      <Link
        :size="null"
        :state="null"
        :to="{ name: 'auth-sign-in' }"
      >
        <UiButton
          :state="['gradientColor']"
          size="xl"
          :is-wide="false"
          :class="$style.signUpButton"
        >
          {{ t('auth.signUp.label') }}
        </UiButton>
      </Link>
      <LanguageSelect />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import { UiLogo } from '@terminal/uikit/components/logo';
import Link from '@/components/core/link/Link.vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import LanguageSelect from '@/components/app/languageSelect/LanguageSelect.vue';
import { TerminalLandingChapter } from '@/components/app/terminalLanding';
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
  activeChapter: TerminalLandingChapter['slug'],
) => {
  localActiveChapter.value = activeChapter;
};
</script>

<style lang="scss" module>
.header {
  padding: 38px 100px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  border-bottom: 2px solid transparent;
  transition: background-color 200ms, border-color 200ms;
}

.filled {
  background-color: rgb(var(--color-background-1));
  border-bottom: 2px solid rgba(var(--color-accent-2), 0.1);
}

.chapters {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
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
