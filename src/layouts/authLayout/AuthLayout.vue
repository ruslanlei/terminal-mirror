<template>
  <div :class="$style.authLayout">
    <div :class="$style.sidebar">
      <div :class="$style.sidebarInner">
        <header :class="$style.header">
          <Link
            :class="$style.logo"
            :to="{ name: 'auth-sign-in' }"
          >
            <Logo
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
          <Picture
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
          <Button
            :size="null"
            :state="null"
            @click="copyDiscordLink"
          >
            <Typography
              state="accent1"
              size="title3"
            >
              {{ t('auth.support') }}
            </Typography>
          </Button>
        </div>
      </footer>
    </div>
    <AuthIllustration />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Logo from '@/components/core/logo/Logo.vue';
import Link from '@/components/core/link/Link.vue';
import LanguageSelect from '@/components/app/languageSelect/LanguageSelect.vue';
import AuthIllustration from '@/components/app/authIllustration/AuthIllustration.vue';
import Picture from '@/components/core/picture/Picture.vue';
import Button from '@/components/core/button/Button.vue';
import Typography from '@/components/app/typography/Typography.vue';
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
@import "src/assets/styles/utils";

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
