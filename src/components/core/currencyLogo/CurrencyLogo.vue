<template>
  <div>
    <ComputedLogo />
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

const props = defineProps<CurrencyLogoProps>();

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

const ComputedLogo = computed(() => logoMap[props.currency]);
</script>

<style lang="scss" module>
</style>
