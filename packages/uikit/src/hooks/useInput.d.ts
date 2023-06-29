export declare const useInput: (props: Record<any, any>, emit: any) => {
    localValue: import("vue").WritableComputedRef<any>;
    isPasswordVisible: import("vue").Ref<boolean>;
    togglePassword: () => void;
    computedType: import("vue").ComputedRef<any>;
    onInput: (event: InputEvent) => void;
    isFocused: import("vue").Ref<boolean>;
    onFocus: (event: InputEvent) => void;
    onBlur: (event: InputEvent) => void;
    focus: typeof focus;
};
