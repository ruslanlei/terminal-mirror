import { defineComponent as t, inject as o, openBlock as s, createElementBlock as a, normalizeClass as l, unref as r } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { SkeletonContainerIdInjectionKey as c } from "../skeletonContainer/index2.js";
const i = ["data-skeleton-id"], k = /* @__PURE__ */ t({
  __name: "Skeleton",
  setup(d) {
    const e = o(c);
    return (n, m) => (s(), a("div", {
      class: l(n.$style.skeleton),
      "data-skeleton-id": r(e)
    }, null, 10, i));
  }
});
export {
  k as default
};
//# sourceMappingURL=Skeleton.vue2.js.map
