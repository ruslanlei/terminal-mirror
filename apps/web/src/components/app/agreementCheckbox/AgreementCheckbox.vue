<template>
  <UiCheckbox
    v-model="localValue"
    :class="$style.agreementCheckbox"
    label-alignment="top"
  >
    <template #label>
      <i18n-t
        keypath="auth.agreement.label"
        tag="span"
        :class="$style.label"
      >
        <template #conditions>
          <Link
            :to="{ name: 'terms-and-conditions' }"
            :label="t('auth.agreement.conditions')"
            state="primary"
            :tab-index="-1"
            is-inline
          />
        </template>
        <template #privacy>
          <Link
            :to="{ name: 'privacy-policy' }"
            :label="t('auth.agreement.privacy')"
            state="primary"
            :tab-index="-1"
            is-inline
          />
        </template>
      </i18n-t>
    </template>
  </UiCheckbox>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiCheckbox } from '@terminal/uikit/components/checkbox';
import { useLocalValue } from '@terminal/uikit/hooks/useLocalValue';
import Link from '@/components/app/link/Link.vue';
import { AgreementCheckboxEmits, AgreementCheckboxProps } from '@/components/app/agreementCheckbox/index';

const { t } = useI18n();

const props = defineProps<AgreementCheckboxProps>();

const emit = defineEmits<AgreementCheckboxEmits>();

const localValue = useLocalValue(props, emit, 'modelValue');
</script>

<style lang="scss" module>
.agreementCheckbox {}
</style>
