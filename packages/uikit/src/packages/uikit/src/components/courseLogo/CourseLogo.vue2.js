import { defineComponent as p, ref as u, openBlock as s, createElementBlock as m, normalizeClass as o, unref as l, createElementVNode as t, createVNode as f, createBlock as d, createCommentVNode as i } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { useComputedState as y } from "../../hooks/useComputedState.js";
import g from "./assets/courseLogoIcon.svg.js";
import $ from "./assets/courseLogoText.svg.js";
const v = /* @__PURE__ */ p({
  __name: "CourseLogo",
  props: {
    type: { default: "full" },
    state: { default: null },
    shape: { default: "circle" },
    size: { default: "md" }
  },
  setup(r) {
    const a = r, n = u(), c = y(a);
    return (e, k) => (s(), m("div", {
      class: o([
        e.$style.courseLogo,
        e.$style[e.shape],
        e.$style[e.size],
        ...l(c)
      ])
    }, [
      t("div", {
        class: o(e.$style.logoIconWrapper)
      }, [
        t("div", {
          ref_key: "logoIcon",
          ref: n
        }, [
          f(l(g), {
            class: o(e.$style.logoIcon)
          }, null, 8, ["class"])
        ], 512)
      ], 2),
      e.type === "full" ? (s(), d(l($), {
        key: 0,
        class: o(e.$style.logoText)
      }, null, 8, ["class"])) : i("", !0)
    ], 2));
  }
});
export {
  v as default
};
//# sourceMappingURL=CourseLogo.vue2.js.map
