import { defineComponent as t, computed as n, openBlock as r, createElementBlock as u, normalizeClass as o, unref as p, createElementVNode as d, createVNode as m, renderSlot as f } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import y from "../loader/Loader.vue.js";
import { useComputedState as $ } from "../../hooks/useComputedState.js";
const b = ["disabled"], v = /* @__PURE__ */ t({
  __name: "Button",
  props: {
    state: { default: "gradientColor" },
    size: {},
    isWide: { type: Boolean, default: !0 },
    isDisabled: { type: Boolean, default: !1 },
    isLoading: { type: Boolean, default: !1 },
    hideLoaderOnHover: { type: Boolean }
  },
  setup(a) {
    const s = a, l = $(s), i = n(
      () => s.size === "lg" ? "md" : "sm"
    );
    return (e, L) => (r(), u("button", {
      tabindex: "0",
      class: o([
        e.$style.button,
        e.isDisabled && e.$style.disabled,
        e.$style[e.size],
        e.isWide && e.$style.wide,
        e.hideLoaderOnHover && e.$style.hideLoaderOnHover,
        ...p(l)
      ]),
      disabled: e.isDisabled
    }, [
      d("div", {
        class: o([e.$style.loaderCap, !e.isLoading && e.$style.hidden])
      }, [
        m(y, { size: i.value }, null, 8, ["size"])
      ], 2),
      d("div", {
        class: o([e.$style.inner, e.isLoading && e.$style.hidden])
      }, [
        f(e.$slots, "default")
      ], 2)
    ], 10, b));
  }
});
export {
  v as default
};
//# sourceMappingURL=Button.vue2.js.map
