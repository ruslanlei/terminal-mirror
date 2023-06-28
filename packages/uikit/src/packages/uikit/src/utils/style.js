import { isPositive as o } from "@terminal/common/utils/number";
import { getCssVariable as s } from "./dom.js";
const i = (t) => `${t}px`, c = (t) => `rgb(${s(t)})`, g = (t) => `.${t}`, r = (t) => `+${t}`, C = (t) => `#${t}`, l = (t) => `${t}%`, $ = (t) => o(t) ? r(t) : String(t);
export {
  c as getCssRgbColor,
  g as toCssClassSelector,
  l as toCssPercentValue,
  i as toCssPxValue,
  C as toIdSelector,
  $ as toPnlString,
  r as toPositiveNumberString
};
//# sourceMappingURL=style.js.map
