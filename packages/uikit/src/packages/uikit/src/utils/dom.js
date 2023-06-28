import { curry as o, compose as n } from "@terminal/common/utils/fp";
import { toArray as y, reduce as l } from "@terminal/common/utils/array";
const S = (e) => getComputedStyle(document.body).getPropertyValue(e), i = (e) => document.querySelectorAll(e), u = (e) => document.querySelector(e), P = (e, r) => r.querySelector(e), f = (e) => document.getElementById(e), c = o((e, r) => (Array.isArray(e) ? e.forEach((s) => {
  r.style.removeProperty(s);
}) : r.style.removeProperty(e), r)), p = o((e, r) => (Array.isArray(r) ? r.forEach(c(e)) : c(e, r), r)), E = o((e, r) => {
  const [
    t,
    s
  ] = e;
  return r.style[t] = String(s), r;
}), a = (e) => e.getBoundingClientRect(), A = o((e, r) => a(r)[e]), C = (e) => n(
  y,
  i
)(e), q = (e) => l(
  (r, t) => r === "" ? `${t}` : `${r}, ${t}`,
  "",
  e
), d = o(
  (e, r) => (r.href = e, r)
), v = (e) => {
  n(
    d(e),
    u
  )('link[rel="icon"]');
};
export {
  E as addCssProperty,
  C as arrayOfElements,
  q as collectSrcSet,
  S as getCssVariable,
  f as getElementById,
  a as getRect,
  A as getRectField,
  P as queryChildSelector,
  u as querySelector,
  i as querySelectorAll,
  p as removeCssProperty,
  v as setFavicon,
  d as setHref
};
//# sourceMappingURL=dom.js.map
