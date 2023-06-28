import { computed as l, ref as r } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { inputType as s } from "../components/input/index2.js";
const v = (u, o) => {
  const c = l({
    get: () => u.modelValue,
    set: (e) => o("update:modelValue", e)
  }), t = r(!1), a = () => {
    t.value = !t.value;
  }, f = l(() => u.type ? u.type !== s.PASSWORD ? u.type : t.value ? s.TEXT : s.PASSWORD : s.TEXT), i = (e) => {
    o("input", e);
  }, n = r(!1);
  return {
    localValue: c,
    isPasswordVisible: t,
    togglePassword: a,
    computedType: f,
    onInput: i,
    isFocused: n,
    onFocus: (e) => {
      u.isDisabled || (n.value = !0, o("focus", e));
    },
    onBlur: (e) => {
      n.value = !1, o("blur", e);
    },
    focus
  };
};
export {
  v as useInput
};
//# sourceMappingURL=useInput.js.map
