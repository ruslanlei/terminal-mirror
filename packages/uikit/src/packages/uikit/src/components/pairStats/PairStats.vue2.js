import { defineComponent as u, ref as c, watch as m, nextTick as p, openBlock as a, createElementBlock as s, normalizeClass as l, createVNode as f, createElementVNode as d, Fragment as v, renderList as h, createBlock as g } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import k from "../coinLogo/CoinLogo.vue.js";
import y from "../pairStatsColumn/PairStatsColumn.vue.js";
const E = /* @__PURE__ */ u({
  __name: "PairStats",
  props: {
    coin: {},
    stats: {}
  },
  setup(o) {
    const r = o, e = c(!1);
    return m(() => r.coin, () => {
      e.value ? (e.value = !1, p(() => {
        e.value = !0;
      })) : e.value = !0, setTimeout(() => {
        e.value = !1;
      }, 600);
    }), (t, C) => (a(), s("div", {
      class: l([t.$style.pairStats, e.value && t.$style.highlight])
    }, [
      f(k, {
        state: "square",
        coin: t.coin
      }, null, 8, ["coin"]),
      d("div", {
        class: l(t.$style.stats)
      }, [
        (a(!0), s(v, null, h(t.stats, (n, i) => (a(), g(y, {
          key: i,
          "column-data": n
        }, null, 8, ["column-data"]))), 128))
      ], 2)
    ], 2));
  }
});
export {
  E as default
};
//# sourceMappingURL=PairStats.vue2.js.map
