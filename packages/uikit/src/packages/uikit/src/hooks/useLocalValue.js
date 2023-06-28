import { computed as a } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
const m = (t, o, e = "modelValue") => {
  const u = `update:${e}`;
  return a({
    get: () => t[e],
    set: (r) => o(u, r)
  });
};
export {
  m as useLocalValue
};
//# sourceMappingURL=useLocalValue.js.map
