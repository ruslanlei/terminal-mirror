import { defineComponent as o, openBlock as s, createElementBlock as l, normalizeClass as r } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
const p = /* @__PURE__ */ o({
  __name: "Loader",
  props: {
    size: { default: "md" }
  },
  setup(a) {
    return (e, n) => (s(), l("div", {
      class: r([e.$style.loader, e.$style[e.size]])
    }, null, 2));
  }
});
export {
  p as default
};
//# sourceMappingURL=Loader.vue2.js.map
