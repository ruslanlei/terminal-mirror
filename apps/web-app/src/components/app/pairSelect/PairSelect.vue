<template>
  <PairsSelectContainer :is-busy="isTogglingFavorite">
    <template #search>
      <Input
        v-model="query"
        size="md"
        state="secondary2Color"
        :placeholder="t('common.search')"
      >
        <template #prepend>
          <UiIcon
            :size="24"
            icon="search"
          />
        </template>
      </Input>
    </template>
    <template #list="{ tableClass }">
      <PairsTable
        :class="tableClass"
        :pairs="pairs"
        :state="['scrollable', 'tinySize', 'secondaryColor3']"
        @select-pair="setPair"
        @toggle-favorite="onToggleFavorite"
      />
    </template>
  </PairsSelectContainer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiIcon } from '@terminal/uikit/components/icon';
import PairsSelectContainer from '@/containers/pairsSelectContainer/PairsSelectContainer.vue';
import Input from '@/components/core/input/Input.vue';
import PairsTable from '@/components/app/pairsTable/PairsTable.vue';
import { usePairSelect } from '@/hooks/usePairSelect';

const { t } = useI18n();

const {
  query,
  pairs,
  setPair,
  isTogglingFavorite,
  onToggleFavorite,
} = usePairSelect();
</script>
