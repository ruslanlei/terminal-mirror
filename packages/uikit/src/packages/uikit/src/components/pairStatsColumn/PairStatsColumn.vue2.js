import { defineComponent as V, ref as s, onMounted as _, openBlock as t, createElementBlock as a, normalizeStyle as b, normalizeClass as l, createElementVNode as u, Fragment as i, renderList as C, toDisplayString as r, createVNode as $, createBlock as m, withCtx as c, createTextVNode as d, createCommentVNode as z } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { isPositive as N, roundToDecimalPlaces as g } from "@terminal/common/utils/number";
import { useResizeObserver as P } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/@vueuse/core/index.mjs";
import x from "../divider/Divider.vue.js";
import B from "../animatedText/AnimatedText.vue.js";
import k from "../typography/Typography.vue.js";
import { toCssPxValue as w } from "../../utils/style.js";
import { getRect as A } from "../../utils/dom.js";
const q = /* @__PURE__ */ V({
  __name: "PairStatsColumn",
  props: {
    columnData: {}
  },
  setup(E) {
    const p = s(), v = s(), D = (e) => [
      // default
      "accent2",
      "bold",
      "nowrap",
      // calculated
      ...e.valueState === "auto" && typeof e.value == "number" ? [
        N(e.value) ? "success" : "danger"
      ] : [],
      e.valueState === "positive" && "success",
      e.valueState === "negative" && "danger"
    ], f = s({
      width: "auto",
      height: "auto"
    }), y = () => {
      const {
        width: e,
        height: h
      } = A(p.value);
      f.value = {
        width: w(
          g(2, e)
        ),
        height: w(
          g(2, h)
        )
      };
    };
    return P(v, y), _(y), (e, h) => (t(), a("div", {
      style: b(f.value),
      class: l(e.$style.pairStatsColumn)
    }, [
      u("div", {
        ref_key: "wrapper",
        ref: p,
        class: l(e.$style.wrapper)
      }, [
        u("div", {
          class: l(e.$style.column)
        }, [
          (t(!0), a(i, null, C(e.columnData, (o, n) => (t(), a("div", {
            key: n,
            class: l(e.$style.label)
          }, r(o.label), 3))), 128))
        ], 2),
        $(x),
        u("div", {
          ref_key: "valueColumn",
          ref: v,
          class: l(e.$style.column)
        }, [
          (t(!0), a(i, null, C(e.columnData, (o, n) => (t(), m(k, {
            key: n,
            size: "title3",
            state: D(o)
          }, {
            default: c(() => [
              o.value ? (t(), m(B, {
                key: 0,
                text: o.value,
                "animation-type": "verticalAuto"
              }, {
                default: c(({ value: T }) => [
                  d(r(T) + " ", 1),
                  o.appendText ? (t(), a(i, { key: 0 }, [
                    d(r(o.appendText), 1)
                  ], 64)) : z("", !0)
                ]),
                _: 2
              }, 1032, ["text"])) : (t(), m(k, { key: 1 }, {
                default: c(() => [
                  d(r("-"))
                ]),
                _: 1
              }))
            ]),
            _: 2
          }, 1032, ["state"]))), 128))
        ], 2)
      ], 2)
    ], 6));
  }
});
export {
  q as default
};
//# sourceMappingURL=PairStatsColumn.vue2.js.map
