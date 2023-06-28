import { defineComponent as n, computed as t, openBlock as r, createBlock as a } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import p from "../icon/Icon.vue.js";
const m = /* @__PURE__ */ n({
  __name: "GradientCheckIcon",
  props: {
    state: {},
    value: { type: Boolean }
  },
  setup(c) {
    const e = c, o = t(() => e.value ? {
      purple: "checkGradientPurple",
      orange: "checkGradientOrange",
      blue: "checkGradientBlue"
    }[e.state] : "crossSpecial");
    return (l, u) => (r(), a(p, {
      size: 32,
      icon: o.value
    }, null, 8, ["icon"]));
  }
});
export {
  m as default
};
//# sourceMappingURL=GradientCheckIcon.vue.js.map
