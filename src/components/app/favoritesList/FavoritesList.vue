<template>
  <Card :class="$style.favoritesList">
    <header :class="$style.header">
      <Typography
        size="title5"
        :state="['accent1', 'alignCenter']"
      >
        {{ t('favorites.label') }}
      </Typography>
    </header>
    <Selector
      v-model="activeOption"
      :thickening="0"
      :state="['vertical', 'blueGlassVerticalRight', 'specialFavoritesSize']"
      :options="options"
    >
      <template #option="{ option }">
        <CoinLogo :coin="option.pairData.base" />
      </template>
    </Selector>
    <Button
      :state="null"
      :size="null"
      :class="$style.closeButton"
      @click="close"
    >
      <Typography
        size="title5"
        :state="['accent2', 'alignCenter']"
      >
        {{ t('common.hide') }}
      </Typography>
    </Button>
  </Card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Card from '@/components/core/card/Card.vue';
import Selector from '@/components/core/selector/Selector.vue';
import { useMarketStore } from '@/stores/market';
import { PairData } from '@/api/types/pair';
import CoinLogo from '@/components/core/coinLogo/CoinLogo.vue';
import Typography from '@/components/app/typography/Typography.vue';
import { FavoritesListEmits } from '@/components/app/favoritesList/index';
import Button from "@/components/core/button/Button.vue";

const emit = defineEmits<FavoritesListEmits>();

const close = () => {
  emit('hide');
};

const { t } = useI18n();

const marketStore = useMarketStore();

const activeOption = ref(1);

const options = computed(() => marketStore.pairs.map((
  pairData: PairData,
) => ({
  label: '',
  value: pairData.id,
  pairData,
})));
</script>

<style lang="scss" module>
.favoritesList {}

.header, .closeButton {
  width: 100%;
  position: sticky;
  background-color: rgb(var(--color-background-2));
  z-index: 10;
  padding: 10px 0;
}

.header {
  top: 0;
  border-bottom: 1px solid rgb(var(--color-accent-3));
}

.closeButton {
  bottom: 0;
  border-top: 1px solid rgb(var(--color-accent-3));
  cursor: pointer;
}
</style>
