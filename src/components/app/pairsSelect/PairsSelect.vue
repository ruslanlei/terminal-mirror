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
      list
    </template>
  </PairsSelectContainer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useMarketStore } from '@/stores/market';
import PairsSelectContainer from '@/containers/pairsSelectContainer/PairsSelectContainer.vue';
import Input from '@/components/core/input/Input.vue';
import Icon from '@/components/core/icon/Icon.vue';

const { t } = useI18n();

const marketStore = useMarketStore();
marketStore.getPairs();
</script>

<style lang="scss" module>
.pairSelect {}
</style>
