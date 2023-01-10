<template>
  <div
    :class="[$style.container, $style[state]]"
    :style="computedContainerStyles"
  >
    <transition
      name="currencyLogoAnimation"
      mode="out-in"
    >
      <ComputedLogo :key="currency" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { currency } from '@/api/types/currency';
import { CurrencyLogoProps } from './index';
import AchainLogo from './assets/achain.svg';
import AschLogo from './assets/asch.svg';
import BnbLogo from './assets/bnb.svg';
import BreadLogo from './assets/bread.svg';
import BtcLogo from './assets/btc.svg';
import CobinhoodLogo from './assets/cobinhood.svg';
import DashLogo from './assets/dash.svg';
import EthLogo from './assets/eth.svg';
import IotLogo from './assets/iot.svg';
import LitecoinLogo from './assets/litecoin.svg';
import TetherLogo from './assets/tether.svg';

const props = withDefaults(
  defineProps<CurrencyLogoProps>(),
  {
    state: 'circle',
  },
);

const logoMap: Record<currency, any> = {
  BTC: BtcLogo,
  ETH: EthLogo,
  BNB: BnbLogo,
  DASH: DashLogo,
  LTC: LitecoinLogo,
  achain: AchainLogo,
  asch: AschLogo,
  bread: BreadLogo,
  cobinhood: CobinhoodLogo,
  iot: IotLogo,
  tether: TetherLogo,
};

const colorMap: Record<currency, string> = {
  BTC: '#F49D35',
  ETH: '#627EEA',
  BNB: '#F3BA2F',
  DASH: '#2573C2',
  LTC: '#BEBEBE',
  achain: '#767DFF',
  asch: '#FAA00D',
  bread: '#FE5D86',
  cobinhood: '#13BF99',
  iot: '#102044',
  tether: '#26A17B',
};

const ComputedLogo = computed(() => logoMap[props.currency]);

const computedContainerStyles = computed(() => ({
  backgroundColor: colorMap[props.currency],
}));
</script>

<style lang="scss" module>
.container {
  transition: 200ms background-color;
}

.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  min-width: 24px;
  height: 24px;
  min-height: 24px;
  border-radius: 50%;
}

.square {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  min-width: 30px;
  height: 40px;
  min-height: 40px;
  border-radius: 5px;
}
</style>

<style lang="scss">
.currencyLogoAnimation {
  &-enter-active,
  &-leave-active {
    transition: transform 250ms, opacity 250ms;
  }

  &-enter-from, &-leave-to {
    opacity: 0;
  }

  &-enter-from {
    transform: rotate(-180deg) scale(1.5);
  }
  &-leave-to {
    transform: rotate(180deg) scale(1.5);
  }
}
</style>
