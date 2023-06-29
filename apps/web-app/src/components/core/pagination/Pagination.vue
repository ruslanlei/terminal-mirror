<template>
  <div :class="$style.pagination">
    <UiButton
      v-if="showPreviousButton"
      :is-wide="false"
      size="sm"
      :state="['interactive', 'secondary1Color', 'background3']"
      :class="$style.button"
      @click="changePage(modelValue - 1)"
    >
      <Icon
        icon="arrowLeft"
        :size="18"
      />
    </UiButton>
    <UiButton
      v-if="pages[0] !== 1"
      size="sm"
      :is-wide="false"
      :state="[
        'interactive',
        'secondary1Color',
        localValue === 1 ? 'background3' : 'background2'
      ]"
      :class="$style.button"
      @click="changePage(1)"
    >
      1
    </UiButton>
    <UiButton
      v-if="pages[0] > 2"
      size="sm"
      :is-wide="false"
      :state="[
        'interactive',
        'secondary1Color',
        'background2'
      ]"
      :class="$style.button"
      disabled
    >
      {{ gapSymbol }}
    </UiButton>
    <UiButton
      v-for="pageNumber in pages"
      :key="pageNumber"
      size="sm"
      :is-wide="false"
      :state="[
        'interactive',
        'secondary1Color',
        pageNumber === modelValue ? 'background3' : 'background2'
      ]"
      :class="$style.button"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </UiButton>
    <UiButton
      v-if="pages[pages.length - 1] < props.totalPages - 1"
      size="sm"
      :is-wide="false"
      :state="[
        'interactive',
        'secondary1Color',
        'background2'
      ]"
      :class="$style.button"
      disabled
    >
      {{ gapSymbol }}
    </UiButton>
    <UiButton
      v-if="pages[pages.length - 1] !== props.totalPages"
      size="sm"
      :is-wide="false"
      :state="[
        'interactive',
        'secondary1Color',
        props.totalPages === modelValue ? 'background3' : 'background2'
      ]"
      :class="$style.button"
      @click="changePage(props.totalPages)"
    >
      {{ props.totalPages }}
    </UiButton>
    <UiButton
      v-if="showNextButton"
      :is-wide="false"
      size="sm"
      :state="['interactive', 'secondary1Color', 'background3']"
      :class="$style.button"
      @click="changePage(modelValue + 1)"
    >
      <Icon
        icon="arrowRight"
        :size="18"
      />
    </UiButton>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { UiButton } from '@terminal/uikit/components/button';
import { useLocalValue } from '@/hooks/useLocalValue';
import Icon from '@/components/core/icon/Icon.vue';
import { PaginationEmits, PaginationProps } from './index';

const props = withDefaults(
  defineProps<PaginationProps>(),
  {
    visiblePageCount: 5,
  },
);

const emit = defineEmits<PaginationEmits>();

const localValue = useLocalValue<number>(props, emit, 'modelValue');

const gapSymbol = '...';

const getPages = (
  visiblePageCount: number,
  modelValue: number,
  totalPages: number,
) => {
  const half = Math.floor(visiblePageCount / 2);
  let start = Math.max(modelValue - half, 1);
  let end = start + visiblePageCount - 1;
  if (end > totalPages) {
    end = totalPages;
    start = Math.max(end - visiblePageCount + 1, 1);
  } else if (end < totalPages - 2) {
    end = Math.min(totalPages, end + 1);
  }
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
};

const pages = computed(() => getPages(props.visiblePageCount, props.modelValue, props.totalPages));

const showPreviousButton = computed(() => props.modelValue > 1);

const showNextButton = computed(() => props.modelValue < props.totalPages);

const changePage = (pageNumber: number) => {
  if (pageNumber >= 1 && pageNumber <= props.totalPages) {
    localValue.value = pageNumber;
  }
};
</script>

<style lang="scss" module>
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.button {
  padding: 10px;
  min-width: 40px;
}
</style>
