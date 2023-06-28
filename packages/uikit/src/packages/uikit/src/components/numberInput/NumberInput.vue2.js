import { defineComponent as E, ref as z, computed as S, watch as M, openBlock as u, createElementBlock as d, normalizeClass as n, unref as m, renderSlot as $, createTextVNode as O, toDisplayString as W, createCommentVNode as c, createElementVNode as f, createVNode as b, normalizeStyle as F } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { roundToDecimalPlaces as P, add as K, subtract as U } from "@terminal/common/utils/number";
import { useLocalValue as L } from "../../hooks/useLocalValue.js";
import j from "../fieldError/FieldError.vue.js";
import h from "../icon/Icon.vue.js";
import { useComputedState as q } from "../../hooks/useComputedState.js";
const G = ["value", "tabindex", "step", "disabled"], Z = /* @__PURE__ */ E({
  __name: "NumberInput",
  props: {
    modelValue: {},
    min: { default: -1 / 0 },
    max: { default: 1 / 0 },
    step: { default: 1 },
    decimals: {},
    normalizer: {},
    saveOn: { default: "input" },
    normalizeOnKeydown: { type: Boolean, default: !1 },
    state: { default: "defaultColor" },
    size: { default: "sm" },
    isDisabled: { type: Boolean },
    tabIndex: { default: 0 },
    roundToDecimalPlaces: { type: Boolean, default: !0 },
    error: {},
    label: {},
    hideArrows: { type: Boolean, default: !1 },
    showErrorIcon: { type: Boolean, default: !0 },
    appendMinWidth: { default: 0 }
  },
  emits: ["update:modelValue", "input", "focus", "blur"],
  setup(v, { emit: i }) {
    const l = v, o = z(), V = S(
      () => l.isDisabled ? -1 : l.tabIndex
    ), a = L(l, i, "modelValue");
    M(a, () => {
      l.decimals && l.roundToDecimalPlaces && (a.value = P(l.decimals, a.value));
    });
    const k = (e, t) => {
      let r = !1;
      return t && (e = t(e), r = !0), e < l.min && (e = l.min, r = !0), e > l.max && (e = l.max, r = !0), {
        value: e,
        isChanged: r
      };
    }, s = (e, t) => {
      const {
        value: r,
        isChanged: A
      } = k(e, t);
      A && o.value && (o.value.value = String(r)), a.value = r;
    }, y = (e) => l.normalizer ? l == null ? void 0 : l.normalizer(e, "increment") : (e = K(e, l.step), e), w = (e) => l.normalizer ? l == null ? void 0 : l.normalizer(e, "decrement") : (e = U(e, l.step), e), D = (e) => {
      l.saveOn === "input" && o.value && s(Number(o.value.value), l.normalizer), i("input", e);
    }, p = z(!1), C = (e) => {
      p.value = !0, i("focus", e);
    }, I = (e) => {
      p.value = !1, l.saveOn === "blur" && o.value && s(Number(o.value.value), l.normalizer), i("blur", e);
    }, B = (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        const t = e.target;
        s(Number(t.value), y);
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const t = e.target;
        s(Number(t.value), w);
      }
      i("input", e);
    }, g = () => {
      s(a.value, y);
    }, N = () => {
      s(a.value, w);
    }, T = q(l);
    return (e, t) => (u(), d("label", {
      class: n([
        e.$style[e.size],
        ...m(T),
        p.value && e.$style.focus,
        !!e.error && e.$style.withError
      ])
    }, [
      "label" in e.$slots || e.label ? (u(), d("span", {
        key: 0,
        class: n(e.$style.label)
      }, [
        $(e.$slots, "label", {}, () => [
          O(W(e.label), 1)
        ])
      ], 2)) : c("", !0),
      f("div", {
        class: n([e.$style.field])
      }, [
        f("input", {
          ref_key: "field",
          ref: o,
          type: "number",
          value: m(a),
          tabindex: V.value,
          step: e.step,
          disabled: e.isDisabled,
          onInput: D,
          onFocus: C,
          onBlur: I,
          onKeydown: B
        }, null, 40, G),
        e.hideArrows ? c("", !0) : (u(), d("div", {
          key: 0,
          class: n(e.$style.arrows)
        }, [
          f("button", {
            tabindex: "-1",
            type: "button",
            class: n([
              e.$style.arrowButton,
              m(a) === e.max && e.$style.disabled
            ]),
            onClick: g
          }, [
            b(h, {
              size: 6,
              icon: "tinyArrowUp"
            })
          ], 2),
          f("button", {
            tabindex: "-1",
            type: "button",
            class: n([
              e.$style.arrowButton,
              m(a) === e.min && e.$style.disabled
            ]),
            onClick: N
          }, [
            b(h, {
              size: 6,
              icon: "tinyArrowDown"
            })
          ], 2)
        ], 2)),
        "append" in e.$slots ? (u(), d("div", {
          key: 1,
          class: n(e.$style.append),
          style: F({
            ...e.appendMinWidth ? {
              minWidth: `${e.appendMinWidth}px`
            } : {}
          })
        }, [
          $(e.$slots, "append")
        ], 6)) : c("", !0)
      ], 2),
      b(j, {
        size: e.size,
        text: e.error,
        offset: 4,
        class: n(e.$style.errorMessage),
        "show-icon": e.showErrorIcon
      }, null, 8, ["size", "text", "class", "show-icon"])
    ], 2));
  }
});
export {
  Z as default
};
//# sourceMappingURL=NumberInput.vue2.js.map
