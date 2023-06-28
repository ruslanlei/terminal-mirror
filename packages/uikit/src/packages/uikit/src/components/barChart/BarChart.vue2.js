import { defineComponent as l, ref as m, onMounted as s, openBlock as c, createElementBlock as u, normalizeClass as p } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { useResizeObserver as f } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/@vueuse/core/index.mjs";
import { isEqual as d } from "@terminal/common/utils/boolean";
import { compose as b } from "@terminal/common/utils/fp";
import { awaitTimeout as C } from "@terminal/common/utils/promise";
import { setMaximalScrollLeft as h } from "../../utils/element.js";
import { getRectField as n } from "../../utils/dom.js";
import { getCssRgbColor as t } from "../../utils/style.js";
import { createBarChart as g } from "./createBarChart.js";
const R = /* @__PURE__ */ l({
  __name: "BarChart",
  props: {
    data: { default: () => [] },
    barLabelFormatter: { type: Function, default: (e) => e },
    xAxisLabelFormatter: { type: Function, default: (e) => e }
  },
  setup(e) {
    const o = e, r = m(), a = async () => {
      await C(300), !(!r.value || b(
        d(0),
        n("height")
      )(r.value)) && (g({
        container: r.value,
        data: o.data,
        barLabelFormatter: o.barLabelFormatter,
        xAxisLabelFormatter: o.xAxisLabelFormatter,
        positiveBarColor: t("--color-success"),
        negativeBarColor: t("--color-danger"),
        defaultBarColor: t("--color-background-3"),
        barNameColor: t("--color-accent-2"),
        height: n("height", r.value)
      }), h(r.value));
    };
    return f(r, a), s(a), (i, v) => (c(), u("div", {
      ref_key: "container",
      ref: r,
      class: p(i.$style.barChart)
    }, null, 2));
  }
});
export {
  R as default
};
//# sourceMappingURL=BarChart.vue2.js.map
