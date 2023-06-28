import { defineComponent as i, provide as s, onMounted as a, onBeforeUnmount as m, openBlock as l, createElementBlock as p, normalizeClass as f, unref as u, renderSlot as c } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import o from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/animejs/lib/anime.es.js";
import { uuid as d } from "@terminal/common/utils/uuid";
import { playAnimation as _ } from "../../utils/animation.js";
import { useCssModules as k } from "../../hooks/useCssModules.js";
import { SkeletonContainerIdInjectionKey as C } from "./index2.js";
import { skeletonSelector as t } from "../skeleton/index2.js";
const j = /* @__PURE__ */ i({
  __name: "SkeletonContainer",
  setup(y) {
    const { $style: n } = k(), e = d();
    return s(C, e), a(() => {
      _({
        targets: t(e),
        opacity: [1, 0.55, 1],
        scale: [1, 0.99, 1],
        loop: !0,
        delay: o.stagger(160, { from: "first" }),
        easing: "easeInOutSine",
        duration: 850
      });
    }), m(() => {
      o.remove(t(e));
    }), (r, S) => (l(), p("div", {
      class: f(u(n).skeletonContainer)
    }, [
      c(r.$slots, "default")
    ], 2));
  }
});
export {
  j as default
};
//# sourceMappingURL=SkeletonContainer.vue3.js.map
