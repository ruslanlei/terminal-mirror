import { defineComponent as s, toRefs as m, ref as l, watch as p, openBlock as o, createBlock as f, Transition as d, withCtx as u, createElementBlock as y, unref as n, normalizeClass as v, renderSlot as T, createTextVNode as x, toDisplayString as g } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
const w = /* @__PURE__ */ s({
  __name: "AnimatedText",
  props: {
    text: {},
    animationType: { default: "verticalForward" }
  },
  setup(c) {
    const i = c, {
      text: a
    } = m(i), r = l(i.animationType);
    return p(a, (e, t) => {
      i.animationType === "verticalAuto" && (r.value = "verticalForward", typeof e == "string" && (e = Number(e.replace(/\D/g, ""))), typeof t == "string" && (t = Number(t.replace(/\D/g, ""))), e > (t || 0) ? r.value = "verticalBack" : r.value = "verticalForward");
    }, { immediate: !0 }), (e, t) => (o(), f(d, {
      name: r.value,
      mode: "out-in"
    }, {
      default: u(() => [
        (o(), y("div", {
          key: n(a),
          class: v(e.$style.animatedText)
        }, [
          T(e.$slots, "default", { value: n(a) }, () => [
            x(g(n(a)), 1)
          ])
        ], 2))
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
export {
  w as default
};
//# sourceMappingURL=AnimatedText.vue2.js.map
