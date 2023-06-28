import { defineComponent as m, ref as u, toRefs as f, onMounted as d, openBlock as y, createElementBlock as k, normalizeClass as o, unref as c, createElementVNode as l, toDisplayString as v, createVNode as B } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { playAnimation as $ } from "../../utils/animation.js";
import h from "../icon/Icon.vue.js";
const g = /* @__PURE__ */ m({
  __name: "Toast",
  props: {
    toast: {},
    smoothAppearance: { type: Boolean }
  },
  emits: ["close"],
  setup(i, { emit: p }) {
    const s = i, n = u(), { toast: t } = f(s), a = t == null ? void 0 : t.value.duration, r = () => {
      p("close");
    };
    return a && setTimeout(() => {
      r();
    }, a), d(() => {
      s.smoothAppearance && $({
        targets: n.value,
        translateY: [-40, 0],
        opacity: [0, 1],
        duration: 750
      });
    }), (e, A) => (y(), k("div", {
      ref_key: "toast",
      ref: n,
      class: o([
        e.$style.toast,
        e.$style[c(t).type]
      ])
    }, [
      l("div", {
        class: o(e.$style.text)
      }, v(c(t).text), 3),
      l("button", {
        class: o(e.$style.closeButton),
        onClick: r
      }, [
        B(h, { icon: "cross" })
      ], 2)
    ], 2));
  }
});
export {
  g as default
};
//# sourceMappingURL=Toast.vue2.js.map
