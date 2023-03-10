<template>
  <div :class="$style.landingFooter">
    <div :class="$style.container">
      <Typography
        size="massive4"
        :state="['accent1', 'bold']"
      >
        {{ t('terminalLanding.footer.label') }}
      </Typography>
      <div>
        <Picture />
      </div>
      <Button
        size="xl"
        state="backgroundAccent1"
      >
        {{ t('terminalLanding.footer.followButton') }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import Picture from '@/components/core/picture/Picture.vue';
import Button from '@/components/core/button/Button.vue';

const { t } = useI18n();
</script>

<style lang="scss" module>
.landingFooter {
  background: var(--color-main-gradient);
  padding: 82px 0;
  display: flex;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1240px;
  display: grid;
  grid-template-columns: 2fr 380px 1fr;
}
</style>
