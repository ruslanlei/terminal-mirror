<template>
  <div
    :class="[
      $style.root,
      $style[toast.type],
    ]"
  >
    <div :class="$style.content">
      <div :class="$style.label">
        {{ toast.label }}
      </div>
      <div :class="$style.text">
        {{ toast.text }}
      </div>
    </div>
    <button
      :class="$style.close"
      @click="closeModal"
    >
      close
    </button>
  </div>
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue';
import { Toast } from '@/types/toast';

const props = defineProps({
  toast: {
    type: Object as PropType<Toast>,
    required: true,
  },
});
const emit = defineEmits(['close']);

const { toast } = toRefs(props);
const duration = toast?.value.duration;

const closeModal = () => {
  emit('close');
};

if (duration) {
  setTimeout(() => {
    closeModal();
  }, duration);
}
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {}

.content {}

.label {}

.text {}

.close {}
</style>
