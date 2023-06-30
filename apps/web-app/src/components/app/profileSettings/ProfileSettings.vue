<template>
  <UiCard :class="$style.profileSettings">
    <header :class="$style.header">
      <UiAvatar :src="DefaultAvatar" />
      <div :class="$style.name">
        {{ username }}
        <UiIcon
          :class="$style.verificationBadge"
          icon="verificationCircle"
        />
      </div>
      <LanguageSelect
        state="default"
        :class="$style.languageSelect"
      />
      <UiIcon
        :class="$style.logoutButton"
        icon="exit"
        @click="logout"
      />
    </header>
    <SubscriptionBadge
      :state="testKey ? 'paid' : 'unpaid'"
      paid-until="24.12.2023"
      v-bind="{
        ...(testKey ? {} : {
          to: { name: 'subscription' }
        })
      }"
      :class="$style.subscriptionBadge"
    />
    <div :class="$style.row">
      <div :class="$style.text">
        <i18n-t keypath="profile.email">
          <template #email>
            <span :class="$style.value">
              {{ email }}
            </span>
          </template>
        </i18n-t>
      </div>
    </div>
    <footer :class="$style.footer">
      <CurrentTheme />
      <UiButton
        :size="null"
        :state="null"
        @click="copyDiscordLink"
      >
        <UiTypography
          state="accent1"
          size="title5"
        >
          {{ t('auth.support') }}
        </UiTypography>
      </UiButton>
    </footer>
  </UiCard>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiAvatar } from '@terminal/uikit/components/avatar';
import { UiButton } from '@terminal/uikit/components/button';
import { UiCard } from '@terminal/uikit/components/card';
import { UiIcon } from '@terminal/uikit/components/icon';
import { UiTypography } from '@terminal/uikit/components/typography';

import LanguageSelect from '@/components/app/languageSelect/LanguageSelect.vue';
import SubscriptionBadge from '@/components/core/subscriptionBadge/SubscriptionBadge.vue';
import CurrentTheme from '@/components/app/currentTheme/CurrentTheme.vue';
import { useProfileSettings } from '@/hooks/useProfileSettings';
import { useDiscordLink } from '@/hooks/useDiscordLink';
import DefaultAvatar from '@/assets/images/defaultAvatar.svg?url';

const { t } = useI18n();

const {
  logout,
  email,
  username,
  testKey,
} = useProfileSettings();

const {
  copyDiscordLink,
} = useDiscordLink(
  t('discordLink.copiedForSupport'),
);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.profileSettings {
  padding: 20px;
  width: 432px;
  overflow: hidden;
}

.header {
  display: flex;
  align-items: center;
}

.name {
  display: flex;
  align-items: center;
  margin-left: 20px;
  @include title2;
  font-weight: 600;
  color: rgb(var(--color-accent-1));
}

.verificationBadge {
  margin-left: 10px;
}

.languageSelect {
  margin-left: auto;
}

.subscriptionBadge {
  margin-top: 20px;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .text {
    @include title4;
    color: rgb(var(--color-accent-2));
    font-weight: 500;
  }
  .value {
    color: rgb(var(--color-accent-1));
    font-weight: 600;
  }
}

.footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.logoutButton {
  cursor: pointer;
  color: rgb(var(--color-accent-2));
  transition: color 150ms;
  margin-left: 20px;
  &:hover {
    color: rgb(var(--color-accent-1));
  }
}

.support {
}
</style>
