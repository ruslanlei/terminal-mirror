<template>
  <PairsSelectContainer :class="$style.pairSelect">
    <template #search>
      <Input
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
    <template #list>
      <PairsTable :pairs="pairs" />
    </template>
  </PairsSelectContainer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useMarketStore } from '@/stores/market';
import PairsSelectContainer from '@/containers/pairsSelectContainer/PairsSelectContainer.vue';
import Input from '@/components/core/input/Input.vue';
import Icon from '@/components/core/icon/Icon.vue';
import PairsTable from '@/components/app/pairsTable/PairsTable.vue';
import { storeToRefs } from 'pinia';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  pairs,
} = storeToRefs(marketStore);

marketStore.getPairs();
</script>

<style lang="scss" module>
.pairSelect {}
</style>
