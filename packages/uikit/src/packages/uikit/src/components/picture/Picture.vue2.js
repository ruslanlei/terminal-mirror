import { defineComponent as u, toRefs as m, ref as d, computed as p, watch as f, openBlock as v, createElementBlock as y, normalizeClass as h, normalizeStyle as $, unref as a } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
const g = ["src", "srcset", "alt"], E = /* @__PURE__ */ u({
  __name: "Picture",
  props: {
    src: {},
    srcset: {},
    alt: {},
    transitionDuration: { default: 200 },
    isFill: { type: Boolean }
  },
  setup(n) {
    const r = n, {
      src: t,
      srcset: l,
      transitionDuration: i
    } = m(r), s = d(!1), c = p(() => ({
      transition: `opacity ${i.value}ms`
    })), o = () => {
      const e = document.createElement("img");
      t != null && t.value && (e.src = t.value), l != null && l.value && (e.srcset = l.value), e.style.display = "none", e.onload = () => {
        s.value = !0, e.remove();
      }, document.documentElement.appendChild(e);
    };
    return o(), f([t, l], () => {
      s.value = !1, o();
    }), (e, B) => (v(), y("img", {
      class: h([
        e.$style.picture,
        e.isFill && e.$style.fill,
        s.value && e.$style.loaded
      ]),
      style: $(c.value),
      src: a(t),
      srcset: a(l),
      alt: e.alt
    }, null, 14, g));
  }
});
export {
  E as default
};
//# sourceMappingURL=Picture.vue2.js.map
