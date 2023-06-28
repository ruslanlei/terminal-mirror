import { defineComponent as c, openBlock as m, createElementBlock as u, normalizeClass as t, unref as a, createElementVNode as p } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { useLocalValue as d } from "../../hooks/useLocalValue.js";
import { useComputedState as f } from "../../hooks/useComputedState.js";
const B = /* @__PURE__ */ c({
  __name: "Switch",
  props: {
    modelValue: { type: Boolean },
    state: { default: "primaryColor" },
    isDisabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: n }) {
    const o = s, l = d(o, n, "modelValue"), r = f(o), i = () => {
      l.value = !l.value;
    };
    return (e, y) => (m(), u("div", {
      class: t([
        e.$style.switch,
        a(l) && e.$style.active,
        e.isDisabled && e.$style.disabled,
        ...a(r)
      ]),
      onClick: i
    }, [
      p("div", {
        class: t(e.$style.circle)
      }, null, 2)
    ], 2));
  }
});
export {
  B as default
};
//# sourceMappingURL=Switch.vue2.js.map
