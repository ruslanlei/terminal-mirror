import { defineComponent as R, ref as g, onBeforeUpdate as F, watch as S, computed as M, onMounted as U, onBeforeUnmount as X, openBlock as v, createElementBlock as f, normalizeClass as i, toDisplayString as V, createCommentVNode as Y, createElementVNode as w, createVNode as j, TransitionGroup as q, unref as p, withCtx as H, Fragment as J, renderList as K, renderSlot as Q, createTextVNode as W, normalizeStyle as Z } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { compose as x } from "@terminal/common/utils/fp";
import { multiply as _, add as B, roundToDecimalPlaces as E } from "@terminal/common/utils/number";
import { useLocalValue as ee } from "../../hooks/useLocalValue.js";
import { useEnvironmentObserver as te } from "../../hooks/useEnvironmentObserver.js";
import { useComputedState as ae } from "../../hooks/useComputedState.js";
import { toCssPxValue as u } from "../../utils/style.js";
import { getRect as A, addCssProperty as L } from "../../utils/dom.js";
const le = ["data-value", "onClick"], me = /* @__PURE__ */ R({
  __name: "Selector",
  props: {
    options: {},
    modelValue: {},
    state: { default: "primaryColor" },
    label: {},
    thickening: { default: 2 },
    isGhostAppearAnimation: { type: Boolean, default: !0 },
    isDisabled: { type: Boolean }
  },
  emits: ["update:modelValue", "selectNext", "selectPrev"],
  setup(N, { emit: h }) {
    const l = N, T = ae(l);
    if (!l.modelValue)
      throw new Error("[MultiSwitch Error]: modelValue is not passed (check v-model)");
    const c = g(), y = g({});
    F(() => {
      y.value = {};
    });
    const a = ee(
      l,
      h,
      "modelValue"
    ), b = (e, s) => {
      const o = l.options.findIndex(
        (r) => r.value === s
      ), t = l.options.findIndex(
        (r) => r.value === e
      ), n = o < t;
      h(n ? "selectNext" : "selectPrev");
    };
    S(a, b);
    const k = M(() => l.options.find(
      (e) => e.value === a.value
    ) || { value: "", label: "" }), D = (e) => {
      b(e.value, a.value), a.value = e.value;
    }, d = g({
      width: "0px",
      height: "auto",
      transform: "translateY(0) translateX(0)"
    }), $ = () => {
      var C;
      if (!c.value || !a.value)
        return;
      const e = (C = y.value) == null ? void 0 : C[a.value];
      if (!e)
        return;
      const { left: s, top: o } = c.value.getBoundingClientRect(), {
        width: t,
        height: n,
        left: r,
        top: z
      } = A(e), { thickening: G } = l, m = _(G, 2);
      d.value.width = u(
        B(t, m)
      ), d.value.height = u(
        B(n, m)
      ), d.value.transform = `translateX(${u(
        E(2, r - s - m / 2)
      )}) translateY(${u(
        E(2, z - o - m / 2)
      )})`;
    }, I = (e) => {
      const {
        height: s
      } = A(e);
      x(
        L(["zIndex", 1]),
        L(["height", u(s)])
      )(e);
    }, {
      setListeners: O,
      removeListeners: P
    } = te(c, $);
    return S(a, $), U(() => {
      $(), O();
    }), X(P), (e, s) => (v(), f("div", {
      class: i([e.$style.wrapper, e.isDisabled && e.$style.disabled])
    }, [
      e.label ? (v(), f("div", {
        key: 0,
        class: i(e.$style.label)
      }, V(e.label), 3)) : Y("", !0),
      w("div", {
        ref_key: "container",
        ref: c
      }, [
        j(q, {
          name: "selectorElementAppearance",
          tag: "div",
          mode: "out-in",
          class: i([
            e.$style.options,
            ...p(T)
          ]),
          onBeforeLeave: I
        }, {
          default: H(() => {
            var o;
            return [
              (v(!0), f(J, null, K(e.options, (t) => (v(), f("button", {
                ref_for: !0,
                ref: (n) => {
                  y.value[t.value] = n;
                },
                key: t.value,
                type: "button",
                class: i([
                  e.$style.item,
                  p(a) === t.value && e.$style.active,
                  p(a) === t.value && (t != null && t.activeState) ? [e.$style[t.activeState]] : [],
                  t != null && t.state ? [e.$style[t.state]] : []
                ]),
                "data-value": t.value,
                onClick: (n) => D(t)
              }, [
                Q(e.$slots, "option", {
                  option: t,
                  activeOption: p(a)
                }, () => [
                  W(V(t.label), 1)
                ])
              ], 10, le))), 128)),
              w("div", {
                key: "$ghost",
                style: Z(d.value),
                class: i([
                  e.$style.ghost,
                  e.isGhostAppearAnimation && e.$style.animated,
                  (o = k.value) != null && o.ghostState ? [
                    e.$style[k.value.ghostState]
                  ] : []
                ])
              }, null, 6)
            ];
          }),
          _: 3
        }, 8, ["class"])
      ], 512)
    ], 2));
  }
});
export {
  me as default
};
//# sourceMappingURL=Selector.vue2.js.map
