import { defineComponent as y, ref as n, watch as C, openBlock as $, createElementBlock as k, normalizeClass as o, unref as H, createElementVNode as s, renderSlot as p, normalizeStyle as S } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { compose as z } from "@terminal/common/utils/fp";
import { add as E } from "@terminal/common/utils/number";
import { useEnvironmentObserver as b } from "../../hooks/useEnvironmentObserver.js";
import { toCssPxValue as u } from "../../utils/style.js";
import { useComputedState as w } from "../../hooks/useComputedState.js";
import { getRectField as B } from "../../utils/dom.js";
const R = /* @__PURE__ */ y({
  __name: "InlineDropdown",
  props: {
    gap: { default: 0 },
    size: {},
    state: {}
  },
  setup(d) {
    const r = d, l = n(), a = n(), g = w(r), i = n({
      height: u(0)
    }), c = (e) => {
      i.value.height = u(e);
    }, f = () => z(
      c,
      E(r.gap),
      B("height")
    )(a.value), v = () => c(0), t = n(!1), h = () => {
      t.value = !t.value;
    }, m = () => (t.value ? f : v)();
    return C(t, m), b(l, m), (e, D) => ($(), k("div", {
      ref_key: "root",
      ref: l,
      class: o([
        e.$style.inlineDropdown,
        e.$style[e.size],
        t.value && e.$style.active,
        ...H(g)
      ])
    }, [
      s("button", {
        type: "button",
        class: o(e.$style.trigger),
        onClick: h
      }, [
        s("div", {
          class: o(e.$style.triggerContent)
        }, [
          p(e.$slots, "trigger")
        ], 2)
      ], 2),
      s("div", {
        style: S(i.value),
        class: o(e.$style.contentContainer)
      }, [
        s("div", {
          ref_key: "content",
          ref: a,
          class: o(e.$style.content)
        }, [
          p(e.$slots, "content")
        ], 2)
      ], 6)
    ], 2));
  }
});
export {
  R as default
};
//# sourceMappingURL=InlineDropdown.vue2.js.map
