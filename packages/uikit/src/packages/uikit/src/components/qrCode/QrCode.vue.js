import { defineComponent as i, ref as d, computed as c, onMounted as s, openBlock as a, createElementBlock as f } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import p from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/qrcode-svg/lib/qrcode.js";
import u from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/dompurify/dist/purify.es.js";
const l = ["innerHTML"], h = /* @__PURE__ */ i({
  __name: "QrCode",
  props: {
    text: {},
    size: { default: 200 }
  },
  setup(n) {
    const e = n, o = d(), r = c(() => u.sanitize(o.value));
    return s(() => {
      const t = new p({
        content: e.text,
        padding: 0,
        width: e.size,
        height: e.size,
        color: "#1D1F2B",
        background: "#ffffff"
      });
      o.value = t.svg();
    }), (t, C) => (a(), f("div", { innerHTML: r.value }, null, 8, l));
  }
});
export {
  h as default
};
//# sourceMappingURL=QrCode.vue.js.map
