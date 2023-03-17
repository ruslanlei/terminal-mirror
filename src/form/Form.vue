<template>
  <form
    ref="form"
    :class="$style.form"
    novalidate
    :autocomplete="autocomplete"
    @submit.prevent="handleSubmit"
  >
    <slot />
  </form>
</template>

<script setup lang="ts">
import {
  ref,
  VueElement,
} from 'vue';
import { useForm } from '@/hooks/useForm';
import {
  FormProps,
  FormEmits,
  touchTrigger,
  DefaultFormKey,
} from './index';

const form = ref<VueElement | null>(null);

const props = withDefaults(
  defineProps<FormProps>(),
  {
    permanent: true,
    touchBy: 'blur' as touchTrigger.BLUR,
    submitOnEnter: false,
    formKey: 'default' as DefaultFormKey,
    externalErrors: () => [],
  },
);

const emit = defineEmits<FormEmits>();

const {
  handleSubmit,
  reset,
  validate,
} = useForm(props, emit, form);

defineExpose({
  reset,
  handleSubmit,
  validate,
});
</script>

<style lang="scss" module>
.form {}
</style>
