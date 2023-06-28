import { defineComponent as f, ref as V, computed as b, openBlock as a, createElementBlock as r, normalizeClass as s, createVNode as i, mergeProps as C, unref as l, isRef as k, createElementVNode as y, Transition as N, withCtx as P, createBlock as S, KeepAlive as T, renderSlot as $ } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import h from "../selector/Selector.vue.js";
import { useLocalValue as g } from "../../hooks/useLocalValue.js";
const z = /* @__PURE__ */ f({
  __name: "Tabs",
  props: {
    modelValue: {},
    tabs: {},
    selectorProps: { default: () => ({
      state: ["tabsShape", "secondaryColor2"]
    }) },
    contentClass: {}
  },
  emits: ["update:modelValue"],
  setup(p, { emit: u }) {
    const t = g(p, u, "modelValue"), o = V("next"), c = b(() => ({
      prev: "tabsTransitionPrev",
      next: "tabsTransitionNext"
    })[o.value]), m = () => {
      o.value = "next";
    }, d = () => {
      o.value = "prev";
    };
    return (e, n) => (a(), r("div", {
      class: s(e.$style.tabs)
    }, [
      i(h, C({
        modelValue: l(t),
        "onUpdate:modelValue": n[0] || (n[0] = (v) => k(t) ? t.value = v : null),
        options: e.tabs,
        thickening: 0,
        "is-ghost-appear-animation": !1
      }, e.selectorProps, {
        onSelectNext: m,
        onSelectPrev: d
      }), null, 16, ["modelValue", "options"]),
      y("div", {
        class: s([e.$style.contentWrapper, e.contentClass])
      }, [
        i(N, { name: c.value }, {
          default: P(() => [
            (a(), r("div", {
              key: l(t),
              class: s(e.$style.tabContent)
            }, [
              (a(), S(T, null, [
                $(e.$slots, `tab(${l(t)})`)
              ], 1024))
            ], 2))
          ]),
          _: 3
        }, 8, ["name"])
      ], 2)
    ], 2));
  }
});
export {
  z as default
};
//# sourceMappingURL=Tabs.vue2.js.map
