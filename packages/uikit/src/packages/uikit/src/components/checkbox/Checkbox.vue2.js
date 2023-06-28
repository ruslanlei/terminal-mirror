import { defineComponent as b, openBlock as n, createElementBlock as i, normalizeClass as a, unref as c, withKeys as m, createElementVNode as y, createVNode as f, renderSlot as p, createTextVNode as $, toDisplayString as g, createCommentVNode as V } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import k from "../icon/Icon.vue.js";
import { useLocalValue as v } from "../../hooks/useLocalValue.js";
const h = ["tabindex", "onKeydown"], z = /* @__PURE__ */ b({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: {},
    labelAlignment: { default: "center" },
    disableTabNavigation: { type: Boolean },
    isDisabled: { type: Boolean },
    tabIndex: { default: 0 },
    state: { default: "default" },
    size: { default: "md" }
  },
  emits: ["update:modelValue", "toggle", "focus", "blur"],
  setup(d, { emit: l }) {
    const o = d, s = v(o, l, "modelValue"), t = () => {
      o.isDisabled || (s.value = !s.value, l("toggle"));
    }, r = () => {
      l("focus");
    }, u = () => {
      l("blur");
    };
    return (e, B) => (n(), i("div", {
      class: a({
        [e.$style.checkbox]: !0,
        [e.$style[e.state]]: !0,
        [e.$style[e.size]]: !0,
        [e.$style[e.labelAlignment]]: !0,
        [e.$style.active]: c(s),
        [e.$style.disabled]: e.isDisabled,
        [e.$style.disabled]: e.isDisabled
      }),
      tabindex: e.disableTabNavigation || e.isDisabled ? -1 : e.tabIndex,
      onClick: t,
      onKeydown: m(t, ["space"]),
      onFocus: r,
      onBlur: u
    }, [
      y("div", {
        class: a(e.$style.box)
      }, [
        f(k, {
          size: 24,
          class: a(e.$style.check),
          icon: "check"
        }, null, 8, ["class"])
      ], 2),
      e.label || "label" in e.$slots ? (n(), i("div", {
        key: 0,
        class: a(e.$style.label)
      }, [
        p(e.$slots, "label", {}, () => [
          $(g(e.label), 1)
        ])
      ], 2)) : V("", !0)
    ], 42, h));
  }
});
export {
  z as default
};
//# sourceMappingURL=Checkbox.vue2.js.map
