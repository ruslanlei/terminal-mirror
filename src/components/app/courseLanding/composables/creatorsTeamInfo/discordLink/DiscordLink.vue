<template>
  <Dropdown
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
        <Typography
          :state="['lightBlack', 'semiBold']"
          size="textLg"
          :class="$style.discordName"
        >
          {{ discordUsername }}
        </Typography>
      </button>
    </template>
    <template #dropdown>
      <Tooltip>
        <Typography :state="['accent1']">
          {{ t('discordLink.tip') }}
        </Typography>
      </Tooltip>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import Dropdown from '@/components/core/dropdown/Dropdown.vue';
import Tooltip from '@/components/core/tooltip/Tooltip.vue';
import { useToastStore } from '@/stores/toasts';
import { useDiscordLink } from '@/hooks/useDiscordLink';
import DiscordLogo from './assets/discordLogo.svg';

const toastStore = useToastStore();

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
