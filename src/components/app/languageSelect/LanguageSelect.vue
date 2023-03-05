<template>
  <template v-if="state === 'select'">
    <Dropdown
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
          {{ activeLocale.label }}
          <Icon
            :class="$style.icon"
            :size="24"
            icon="arrowDown"
          />
        </button>
      </template>
      <template #dropdown>
        <div :class="$style.dropdown">
          <button
            v-for="localeOption in filteredLocales"
            :key="localeOption.value"
            :class="$style.dropdownOption"
            @click="setLocale(localeOption.value)"
          >
            {{ localeOption.label }}
          </button>
        </div>
      </template>
    </Dropdown>
  </template>
  <template v-else-if="state === 'default'">
    <div :class="$style.languageList">
      <button
        v-for="localeOption in locales"
        :key="localeOption.value"
        :class="[
          $style.listOption,
          (localeOption.value === locale) && $style.active
        ]"
        @click="setLocale(localeOption.value)"
      >
        {{ localeOption.label }}
      </button>
    </div>
  </template>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
import { LanguageSelectProps } from '@/components/app/languageSelect/index';
import { LocaleOptions, useI18nStore } from '@/stores/i18n';
import { AppLocale } from '@/i18n';
import Icon from '@/components/core/icon/Icon.vue';
import Dropdown from '@/components/core/dropdown/Dropdown.vue';

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
