<template>
  <PairsSelectContainer :class="$style.pairSelect">
    <template #search>
      <Input
        v-model="query"
        size="md"
        state="secondary2"
        :placeholder="t('common.search')"
      >
        <template #prepend>
          <Icon
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
        :state="['scrollable', 'tinySize']"
        @select-pair="setPair"
      />
    </template>
  </PairsSelectContainer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import PairsSelectContainer from '@/containers/pairsSelectContainer/PairsSelectContainer.vue';
import Input from '@/components/core/input/Input.vue';
import Icon from '@/components/core/icon/Icon.vue';
import PairsTable from '@/components/app/pairsTable/PairsTable.vue';
import { usePairSelect } from '@/hooks/usePairSelect';

const { t } = useI18n();

const {
  query,
  pairs,
  getPairs,
  setPair,
} = usePairSelect();

getPairs();
</script>

<style lang="scss" module>
.pairSelect {}
</style>
