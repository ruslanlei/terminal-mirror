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
import { Currency, CurrencyLogoProps } from './index';
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

const logoMap: Record<Currency, any> = {
  achain: AchainLogo,
  asch: AschLogo,
  bnb: BnbLogo,
  bread: BreadLogo,
  btc: BtcLogo,
  cobinhood: CobinhoodLogo,
  dash: DashLogo,
  eth: EthLogo,
  iot: IotLogo,
  ltc: LitecoinLogo,
  tether: TetherLogo,
};

const colorMap: Record<Currency, string> = {
  achain: '#767DFF',
  asch: '#FAA00D',
  bnb: '#F3BA2F',
  bread: '#FE5D86',
  btc: '#F49D35',
  cobinhood: '#13BF99',
  dash: '#2573C2',
  eth: '#627EEA',
  iot: '#102044',
  ltc: '#BEBEBE',
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
