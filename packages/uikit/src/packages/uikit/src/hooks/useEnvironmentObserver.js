import { useResizeObserver as d } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/@vueuse/core/index.mjs";
import { onMounted as v, onBeforeUnmount as w } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
const f = (i, e, n = !1, s = !0) => {
  const {
    stop: o
  } = d(i, e);
  s || o();
  const t = () => {
    window.addEventListener("resize", e), window.addEventListener("orientationchange", e), n && window.addEventListener("scroll", e);
  }, r = () => {
    window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e), n && window.removeEventListener("scroll", e), o();
  };
  return v(t), w(r), {
    setListeners: t,
    removeListeners: r
  };
};
export {
  f as useEnvironmentObserver
};
//# sourceMappingURL=useEnvironmentObserver.js.map
