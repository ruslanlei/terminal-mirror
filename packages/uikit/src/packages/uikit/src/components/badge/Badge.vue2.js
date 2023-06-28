import { defineComponent as s, openBlock as r, createElementBlock as a, normalizeClass as n, unref as p, renderSlot as l } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { useComputedState as m } from "../../hooks/useComputedState.js";
const f = /* @__PURE__ */ s({
  __name: "Badge",
  props: {
    state: {},
    size: {}
  },
  setup(t) {
    const o = m(t);
    return (e, u) => (r(), a("div", {
      class: n([
        e.$style.badge,
        e.$style[e.size],
        ...p(o)
      ])
    }, [
      l(e.$slots, "default")
    ], 2));
  }
});
export {
  f as default
};
//# sourceMappingURL=Badge.vue2.js.map
