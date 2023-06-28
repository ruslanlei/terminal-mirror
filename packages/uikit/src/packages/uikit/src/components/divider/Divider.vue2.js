import { defineComponent as t, openBlock as a, createElementBlock as l, normalizeClass as s } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
const p = /* @__PURE__ */ t({
  __name: "Divider",
  props: {
    type: { default: "vertical" },
    state: { default: "default" },
    maxLong: {}
  },
  setup(r) {
    return (e, n) => (a(), l("div", {
      class: s([
        e.$style.divider,
        e.$style[e.type],
        e.$style[e.state]
      ])
    }, null, 2));
  }
});
export {
  p as default
};
//# sourceMappingURL=Divider.vue2.js.map
