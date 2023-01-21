<template>
  <div :class="$style.authLayout">
    <div :class="$style.sidebar">
      <div :class="$style.sidebarInner">
        <header :class="$style.header">
          <Link
            :class="$style.logo"
            :to="{ name: 'auth-sign-in' }"
          >
            <Logo :state="['mdSize', 'defaultState']" />
          </Link>
          <LanguageSelect />
        </header>
        <div :class="$style.description">
          {{ t('auth.description') }}
        </div>
        <div :class="$style.content">
          <slot />
        </div>
      </div>
      <footer :class="$style.footer">
        <div :class="$style.privacy">
          {{ t('auth.privacy') }}
        </div>
        <div :class="$style.support">
          <Link
            :to="{ name: 'support' }"
            :label="t('auth.support')"
            size="sm"
          />
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

const { t } = useI18n();
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
  @include scrollbarSecondary(true);
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
