import { defineComponent as f, ref as v, computed as r, openBlock as i, createBlock as l, unref as n, normalizeClass as g, withCtx as t, createElementBlock as S, Fragment as B, renderList as _, renderSlot as k } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { Swiper as C, SwiperSlide as E } from "swiper/vue";
import "swiper/css";
const $ = /* @__PURE__ */ f({
  __name: "Slider",
  props: {
    gap: {},
    slidesPerView: { default: 3 },
    slides: {}
  },
  setup(P, { expose: a }) {
    const s = v(), o = (e) => {
      s.value = e;
    }, p = () => s.value.slidePrev(), d = () => s.value.slideNext(), u = r(() => s.value.isBeginning), c = r(() => s.value.isEnd);
    return a({
      prev: p,
      next: d,
      isBeginning: u,
      isEnd: c
    }), (e, b) => (i(), l(n(C), {
      class: g(e.$style.slider),
      "slides-per-view": e.slidesPerView,
      "space-between": e.gap,
      onSwiper: o
    }, {
      default: t(() => [
        (i(!0), S(B, null, _(e.slides, (m, w) => (i(), l(n(E), { key: w }, {
          default: t(() => [
            k(e.$slots, "slide", {
              slideData: m.data
            })
          ]),
          _: 2
        }, 1024))), 128))
      ]),
      _: 3
    }, 8, ["class", "slides-per-view", "space-between"]));
  }
});
export {
  $ as default
};
//# sourceMappingURL=Slider.vue2.js.map
