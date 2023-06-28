import { defineComponent as k, ref as s, computed as p, watch as R, onMounted as y, onBeforeUnmount as D, openBlock as O, createElementBlock as X, normalizeClass as u, withModifiers as _, createElementVNode as g, normalizeStyle as S } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { divide as C, subtractRight as N, multiply as T, subtract as r, roundNumber as U, add as F, divideRight as j } from "@terminal/common/utils/number";
import { compose as h } from "@terminal/common/utils/fp";
import { useEnvironmentObserver as q } from "../../hooks/useEnvironmentObserver.js";
import { useLocalValue as x } from "../../hooks/useLocalValue.js";
import { awaitFrame as A } from "../../utils/window.js";
import { getRect as G } from "../../utils/dom.js";
const H = ["onMousedown"], te = /* @__PURE__ */ k({
  __name: "RangeSlider",
  props: {
    modelValue: {},
    min: { default: 0 },
    max: { default: 100 }
  },
  emits: ["update:modelValue"],
  setup(E, { emit: b }) {
    const i = E, d = s(), t = s({
      beginningLeft: 0,
      endLeft: 0,
      width: 0
    }), w = p(() => h(
      C(t.value.width),
      N
    )(i.min, i.max)), m = () => {
      const {
        left: e,
        width: o
      } = G(d.value);
      t.value.beginningLeft = e, t.value.endLeft = e + o, t.value.width = o;
    }, c = x(i, b, "modelValue"), M = (e) => {
      c.value = h(
        U,
        F(i.min),
        j(w.value)
      )(e);
    }, l = s(0), V = p(() => ({
      transform: `translateX(${l.value}px)`
    })), a = () => {
      l.value = T(r(c.value, i.min), w.value);
    }, n = s(!1), v = (e) => {
      const o = r(e.clientX, t.value.beginningLeft);
      let f = o;
      o < 0 && (f = 0), r(t.value.endLeft, e.clientX) <= 0 && (f = r(t.value.endLeft, t.value.beginningLeft)), l.value = f, M(l.value);
    };
    R(c, () => {
      n.value || a();
    });
    const L = () => {
      n.value = !1, a(), window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", L);
    }, $ = async (e) => {
      m(), await A(), n.value = !0, v(e), window.addEventListener("mousemove", v), window.addEventListener("mouseup", L);
    };
    y(a);
    const z = p(() => ({
      width: `${l.value}px`
    })), {
      setListeners: P,
      removeListeners: B
    } = q(d, () => {
      m(), n.value || a();
    });
    return y(() => {
      m(), P();
    }), D(B), (e, o) => (O(), X("div", {
      ref_key: "slider",
      ref: d,
      class: u(e.$style.rangeSlider),
      onMousedown: _($, ["prevent"])
    }, [
      g("div", {
        class: u(e.$style.track)
      }, null, 2),
      g("div", {
        style: S(z.value),
        class: u([e.$style.progress, !n.value && e.$style.animated])
      }, null, 6),
      g("div", {
        style: S(V.value),
        class: u([e.$style.pointer, !n.value && e.$style.animated])
      }, null, 6)
    ], 42, H));
  }
});
export {
  te as default
};
//# sourceMappingURL=RangeSlider.vue2.js.map
