<template>
  <div :class="$style.authLayout">
    <div :class="$style.sidebar">
      <div :class="$style.sidebarInner">
        <header :class="$style.header">
          <Link
            :class="$style.logo"
            :to="{ name: 'auth-sign-in' }"
          >
            <UiLogo
              size="md"
              state="defaultState"
            />
          </Link>
          <LanguageSelect />
        </header>
        <div :class="$style.description">
          {{ t('auth.description') }}
        </div>
        <div :class="$style.content">
          <slot />
        </div>
        <div :class="$style.demiGroupLogoContainer">
          <UiPicture
            :class="$style.demiGroupLogo"
            :src="DemiGroupLogo"
          />
        </div>
      </div>
      <footer :class="$style.footer">
        <div :class="$style.privacy">
          {{ t('auth.privacy') }}
        </div>
        <div :class="$style.support">
          <UiButton
            :size="null"
            :state="null"
            @click="copyDiscordLink"
          >
            <UiTypography
              state="accent1"
              size="title3"
            >
              {{ t('auth.support') }}
            </UiTypography>
          </UiButton>
        </div>
      </footer>
    </div>
    <AuthIllustration />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiLogo } from '@terminal/uikit/components/logo';
import { UiPicture } from '@terminal/uikit/components/picture';
import Link from '@/components/link/Link.vue';
import LanguageSelect from '@/components/languageSelect/LanguageSelect.vue';
import AuthIllustration from '@/components/authIllustration/AuthIllustration.vue';
import { useDiscordLink } from '@/hooks/useDiscordLink';
import DemiGroupLogo from './assets/demiGroup.png';

const { t } = useI18n();

const {
  copyDiscordLink,
} = useDiscordLink(
  t('discordLink.copiedForSupport'),
);
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

.authLayout {
  display: grid;
  grid-template-columns: 540px 1fr;
  position: absolute;
  inset: 0;
}

.sidebar {
  background-color: rgba(var(--color-background-3));
  padding: 84px 80px 40px 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  @include scrollbarSecondary(12px, 6px, true);
}

.sidebarInner {}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.description {
  margin-top: 25px;
  @include text;
  font-weight: 500;
  color: rgb(var(--color-accent-1));
}

.content {
  & > * {
    height: 100%;
  }
}

.demiGroupLogoContainer {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.demiGroupLogo {
  max-width: 140px;
}

.footer {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.privacy {
  @include textSm;
  color: rgb(var(--color-accent-2));
}

.support {}
</style>
