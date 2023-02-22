<template>
  <header :class="$style.header">
    <Logo
      shape="square"
      size="lg"
      state="defaultState2"
    />
    <div :class="$style.chapters">
      <Button
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
      >
        {{ chapter.label }}
      </Button>
    </div>
    <div :class="$style.rightColumn">
      <Button
        :state="['gradientColor']"
        size="lg"
        :is-wide="false"
        :class="$style.signUpButton"
      >
        {{ t('auth.signUp.label') }}
      </Button>
      <LanguageSelect />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Logo from '@/components/core/logo/Logo.vue';
import Button from '@/components/core/button/Button.vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import LanguageSelect from '@/components/app/languageSelect/LanguageSelect.vue';
import { TerminalLandingHeaderEmits, TerminalLandingHeaderProps } from './index';

const { t } = useI18n();

const props = defineProps<TerminalLandingHeaderProps>();

const emit = defineEmits<TerminalLandingHeaderEmits>();

const localActiveChapter = useLocalValue(props, emit, 'activeChapter');
</script>

<style lang="scss" module>
.header {
  padding: 38px 100px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
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
