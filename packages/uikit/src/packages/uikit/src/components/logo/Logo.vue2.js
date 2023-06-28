import { defineComponent as c, ref as m, openBlock as l, createElementBlock as f, normalizeClass as o, unref as t, createElementVNode as s, createVNode as u, createBlock as d, createCommentVNode as i } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { useComputedState as y } from "../../hooks/useComputedState.js";
import g from "./assets/logoIcon.svg.js";
import $ from "./assets/logoText.svg.js";
const z = /* @__PURE__ */ c({
  __name: "Logo",
  props: {
    type: { default: "full" },
    state: { default: "defaultState2" },
    shape: { default: "circle" },
    size: { default: "md" }
  },
  setup(a) {
    const r = a, n = m(), p = y(r);
    return (e, k) => (l(), f("div", {
      class: o([
        e.$style.wrapper,
        e.$style[e.shape],
        e.$style[e.size],
        ...t(p)
      ])
    }, [
      s("div", {
        class: o(e.$style.logoIconWrapper)
      }, [
        s("div", {
          ref_key: "logoIcon",
          ref: n
        }, [
          u(t(g), {
            class: o(e.$style.logoIcon)
          }, null, 8, ["class"])
        ], 512)
      ], 2),
      e.type === "full" ? (l(), d(t($), {
        key: 0,
        class: o(e.$style.logoText)
      }, null, 8, ["class"])) : i("", !0)
    ], 2));
  }
});
export {
  z as default
};
//# sourceMappingURL=Logo.vue2.js.map
