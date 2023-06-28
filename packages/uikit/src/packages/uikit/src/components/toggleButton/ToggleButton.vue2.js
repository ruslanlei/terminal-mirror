import { defineComponent as r, openBlock as m, createElementBlock as p, normalizeClass as c, unref as l, renderSlot as d } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { useLocalValue as i } from "../../hooks/useLocalValue.js";
import { useComputedState as f } from "../../hooks/useComputedState.js";
const V = /* @__PURE__ */ r({
  __name: "ToggleButton",
  props: {
    modelValue: { type: Boolean },
    state: { default: "gradientColor" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: n }) {
    const o = a, e = i(o, n), s = () => {
      e.value = !e.value;
    }, u = f(o);
    return (t, g) => (m(), p("button", {
      type: "button",
      class: c([
        t.$style.toggleButton,
        l(e) && t.$style.active,
        ...l(u)
      ]),
      onClick: s
    }, [
      d(t.$slots, "default")
    ], 2));
  }
});
export {
  V as default
};
//# sourceMappingURL=ToggleButton.vue2.js.map
