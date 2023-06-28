import { defineComponent as S, ref as o, computed as k, reactive as w, watch as b, nextTick as B, onMounted as V, onBeforeUnmount as E, openBlock as c, createElementBlock as d, normalizeClass as n, unref as M, createElementVNode as m, normalizeStyle as u, renderSlot as h, createCommentVNode as p } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { useComputedState as R } from "../../../hooks/useComputedState.js";
import { useEnvironmentObserver as T } from "../../../hooks/useEnvironmentObserver.js";
const U = /* @__PURE__ */ S({
  __name: "TableRow",
  props: {
    columns: {},
    record: {},
    gridColumns: {},
    state: {}
  },
  setup(y) {
    const l = y, i = o(), s = o(), f = k(() => ({
      gridTemplateColumns: l.gridColumns
    })), v = R(l), r = w({
      height: "0px",
      transition: "height 160ms"
    }), t = o(!1), C = () => {
      t.value = !t.value;
    }, a = () => {
      if (t.value && s.value) {
        const { height: e } = s.value.getBoundingClientRect();
        r.height = `${e}px`, r.transition = `height ${Math.min(Math.max(e * 3, 160), 300)}ms`;
      } else
        r.height = "0px";
    };
    b(t, async () => {
      await B(), a();
    });
    const {
      setListeners: g,
      removeListeners: $
    } = T(i, a);
    return V(g), E($), (e, z) => (c(), d("div", {
      ref_key: "row",
      ref: i,
      class: n([
        e.$style.recordWrapper,
        t.value && e.$style.childrenVisible,
        ...M(v)
      ])
    }, [
      m("div", {
        class: n([
          e.$style.record,
          e.record.isSelected && e.$style.selected
        ]),
        style: u(f.value)
      }, [
        h(e.$slots, "default", { toggleChildren: C })
      ], 6),
      "children" in e.$slots ? (c(), d("div", {
        key: 0,
        class: n(e.$style.childrenContainer),
        style: u(r)
      }, [
        m("div", {
          ref_key: "children",
          ref: s,
          class: n(e.$style.children)
        }, [
          t.value ? h(e.$slots, "children", {
            key: 0,
            data: e.record.children
          }) : p("", !0)
        ], 2)
      ], 6)) : p("", !0)
    ], 2));
  }
});
export {
  U as default
};
//# sourceMappingURL=TableRow.vue3.js.map
