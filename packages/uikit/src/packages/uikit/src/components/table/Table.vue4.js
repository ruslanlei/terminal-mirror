import { defineComponent as N, computed as c, ref as I, onMounted as O, openBlock as s, createElementBlock as o, normalizeClass as a, unref as r, createVNode as y, Transition as F, withCtx as u, normalizeStyle as G, Fragment as f, renderList as b, renderSlot as m, createTextVNode as M, toDisplayString as Q, createCommentVNode as W, TransitionGroup as Y, createSlots as j } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import v from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/animejs/lib/anime.es.js";
import { uuid as q } from "@terminal/common/utils/uuid";
import { compose as g } from "@terminal/common/utils/fp";
import { awaitTimeout as J } from "@terminal/common/utils/promise";
import { filter as K, forEach as U } from "@terminal/common/utils/array";
import { useTable as X } from "../../hooks/useTable.js";
import Z from "./tableRow/TableRow.vue2.js";
import { useComputedState as _ } from "../../hooks/useComputedState.js";
import { playAnimation as x } from "../../utils/animation.js";
import { toCssPxValue as ee } from "../../utils/style.js";
import { getRect as C, addCssProperty as S, arrayOfElements as w, removeCssProperty as te } from "../../utils/dom.js";
const se = ["onClick"], oe = ["data-table-element-id"], le = ["onClick"], ge = /* @__PURE__ */ N({
  __name: "Table",
  props: {
    columns: {},
    records: {},
    selectedRecords: {},
    isSelectable: { type: Boolean },
    gridColumns: {},
    sortBy: {},
    sortDirection: {},
    state: {},
    isRowsClickable: { type: Boolean },
    isHeadVisible: { type: Boolean, default: !0 },
    showHeadWhileEmpty: { type: Boolean, default: !1 },
    animationDelay: { default: 0 },
    appearanceAnimationType: { default: "elevating" }
  },
  emits: ["update:selectedRecords", "record-click"],
  setup(R, { emit: T }) {
    const d = R, $ = c(() => d.columns.reduce(
      (e, l) => {
        const t = typeof l.size == "string" ? l.size : `${l.size}fr`;
        return `${e} ${t}`;
      },
      ""
    )), B = c(() => ({
      gridTemplateColumns: $.value
    })), A = _(d), {
      isAllRecordsSelected: D,
      onColumnClick: z,
      onCellClick: V,
      computedRecords: h,
      onRowClick: E
    } = X(d, T), k = I(q()), p = c(
      () => `[data-table-element-id="${k.value}"]`
    ), H = (e) => {
      const {
        height: l
      } = C(e);
      g(
        S(["zIndex", 1]),
        S(["height", ee(l)])
      )(e);
    }, P = async () => {
      const e = () => {
        v.remove(p.value), g(
          te(["opacity", "transform"]),
          w
        )(p.value);
      }, l = g(
        K((t) => {
          if (!t.offsetParent)
            return !1;
          const {
            height: i
          } = C(t.offsetParent), {
            top: n
          } = C(t);
          return t.offsetTop < i && n < window.innerHeight;
        }),
        w
      )(p.value);
      U((t) => {
        t.style.opacity = "0";
      }, l), d.animationDelay && await J(d.animationDelay), await x({
        targets: l,
        translateY: [200, 0],
        opacity: {
          value: [0, 1],
          delay: 100
        },
        ...d.appearanceAnimationType === "bubbling" ? {
          scale: [0, 1]
        } : {},
        duration: 700,
        easing: "easeOutQuint",
        delay: v.stagger(40, { from: "first" }),
        loopComplete: e
      });
    };
    return O(() => {
      P();
    }), (e, l) => (s(), o("table", {
      class: a([
        e.$style.table,
        e.isRowsClickable && e.$style.rowsClickable,
        ...r(A)
      ])
    }, [
      y(F, {
        mode: "out-in",
        name: "skeletonTransition"
      }, {
        default: u(() => [
          r(h).length ? (s(), o("div", {
            key: 0,
            class: a(e.$style.tableContent)
          }, [
            e.isHeadVisible ? (s(), o("div", {
              key: 0,
              style: G(B.value),
              class: a(e.$style.head)
            }, [
              (s(!0), o(f, null, b(e.columns, (t) => (s(), o("button", {
                key: t.slug,
                type: "button",
                class: a([
                  e.$style.column,
                  e.$style[t.align],
                  (t.sortable || t.isSelect) && e.$style.clickable
                ]),
                onClick: (i) => r(z)(t)
              }, [
                m(e.$slots, `column(${t.slug})`, {
                  column: t,
                  data: t.data,
                  label: t.label,
                  slug: t.slug,
                  isAllRecordsSelected: r(D),
                  isSortedBy: e.sortBy === t.slug,
                  sortDirection: e.sortDirection,
                  isSortedAsc: e.sortBy === t.slug && e.sortDirection === "asc",
                  isSortedDesc: e.sortBy === t.slug && e.sortDirection === "desc"
                }, () => [
                  M(Q(t.label), 1)
                ])
              ], 10, se))), 128))
            ], 6)) : W("", !0),
            y(Y, {
              tag: "div",
              class: a(e.$style.records),
              name: "tableElementAppearance",
              onBeforeLeave: H
            }, {
              default: u(() => [
                (s(!0), o(f, null, b(r(h), (t) => (s(), o("tr", {
                  key: t.id,
                  class: a(e.$style.tableRowContainer),
                  "data-table-element-id": k.value
                }, [
                  y(Z, {
                    "grid-columns": $.value,
                    record: t,
                    columns: e.columns,
                    state: [
                      ...e.state,
                      ...t != null && t.state ? t.state : []
                    ],
                    class: a(e.$style.tableRow),
                    onClick: (i) => r(E)(t)
                  }, j({
                    default: u(({ toggleChildren: i }) => [
                      (s(!0), o(f, null, b(e.columns, (n) => (s(), o("button", {
                        key: n.slug,
                        type: "button",
                        class: a([
                          e.$style.recordColumn,
                          e.$style[n.align]
                        ]),
                        onClick: (L) => r(V)(L, n, t, i)
                      }, [
                        m(e.$slots, `cell(${n.slug})`, {
                          record: t,
                          data: t.data[n.slug],
                          isSelected: t.isSelected
                        })
                      ], 10, le))), 128))
                    ]),
                    _: 2
                  }, [
                    t.children && "recordChildren" in e.$slots ? {
                      name: "children",
                      fn: u(({ data: i }) => [
                        m(e.$slots, "recordChildren", { children: i })
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["grid-columns", "record", "columns", "state", "class", "onClick"])
                ], 10, oe))), 128))
              ]),
              _: 3
            }, 8, ["class"])
          ], 2)) : (s(), o("div", {
            key: 1,
            class: a(e.$style.placeholder)
          }, [
            m(e.$slots, "placeholder")
          ], 2))
        ]),
        _: 3
      })
    ], 2));
  }
});
export {
  ge as default
};
//# sourceMappingURL=Table.vue4.js.map
