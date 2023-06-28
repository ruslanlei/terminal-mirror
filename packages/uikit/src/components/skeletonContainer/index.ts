import { InjectionKey } from 'vue';

export { default as UiSkeletonContainer } from '@/components/skeletonContainer/SkeletonContainer.vue';

export const SkeletonContainerIdInjectionKey: InjectionKey<string> = Symbol(
  'SkeletonContainerId',
);
