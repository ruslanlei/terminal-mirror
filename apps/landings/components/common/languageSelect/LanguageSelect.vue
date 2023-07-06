<template>
  <UiDropdown
    v-model:is-visible="isDropdownVisible"
    :class="$style.languageSelect"
    :placement="['bottom', 'left']"
    :drop-animation-initial-position-shift="26"
  >
    <template #trigger>
      <button
        :class="$style.selectedLanguage"
        type="button"
      >
        {{ activeLocale.name }}
        <UiIcon
          :class="$style.icon"
          :size="24"
          icon="arrowDown"
        />
      </button>
    </template>
    <template #dropdown>
      <div :class="$style.dropdown">
        <button
          v-for="localeOption in selectLocales"
          :key="localeOption.code"
          :class="$style.dropdownOption"
          @click="setLocale(localeOption.code)"
        >
          {{ localeOption.name }}
        </button>
      </div>
    </template>
  </UiDropdown>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { UiIcon } from '@terminal/uikit/components/icon';
import { UiDropdown } from '@terminal/uikit/components/dropdown';
import { filter } from '@terminal/common/utils/array';
import { LanguageSelectProps } from './index';
import { useLocale } from '~/hooks/useLocale';

const props = withDefaults(
  defineProps<LanguageSelectProps>(),
  {
    excludeLocale: () => [],
  },
);

const { locale, locales, setLocale } = useLocale();

const activeLocale = computed(() => locales.value.find(
  (localeOption: string) => localeOption.code === locale.value,
));

const selectLocales = computed(() => filter(
  (localeOption: string) => localeOption.code !== locale.value,
  locales.value,
));

const isDropdownVisible = ref(false);
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

.languageSelect {
  position: relative;
  cursor: pointer;
}

.selectedLanguage {
  display: flex;
  align-items: center;
  color: rgba(var(--color-accent-2));
  font-weight: 600;
  @include text;
  cursor: pointer;
  .icon {
    margin-left: 5px;
  }
}

.dropdown {
}

.dropdownOption {
  color: rgba(var(--color-accent-2));
  font-weight: 600;
  cursor: pointer;
  @include text;
}

.languageList {
  display: flex;
  gap: 10px;
}

.listOption {
  @include textSm;
  color: rgba(var(--color-accent-2));
  font-weight: 600;
  transition: 200ms color;
  cursor: pointer;
  &.active {
    color: rgba(var(--color-accent-1));
  }
}
</style>
