import { defineComponent as l, openBlock as n, createElementBlock as t, normalizeClass as i, createBlock as o, createCommentVNode as s } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import r from "../icon/Icon.vue.js";
const m = /* @__PURE__ */ l({
  __name: "TrendingIcon",
  props: {
    direction: {},
    isVisible: { type: Boolean }
  },
  setup(d) {
    return (e, a) => (n(), t("div", {
      class: i([
        e.$style.trendingIcon,
        !e.isVisible && e.$style.hidden
      ])
    }, [
      e.direction === "up" && e.isVisible ? (n(), o(r, {
        key: e.direction,
        icon: "trendingUp",
        class: i(e.$style.up)
      }, null, 8, ["class"])) : s("", !0),
      e.direction === "down" && e.isVisible ? (n(), o(r, {
        key: e.direction,
        icon: "trendingDown",
        class: i(e.$style.down)
      }, null, 8, ["class"])) : s("", !0)
    ], 2));
  }
});
export {
  m as default
};
//# sourceMappingURL=TrendingIcon.vue2.js.map
