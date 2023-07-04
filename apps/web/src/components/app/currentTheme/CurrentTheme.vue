<template>
  <i18n-t
    tag="div"
    :class="$style.theme"
    keypath="profile.theme"
  >
    <template #name>
      <span :class="$style.value">
        {{ themeName }}
      </span>
    </template>
  </i18n-t>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { theme } from '@/enums/theme';
import { useCommonStore } from '@/stores/common';

const commonStore = useCommonStore();

const { t } = useI18n();

const themeName = computed(() => ({
  [theme.PURPLE_CAT]: t('themes.purpleCat'),
}[commonStore.theme]));
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.theme {
  @include title4;
  color: rgb(var(--color-accent-2));
  font-weight: 500;
  .value {
    background: var(--color-main-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }
}
</style>
