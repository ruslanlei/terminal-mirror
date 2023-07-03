<template>
  <UiDropdown
    placement="top"
    show-by="hover"
    :distance="10"
  >
    <template #trigger>
      <button
        :class="$style.trigger"
        @click="copyDiscordLink"
      >
        <DiscordLogo />
        <UiTypography
          :state="['lightBlack', 'semiBold']"
          size="textLg"
          :class="$style.discordName"
        >
          {{ discordUsername }}
        </UiTypography>
      </button>
    </template>
    <template #dropdown>
      <UiTooltip>
        <UiTypography :state="['accent1']">
          {{ t('discordLink.tip') }}
        </UiTypography>
      </UiTooltip>
    </template>
  </UiDropdown>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiTooltip } from '@terminal/uikit/components/tooltip';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiDropdown } from '@terminal/uikit/components/dropdown';
// import { useToastStore } from '@/stores/toasts'; // TODO:
import { useDiscordLink } from '~/hooks/useDiscordLink';
import DiscordLogo from './assets/discordLogo.svg';

// const toastStore = useToastStore();

const { t } = useI18n();

const {
  discordUsername,
  copyDiscordLink,
} = useDiscordLink(
  t('discordLink.copied'),
);
</script>

<style lang="scss" module>
.trigger {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.discordName {
  padding: 13px 10px;
  background-color: rgb(var(--color-accent-1));
  border-radius: 10px;
  margin-top: 8px;
}
</style>
