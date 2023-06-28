import { defineComponent as a, computed as l, openBlock as p, createBlock as r, resolveDynamicComponent as u, normalizeClass as i, unref as m, withCtx as d, renderSlot as c, createTextVNode as f, toDisplayString as y } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { useComputedState as C } from "../../hooks/useComputedState.js";
const z = /* @__PURE__ */ a({
  __name: "Typography",
  props: {
    text: {},
    isInline: { type: Boolean, default: !1 },
    state: { default: () => [] },
    size: { default: () => null }
  },
  setup(o) {
    const t = o, s = l(() => t.isInline ? "span" : "p"), n = C(t);
    return (e, h) => (p(), r(u(s.value), {
      class: i([
        e.$style.typography,
        e.$style[e.size],
        ...m(n)
      ])
    }, {
      default: d(() => [
        c(e.$slots, "default", {}, () => [
          f(y(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  z as default
};
//# sourceMappingURL=Typography.vue2.js.map
