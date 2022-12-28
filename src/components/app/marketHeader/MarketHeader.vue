<template>
  <Header v-if="!isFetchingProfile">
    <template #leftColumn>
      <div :class="$style.leftColumn">
        <MarketTypeSelector />
        <Divider
          type="vertical"
          state="default"
          :class="[$style.divider, $style.dividerLeft]"
        />
<!--        <SelectedCurrencyStats :class="$style.currencyStats" />-->
      </div>
    </template>
    <template #rightColumn>
      <div :class="$style.profileBlock">
        <Balance />
        <Divider
          type="vertical"
          state="default"
          :class="$style.divider"
        />
        <ProfileDropdown />
      </div>
    </template>
  </Header>
  <Header v-else>
    <template #leftColumn>
      <div :class="$style.leftColumn">
        <Skeleton :class="$style.marketTypeSelectorSkeleton" />
        <Divider
          type="vertical"
          state="default"
          :class="[$style.divider, $style.dividerLeft]"
        />
        <div :class="$style.currencyStatsSkeleton">
          <Skeleton :class="$style.currencyLogoSkeleton" />
          <Skeleton :class="$style.selectedCurrencySkeleton" />
        </div>
      </div>
    </template>
    <template #rightColumn>
      <div :class="$style.profileBlock">
        <Skeleton :class="$style.avatarSkeleton" />
        <Skeleton :class="$style.avatarIconSkeleton" />
      </div>
    </template>
  </Header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Header from '@/components/core/header/Header.vue';
import MarketTypeSelector from '@/components/app/marketTypeSelector/MarketTypeSelector.vue';
import Divider from '@/components/core/divider/Divider.vue';
import SelectedCurrencyStats from '@/components/app/selectedCurrencyStats/SelectedCurrencyStats.vue';
import Balance from '@/components/app/balance/Balance.vue';
import ProfileDropdown from '@/components/app/profileDropdown/ProfileDropdown.vue';
import Skeleton from '@/components/core/skeleton/Skeleton.vue';
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';

const { t } = useI18n();

const profileStore = useProfileStore();
const {
  isFetchingProfile,
} = storeToRefs(profileStore);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.leftColumn {
  display: flex;
  align-items: center;
}

.divider {
  height: 25px;
}

.dividerLeft {
  margin-left: 20px;
}

.currencyStats {
  margin-left: 20px;
}

.profileBlock {
  display: flex;
  align-items: center;
  gap: 15px;
}

// skeleton

.marketTypeSelectorSkeleton {
  height: 32px;
  width: 213px;
  border-radius: 5px;
}

.currencyStatsSkeleton {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.selectedCurrencySkeleton {
  height: 40px;
  width: 400px;
  margin-left: 10px;
}

.currencyLogoSkeleton {
  height: 40px;
  width: 36px;
}

.avatarSkeleton {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.avatarIconSkeleton {
  width: 24px;
  height: 24px;
  border-radius: 5px;
}
</style>
