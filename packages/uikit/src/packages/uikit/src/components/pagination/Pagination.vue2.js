import { defineComponent as L, computed as y, openBlock as l, createElementBlock as b, normalizeClass as o, createBlock as i, withCtx as u, createVNode as V, createCommentVNode as c, unref as S, createTextVNode as f, toDisplayString as g, Fragment as A, renderList as D } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { useLocalValue as E } from "../../hooks/useLocalValue.js";
import d from "../button/Button.vue.js";
import p from "../icon/Icon.vue.js";
const $ = "...", q = /* @__PURE__ */ L({
  __name: "Pagination",
  props: {
    modelValue: {},
    totalPages: {},
    visiblePageCount: { default: 5 }
  },
  emits: ["update:modelValue"],
  setup(w, { emit: z }) {
    const t = w, v = E(t, z, "modelValue"), P = (e, s, a) => {
      const C = Math.floor(e / 2);
      let k = Math.max(s - C, 1), r = k + e - 1;
      return r > a ? (r = a, k = Math.max(r - e + 1, 1)) : r < a - 2 && (r = Math.min(a, r + 1)), Array.from({ length: r - k + 1 }, (F, M) => M + k);
    }, n = y(() => P(t.visiblePageCount, t.modelValue, t.totalPages)), h = y(() => t.modelValue > 1), B = y(() => t.modelValue < t.totalPages), m = (e) => {
      e >= 1 && e <= t.totalPages && (v.value = e);
    };
    return (e, s) => (l(), b("div", {
      class: o(e.$style.pagination)
    }, [
      h.value ? (l(), i(d, {
        key: 0,
        "is-wide": !1,
        size: "sm",
        state: ["interactive", "secondary1Color", "background3"],
        class: o(e.$style.button),
        onClick: s[0] || (s[0] = (a) => m(e.modelValue - 1))
      }, {
        default: u(() => [
          V(p, {
            icon: "arrowLeft",
            size: 18
          })
        ]),
        _: 1
      }, 8, ["class"])) : c("", !0),
      n.value[0] !== 1 ? (l(), i(d, {
        key: 1,
        size: "sm",
        "is-wide": !1,
        state: [
          "interactive",
          "secondary1Color",
          S(v) === 1 ? "background3" : "background2"
        ],
        class: o(e.$style.button),
        onClick: s[1] || (s[1] = (a) => m(1))
      }, {
        default: u(() => [
          f(" 1 ")
        ]),
        _: 1
      }, 8, ["state", "class"])) : c("", !0),
      n.value[0] > 2 ? (l(), i(d, {
        key: 2,
        size: "sm",
        "is-wide": !1,
        state: [
          "interactive",
          "secondary1Color",
          "background2"
        ],
        class: o(e.$style.button),
        disabled: ""
      }, {
        default: u(() => [
          f(g($))
        ]),
        _: 1
      }, 8, ["class"])) : c("", !0),
      (l(!0), b(A, null, D(n.value, (a) => (l(), i(d, {
        key: a,
        size: "sm",
        "is-wide": !1,
        state: [
          "interactive",
          "secondary1Color",
          a === e.modelValue ? "background3" : "background2"
        ],
        class: o(e.$style.button),
        onClick: (C) => m(a)
      }, {
        default: u(() => [
          f(g(a), 1)
        ]),
        _: 2
      }, 1032, ["state", "class", "onClick"]))), 128)),
      n.value[n.value.length - 1] < t.totalPages - 1 ? (l(), i(d, {
        key: 3,
        size: "sm",
        "is-wide": !1,
        state: [
          "interactive",
          "secondary1Color",
          "background2"
        ],
        class: o(e.$style.button),
        disabled: ""
      }, {
        default: u(() => [
          f(g($))
        ]),
        _: 1
      }, 8, ["class"])) : c("", !0),
      n.value[n.value.length - 1] !== t.totalPages ? (l(), i(d, {
        key: 4,
        size: "sm",
        "is-wide": !1,
        state: [
          "interactive",
          "secondary1Color",
          t.totalPages === e.modelValue ? "background3" : "background2"
        ],
        class: o(e.$style.button),
        onClick: s[2] || (s[2] = (a) => m(t.totalPages))
      }, {
        default: u(() => [
          f(g(t.totalPages), 1)
        ]),
        _: 1
      }, 8, ["state", "class"])) : c("", !0),
      B.value ? (l(), i(d, {
        key: 5,
        "is-wide": !1,
        size: "sm",
        state: ["interactive", "secondary1Color", "background3"],
        class: o(e.$style.button),
        onClick: s[3] || (s[3] = (a) => m(e.modelValue + 1))
      }, {
        default: u(() => [
          V(p, {
            icon: "arrowRight",
            size: 18
          })
        ]),
        _: 1
      }, 8, ["class"])) : c("", !0)
    ], 2));
  }
});
export {
  q as default
};
//# sourceMappingURL=Pagination.vue2.js.map
