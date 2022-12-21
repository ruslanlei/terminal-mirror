<template>
  <Card :class="$style.profileSettings">
    <header :class="$style.header">
      <Avatar :src="avatar" />
      <div :class="$style.name">
        {{ profile?.username }}
        <Icon
          :class="$style.verificationBadge"
          icon="verificationCircle"
        />
      </div>
      <LanguageSelect
        state="default"
        :class="$style.languageSelect"
      />
    </header>
    <SubscriptionBadge
      :state="testKey ? 'paid' : 'unpaid'"
      paid-until="24.12.2023"
      v-bind="{
        ...(testKey ? {} : {
          to: { name: 'subscription' }
        })
      }"
      :class="$style.subscriptionBadge"
    />
    <div :class="$style.row">
      <div :class="$style.text">
        <i18n-t keypath="profile.email">
          <template #email>
            <span :class="$style.value">
              {{ profile.email }}
            </span>
          </template>
        </i18n-t>
      </div>
    </div>
    <footer :class="$style.footer">
      <CurrentTheme />
      <Link
        :class="$style.support"
        :to="{ name: 'support' }"
        :label="t('auth.support')"
        :size="null"
      />
    </footer>
  </Card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import Card from '@/components/core/card/Card.vue';
import Avatar from '@/components/core/avatar/Avatar.vue';
import Icon from '@/components/core/icon/Icon.vue';
import LanguageSelect from '@/components/app/languageSelect/LanguageSelect.vue';
import SubscriptionBadge from '@/components/core/subscriptionBadge/SubscriptionBadge.vue';
import CurrentTheme from '@/components/app/currentTheme/CurrentTheme.vue';
import Link from '@/components/core/link/Link.vue';
import { useProfileStore } from '@/stores/profile';

const profileStore = useProfileStore();
const {
  profile,
} = storeToRefs(profileStore);

const { t } = useI18n();

const avatar = computed(() => profile.value?.avatar);

const testKey = ref(0);

setInterval(() => {
  testKey.value = testKey.value ? 0 : 1;
}, 50000);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.profileSettings {
  padding: 20px;
  width: 432px;
  overflow: hidden;
}

.header {
  display: flex;
  align-items: center;
}

.name {
  display: flex;
  align-items: center;
  margin-left: 20px;
  @include title2;
  font-weight: 600;
  color: rgb(var(--color-accent-1));
}

.verificationBadge {
  margin-left: 10px;
}

.languageSelect {
  margin-left: auto;
}

.subscriptionBadge {
  margin-top: 20px;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .text {
    @include title4;
    color: rgb(var(--color-accent-2));
    font-weight: 500;
  }
  .value {
    color: rgb(var(--color-accent-1));
    font-weight: 600;
  }
}

.footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.support {
  @include title5;
}
</style>
