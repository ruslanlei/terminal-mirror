import { computed as e } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { useCssModules as m } from "./useCssModules.js";
import { arrayFrom as s } from "@terminal/common/utils/array";
const c = (t) => {
  const {
    $style: o
  } = m();
  return e(() => s(t.state).map((r) => o[r]));
};
export {
  c as useComputedState
};
//# sourceMappingURL=useComputedState.js.map
