import { defineComponent as l, openBlock as i, createBlock as n, normalizeClass as a, withCtx as t, createElementVNode as d, createVNode as s, createTextVNode as r, toDisplayString as o } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { useI18n as p } from "../../../../../node_modules/vue-i18n/dist/vue-i18n.esm-bundler.js";
import m from "../imageBackgroundBlock/ImageBackgroundBlock.vue.js";
import c from "../typography/Typography.vue.js";
const D = /* @__PURE__ */ l({
  __name: "PhotoCard",
  props: {
    cardData: {}
  },
  setup(u) {
    return p(), (e, f) => (i(), n(m, {
      srcset: e.cardData.imageSrcSet,
      class: a(e.$style.photoCard),
      interactive: !0
    }, {
      default: t(() => [
        d("div", {
          class: a(e.$style.content)
        }, [
          s(c, {
            state: ["accent1", "bold"],
            size: "h2",
            class: a(e.$style.label)
          }, {
            default: t(() => [
              r(o(e.cardData.label), 1)
            ]),
            _: 1
          }, 8, ["class"]),
          s(c, {
            state: ["accent2", "medium"],
            size: "textLg",
            class: a(e.$style.description)
          }, {
            default: t(() => [
              r(o(e.cardData.description), 1)
            ]),
            _: 1
          }, 8, ["class"])
        ], 2)
      ]),
      _: 1
    }, 8, ["srcset", "class"]));
  }
});
export {
  D as default
};
//# sourceMappingURL=PhotoCard.vue2.js.map
