<template>
  <Card
    :class="$style.playerSettings"
    state="background3"
  >
    <header>
      <div :class="$style.label">
        {{ t('emulator.player.label') }}
      </div>
      <Datepicker v-model="date" />
    </header>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Card from '@/components/core/card/Card.vue';
import Datepicker from '@/components/core/datepicker/Datepicker.vue';

const date = ref(new Date().toISOString());

const { t } = useI18n();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.playerSettings {
  height: 100%;
  padding: 20px;
}

.label {
  @include title4;
  font-weight: 600;
  color: rgb(var(--color-accent-1));
}
</style>
