import { defineComponent as r, openBlock as s, createElementBlock as a, normalizeClass as t, renderSlot as o, createCommentVNode as l } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
const p = /* @__PURE__ */ r({
  __name: "Card",
  props: {
    state: { default: "background2" }
  },
  setup(n) {
    return (e, d) => (s(), a("div", {
      class: t([
        e.$style.card,
        e.$style[e.state]
      ])
    }, [
      "head" in e.$slots ? (s(), a("div", {
        key: 0,
        class: t(e.$style.head)
      }, [
        o(e.$slots, "head")
      ], 2)) : l("", !0),
      o(e.$slots, "default")
    ], 2));
  }
});
export {
  p as default
};
//# sourceMappingURL=Card.vue2.js.map
