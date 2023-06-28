import { defineComponent as o, openBlock as r, createBlock as a, normalizeClass as s, withCtx as e, renderSlot as l, createVNode as p, createTextVNode as n, toDisplayString as i } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { useI18n as c } from "../../../../../node_modules/vue-i18n/dist/vue-i18n.esm-bundler.js";
import m from "../typography/Typography.vue.js";
import d from "../card/Card.vue.js";
const h = /* @__PURE__ */ o({
  __name: "Tooltip",
  props: {
    text: {}
  },
  setup(f) {
    return c(), (t, u) => (r(), a(d, {
      class: s(t.$style.tooltip),
      state: "accent3Transparent"
    }, {
      default: e(() => [
        l(t.$slots, "default", {}, () => [
          p(m, {
            size: "title4",
            state: ["semiBold", "accent1"]
          }, {
            default: e(() => [
              n(i(t.text), 1)
            ]),
            _: 1
          })
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  h as default
};
//# sourceMappingURL=Tooltip.vue2.js.map
