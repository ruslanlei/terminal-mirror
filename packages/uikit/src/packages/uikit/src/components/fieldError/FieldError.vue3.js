import { defineComponent as g, ref as a, computed as i, watch as $, onMounted as z, onBeforeUnmount as k, openBlock as u, createElementBlock as B, normalizeStyle as p, normalizeClass as t, createElementVNode as d, createBlock as E, createCommentVNode as S, renderSlot as w, createTextVNode as C, toDisplayString as I } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { useEnvironmentObserver as V } from "../../hooks/useEnvironmentObserver.js";
import N from "../icon/Icon.vue.js";
const x = /* @__PURE__ */ g({
  __name: "FieldError",
  props: {
    text: {},
    size: { default: "lg" },
    showIcon: { type: Boolean, default: !0 },
    offset: { default: 0 }
  },
  setup(f) {
    const o = f, n = a(), c = a(), s = i(() => !!o.text), r = a({
      height: "0px"
    }), l = () => {
      if (s.value) {
        if (!n.value)
          return;
        const e = n.value.getBoundingClientRect();
        r.value.height = `${e.height}px`;
      } else
        r.value.height = "0px";
    }, m = i(() => ({
      paddingTop: `${o.offset}px`
    })), y = i(() => ({
      sm: 12,
      lg: 18
    })[o.size]), {
      setListeners: h,
      removeListeners: v
    } = V(c, l);
    return $(s, l), z(() => {
      l(), h();
    }), k(v), (e, b) => (u(), B("div", {
      ref_key: "wrapper",
      ref: c,
      style: p(r.value),
      class: t([
        e.$style[e.size],
        e.$style.fieldError,
        !s.value && e.$style.hidden
      ])
    }, [
      d("div", {
        ref_key: "container",
        ref: n,
        class: t(e.$style.fieldErrorContainer),
        style: p(m.value)
      }, [
        e.showIcon ? (u(), E(N, {
          key: 0,
          class: t(e.$style.icon),
          icon: "info",
          size: y.value
        }, null, 8, ["class", "size"])) : S("", !0),
        d("span", {
          class: t(e.$style.text)
        }, [
          w(e.$slots, "default", {}, () => [
            C(I(e.text), 1)
          ])
        ], 2)
      ], 6)
    ], 6));
  }
});
export {
  x as default
};
//# sourceMappingURL=FieldError.vue3.js.map
