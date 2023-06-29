import { InjectionKey } from 'vue';
export declare const defineHookInject: <Hook extends () => any, K extends InjectionKey<ReturnType<Hook>>>(injectionKey: K, hook: Hook) => () => ReturnType<Hook>;
