import { defineComponent as a, openBlock as l, createBlock as n, normalizeClass as o, withCtx as r, createElementVNode as s, createVNode as t, createElementBlock as d, createCommentVNode as c, renderSlot as i } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import m from "../card/Card.vue.js";
import p from "../loader/Loader.vue.js";
import f from "../icon/Icon.vue.js";
const k = /* @__PURE__ */ a({
  __name: "Modal",
  props: {
    label: {},
    isLoading: { type: Boolean, default: !1 },
    showClose: { type: Boolean },
    contentClass: {}
  },
  setup(u) {
    return (e, C) => (l(), n(m, {
      class: o(e.$style.modal)
    }, {
      default: r(() => [
        s("div", {
          class: o({
            [e.$style.loader]: !0,
            [e.$style.active]: e.isLoading
          })
        }, [
          t(p)
        ], 2),
        s("div", {
          class: o([e.$style.content, e.contentClass])
        }, [
          e.showClose ? (l(), d("div", {
            key: 0,
            class: o(e.$style.closeContainer)
          }, [
            s("button", {
              class: o(e.$style.closeButton)
            }, [
              t(f, { icon: "cross" })
            ], 2)
          ], 2)) : c("", !0),
          i(e.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  k as default
};
//# sourceMappingURL=Modal.vue2.js.map
