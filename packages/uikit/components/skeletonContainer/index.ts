import { InjectionKey } from 'vue';

export { default as UiSkeletonContainer } from './SkeletonContainer.vue';

export const SkeletonContainerIdInjectionKey: InjectionKey<string> = Symbol(
  'SkeletonContainerId',
);
