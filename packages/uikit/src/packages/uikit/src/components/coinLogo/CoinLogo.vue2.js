import { defineComponent as s, openBlock as o, createElementBlock as n, normalizeClass as t, createVNode as i, Transition as a, withCtx as l, createElementVNode as r } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
const c = ["xlink:href"], p = /* @__PURE__ */ s({
  __name: "CoinLogo",
  props: {
    coin: {},
    state: { default: "circle" }
  },
  setup(m) {
    return (e, u) => (o(), n("div", {
      class: t([e.$style.container, e.$style[e.state]])
    }, [
      i(a, {
        name: "coinLogoAnimation",
        mode: "out-in"
      }, {
        default: l(() => [
          (o(), n("svg", {
            key: e.coin,
            class: t(e.$style.source)
          }, [
            r("use", {
              "xlink:href": `#coin-logo-${e.coin}`
            }, null, 8, c)
          ], 2))
        ]),
        _: 1
      })
    ], 2));
  }
});
export {
  p as default
};
//# sourceMappingURL=CoinLogo.vue2.js.map
