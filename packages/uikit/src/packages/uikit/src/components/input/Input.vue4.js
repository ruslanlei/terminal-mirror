import { defineComponent as T, ref as z, computed as N, resolveDirective as E, openBlock as a, createElementBlock as n, normalizeClass as t, unref as o, renderSlot as m, createTextVNode as F, toDisplayString as S, createCommentVNode as r, createElementVNode as $, withDirectives as h, isRef as P, vModelDynamic as M, createVNode as f, Transition as O, withCtx as R, nextTick as U } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { useInput as j } from "../../hooks/useInput.js";
import q from "../fieldError/FieldError.vue.js";
import A from "../icon/Icon.vue.js";
import { useComputedState as G } from "../../hooks/useComputedState.js";
const H = ["tabindex", "type", "autocomplete", "inputmode", "placeholder"], J = { key: 1 }, Z = /* @__PURE__ */ T({
  __name: "Input",
  props: {
    modelValue: { default: "" },
    label: { default: void 0 },
    placeholder: { default: void 0 },
    isDisabled: { type: Boolean, default: !1 },
    tabIndex: { default: 0 },
    disableTabNavigation: { type: Boolean, default: !1 },
    type: { default: "text" },
    autocomplete: { default: void 0 },
    inputmode: { default: void 0 },
    mask: {},
    error: {},
    state: { default: "defaultColor" },
    size: { default: "lg" },
    showErrorIcon: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "input", "focus", "blur"],
  setup(k, { expose: w, emit: I }) {
    const i = k, {
      localValue: d,
      isPasswordVisible: u,
      togglePassword: p,
      computedType: V,
      onInput: y,
      isFocused: B,
      onFocus: b,
      onBlur: v
    } = j(i, I), c = z(null), C = N(
      () => i.disableTabNavigation || i.isDisabled ? -1 : i.tabIndex
    ), g = G(i);
    return w({
      focus: async () => {
        var e, l;
        await U(), (l = (e = c.value) == null ? void 0 : e.focus) == null || l.call(e);
      },
      togglePassword: p,
      isPasswordVisible: u
    }), (e, l) => {
      const D = E("mask");
      return a(), n("label", {
        class: t([
          e.$style[e.size],
          ...o(g),
          e.isDisabled && e.$style.disabled,
          !!e.error && e.$style.error,
          o(B) && e.$style.focus
        ])
      }, [
        "label" in e.$slots || e.label ? (a(), n("span", {
          key: 0,
          class: t(e.$style.label)
        }, [
          m(e.$slots, "label", {}, () => [
            F(S(e.label), 1)
          ])
        ], 2)) : r("", !0),
        $("div", {
          class: t(e.$style.field)
        }, [
          "prepend" in e.$slots ? (a(), n("div", {
            key: 0,
            class: t(e.$style.prepend)
          }, [
            m(e.$slots, "prepend")
          ], 2)) : r("", !0),
          h($("input", {
            ref_key: "input",
            ref: c,
            "onUpdate:modelValue": l[0] || (l[0] = (s) => P(d) ? d.value = s : null),
            tabindex: C.value,
            type: o(V),
            autocomplete: e.autocomplete,
            inputmode: e.inputmode,
            placeholder: e.placeholder,
            onInput: l[1] || (l[1] = //@ts-ignore
            (...s) => o(y) && o(y)(...s)),
            onFocus: l[2] || (l[2] = //@ts-ignore
            (...s) => o(b) && o(b)(...s)),
            onBlur: l[3] || (l[3] = //@ts-ignore
            (...s) => o(v) && o(v)(...s))
          }, null, 40, H), [
            [M, o(d)],
            [D, e.mask]
          ]),
          e.type === "password" ? (a(), n("div", J, [
            f(O, {
              name: "inputPasswordIcon",
              mode: "out-in"
            }, {
              default: R(() => [
                (a(), n("button", {
                  key: o(u),
                  class: t(e.$style.passwordVisibilityButton),
                  type: "button",
                  tabindex: -1,
                  onClick: l[4] || (l[4] = //@ts-ignore
                  (...s) => o(p) && o(p)(...s))
                }, [
                  f(A, {
                    icon: o(u) ? "eyeOpen" : "eyeClose"
                  }, null, 8, ["icon"])
                ], 2))
              ]),
              _: 1
            })
          ])) : r("", !0),
          "append" in e.$slots ? (a(), n("div", {
            key: 2,
            class: t(e.$style.append)
          }, [
            m(e.$slots, "append")
          ], 2)) : r("", !0)
        ], 2),
        f(q, {
          text: e.error,
          class: t(e.$style.errorMessage),
          offset: 6,
          size: e.size,
          "show-icon": e.showErrorIcon
        }, null, 8, ["text", "class", "size", "show-icon"])
      ], 2);
    };
  }
});
export {
  Z as default
};
//# sourceMappingURL=Input.vue4.js.map
