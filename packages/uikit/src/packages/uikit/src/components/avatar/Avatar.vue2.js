import { defineComponent as a, openBlock as r, createElementBlock as s, normalizeClass as l, renderSlot as o, createBlock as t, withCtx as i, createTextVNode as m, toDisplayString as n, unref as p, createCommentVNode as c } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { firstLetter as f } from "@terminal/common/utils/string";
import u from "../picture/Picture.vue.js";
import d from "../typography/Typography.vue.js";
const b = /* @__PURE__ */ a({
  __name: "Avatar",
  props: {
    src: {},
    label: {},
    size: { default: "md" },
    state: {}
  },
  setup(y) {
    return (e, k) => (r(), s("div", {
      class: l([
        e.$style.avatar,
        e.$style[e.size],
        e.$style[e.state]
      ])
    }, [
      o(e.$slots, "default", {}, () => [
        e.src ? (r(), t(u, {
          key: 0,
          src: e.src
        }, null, 8, ["src"])) : e.label ? (r(), t(d, {
          key: 1,
          size: "title1",
          state: ["accent1", "semiBold", "uppercase"]
        }, {
          default: i(() => [
            m(n(p(f)(e.label)), 1)
          ]),
          _: 1
        })) : c("", !0)
      ])
    ], 2));
  }
});
export {
  b as default
};
//# sourceMappingURL=Avatar.vue2.js.map
