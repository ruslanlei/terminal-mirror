import { defineComponent as h, toRefs as L, ref as a, onMounted as p, onBeforeUnmount as r, watch as k, openBlock as A, createElementBlock as B } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import C from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/lottie-web/build/player/lottie.js";
import { useIntersectionObserver as E } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/@vueuse/core/index.mjs";
import { useEnvironmentObserver as R } from "../../hooks/useEnvironmentObserver.js";
const T = /* @__PURE__ */ h({
  __name: "Lottie",
  props: {
    path: {}
  },
  emits: ["dataReady"],
  setup(c, { emit: v }) {
    const d = c, {
      path: s
    } = L(d), n = a(), o = a(), i = () => {
      var e, t;
      o.value = C.loadAnimation({
        container: n.value,
        renderer: "svg",
        loop: !0,
        autoplay: !0,
        path: s.value
      }), (e = o.value) == null || e.addEventListener("data_ready", () => {
        v("dataReady");
      }), (t = o.value) == null || t.pause();
    };
    p(i);
    const u = () => {
      var e;
      (e = o.value) == null || e.destroy();
    };
    r(u), k(s, () => {
      u(), i();
    });
    const l = a(), {
      setListeners: f,
      removeListeners: y
    } = R(n, () => {
      var e;
      clearTimeout(l.value), (e = o.value) == null || e.pause(), l.value = setTimeout(() => {
        var t;
        (t = o.value) == null || t.play();
      }, 300);
    }, !0);
    p(f), r(y);
    const { stop: _ } = E(
      n,
      ([{ isIntersecting: e }]) => {
        var t, m;
        e ? (t = o.value) == null || t.play() : (m = o.value) == null || m.pause();
      }
    );
    return r(_), (e, t) => (A(), B("div", {
      ref_key: "lottieContainer",
      ref: n
    }, null, 512));
  }
});
export {
  T as default
};
//# sourceMappingURL=Lottie.vue.js.map
