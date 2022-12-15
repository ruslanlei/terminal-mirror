<template>
  <template v-if="state === 'select'">
    <div
      v-click-outside="closeDropdown"
      :class="$style.languageSelect"
    >
      <button
        :class="$style.selectedLanguage"
        @click="toggleDropdown"
      >
        {{ activeLocale.label }}
        <Icon
          :class="$style.icon"
          :size="24"
          icon="arrowDown"
        />
      </button>
      <div
        v-if="isDropdownVisible"
        :class="$style.dropdown"
      >
        <button
          v-for="localeOption in filteredLocales"
          :key="localeOption.value"
          :class="$style.dropdownOption"
          @click="setLocale(localeOption.value)"
        >
          {{ localeOption.label }}
        </button>
      </div>
    </div>
  </template>
  <template v-else-if="state === 'default'">
    default
  </template>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
import { LanguageSelectProps } from '@/components/app/languageSelect/index';
import { LocaleOptions, useI18nStore } from '@/stores/i18n';
import { AppLocale } from '@/i18n';
import Icon from '@/components/core/icon/Icon.vue';

withDefaults(
  defineProps<LanguageSelectProps>(),
  {
    state: 'select',
  },
);

const i18nStore = useI18nStore();
const {
  locale,
  locales,
} = toRefs(i18nStore);

const activeLocale = computed(() => locales.value.find(
  (localeOption: LocaleOptions) => localeOption.value === locale.value,
));
const filteredLocales = computed(() => locales.value.filter(
  (localeOption: LocaleOptions) => localeOption.value !== locale.value,
));

const isDropdownVisible = ref(false);
const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};
const closeDropdown = () => {
  isDropdownVisible.value = false;
};

const setLocale = (newLocale: AppLocale) => {
  locale.value = newLocale;
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

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
  .icon {
    margin-left: 5px;
  }
}

.dropdown {
  position: absolute;
}

.dropdownOption {
  color: rgba(var(--color-accent-2));
  font-weight: 600;
  @include text;
}
</style>
