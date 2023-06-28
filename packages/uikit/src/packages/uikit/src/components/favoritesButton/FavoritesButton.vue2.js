import { defineComponent as s, openBlock as u, createBlock as m, unref as p, isRef as i, normalizeClass as c, withCtx as d, createVNode as f } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { useLocalValue as V } from "../../hooks/useLocalValue.js";
import B from "../toggleButton/ToggleButton.vue.js";
import v from "../icon/Icon.vue.js";
const y = /* @__PURE__ */ s({
  __name: "FavoritesButton",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: t }) {
    const e = V(l, t), a = () => {
      e.value = !e.value;
    };
    return (n, o) => (u(), m(B, {
      modelValue: p(e),
      "onUpdate:modelValue": o[0] || (o[0] = (r) => i(e) ? e.value = r : null),
      class: c(n.$style.favoritesButton),
      onClick: a
    }, {
      default: d(() => [
        f(v, { icon: "starFilled" })
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
});
export {
  y as default
};
//# sourceMappingURL=FavoritesButton.vue2.js.map
