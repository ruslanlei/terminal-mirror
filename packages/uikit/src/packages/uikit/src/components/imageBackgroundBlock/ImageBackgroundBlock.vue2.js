import { defineComponent as a, openBlock as n, createElementBlock as o, normalizeClass as s, createElementVNode as r, renderSlot as t, createVNode as l } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import c from "../picture/Picture.vue.js";
const u = /* @__PURE__ */ a({
  __name: "ImageBackgroundBlock",
  props: {
    srcset: {},
    src: {},
    contentClass: {},
    interactive: { type: Boolean }
  },
  setup(i) {
    return (e, p) => (n(), o("div", {
      class: s([e.$style.wrapper, e.interactive && e.$style.interactive])
    }, [
      r("div", {
        class: s(e.$style.backgroundImageContainer)
      }, [
        t(e.$slots, "picture", {}, () => [
          l(c, {
            class: s(e.$style.backgroundImage),
            src: e.src,
            srcset: e.srcset,
            alt: "",
            "transition-duration": 1400
          }, null, 8, ["class", "src", "srcset"])
        ])
      ], 2),
      r("div", {
        class: s([e.contentClass, e.$style.content])
      }, [
        t(e.$slots, "default")
      ], 2)
    ], 2));
  }
});
export {
  u as default
};
//# sourceMappingURL=ImageBackgroundBlock.vue2.js.map
