import { defineComponent as r, openBlock as s, createElementBlock as o, normalizeClass as n, normalizeStyle as t, createElementVNode as p } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
const a = ["xlink:href"], h = /* @__PURE__ */ r({
  __name: "Icon",
  props: {
    icon: {},
    size: { default: 24 }
  },
  setup(i, { expose: l }) {
    return l(i), (e, m) => (s(), o("div", {
      class: n(e.$style.icon),
      style: t({
        ...e.size ? {
          width: `${e.size}px`,
          minWidth: `${e.size}px`,
          height: `${e.size}px`
        } : {}
      })
    }, [
      (s(), o("svg", {
        class: n(e.$style.source)
      }, [
        p("use", {
          "xlink:href": `#icon-${e.icon}`
        }, null, 8, a)
      ], 2))
    ], 6));
  }
});
export {
  h as default
};
//# sourceMappingURL=Icon.vue3.js.map
