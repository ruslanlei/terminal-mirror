import { computed as d } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { SortDirection as s } from "../components/table/index2.js";
import { useLocalValue as r } from "./useLocalValue.js";
const w = (l, t) => {
  const c = r(
    l,
    t,
    "selectedRecords"
  ), S = d(
    () => {
      var e;
      return ((e = c.value) == null ? void 0 : e.length) === l.records.length;
    }
  ), f = () => {
    S.value ? c.value = [] : c.value = l.records.map((e) => e.id);
  }, i = r(l, t, "sortBy"), o = r(l, t, "sortDirection"), R = (e) => {
    e.isSelect && f(), e.sortable && (i.value === null ? (i.value = e.slug, o.value = s.ASC) : o.value === s.ASC ? o.value = s.DESC : (i.value = null, o.value = s.ASC));
  }, v = (e) => {
    if (!l.isSelectable)
      return;
    c.value.includes(e) ? c.value = c.value.filter(
      (u) => u !== e
    ) : c.value.push(e);
  }, k = (e, a, u, n) => {
    a.isSelect && v(u.id), a.isClickable ? e.stopPropagation() : n == null || n();
  }, C = d(() => l.records.map(
    (e) => ({
      ...e,
      ...l.isSelectable ? {
        isSelected: c.value.includes(e.id)
      } : {}
    })
  ));
  return {
    localSelectedRecords: c,
    isAllRecordsSelected: S,
    onColumnClick: R,
    toggleRecordSelect: v,
    onCellClick: k,
    computedRecords: C,
    onRowClick: (e) => {
      l.isRowsClickable && t("record-click", e);
    }
  };
};
export {
  w as useTable
};
//# sourceMappingURL=useTable.js.map
