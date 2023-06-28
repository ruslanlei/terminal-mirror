import * as n from "./assets/arrowDown.svg.js";
import * as p from "./assets/arrowLeft.svg.js";
import * as c from "./assets/arrowRight.svg.js";
import * as f from "./assets/calendar.svg.js";
import * as g from "./assets/chartBar.svg.js";
import * as l from "./assets/check.svg.js";
import * as v from "./assets/checkGradientBlue.svg.js";
import * as d from "./assets/checkGradientOrange.svg.js";
import * as w from "./assets/checkGradientPurple.svg.js";
import * as u from "./assets/creditCard.svg.js";
import * as h from "./assets/cross.svg.js";
import * as k from "./assets/crossSpecial.svg.js";
import * as y from "./assets/cube.svg.js";
import * as C from "./assets/exit.svg.js";
import * as _ from "./assets/eyeClose.svg.js";
import * as B from "./assets/eyeOpen.svg.js";
import * as D from "./assets/fire.svg.js";
import * as A from "./assets/info.svg.js";
import * as G from "./assets/lock.svg.js";
import * as O from "./assets/pause.svg.js";
import * as x from "./assets/play.svg.js";
import * as L from "./assets/plus.svg.js";
import * as b from "./assets/rewind.svg.js";
import * as U from "./assets/search.svg.js";
import * as $ from "./assets/star.svg.js";
import * as j from "./assets/starFilled.svg.js";
import * as F from "./assets/swap.svg.js";
import * as I from "./assets/sword.svg.js";
import * as M from "./assets/textAlignLeft.svg.js";
import * as P from "./assets/tinyArrowDown.svg.js";
import * as R from "./assets/tinyArrowUp.svg.js";
import * as S from "./assets/trendingDown.svg.js";
import * as z from "./assets/trendingUp.svg.js";
import * as E from "./assets/verificationCircle.svg.js";
import { defineComponent as N, openBlock as e, createElementBlock as t, normalizeClass as q, Fragment as H, renderList as J, unref as K, createBlock as Q, resolveDynamicComponent as T } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/vue/dist/vue.runtime.esm-bundler.js";
const X = /* @__PURE__ */ N({
  __name: "IconsMap",
  setup(V) {
    const o = (s) => s.replace(/\.\/assets\/(.*)\.svg$/, "$1").split("/").map((r) => r.replace(/[\s]/g, "")).join("_"), i = Object.entries(
      /* @__PURE__ */ Object.assign({ "./assets/arrowDown.svg": n, "./assets/arrowLeft.svg": p, "./assets/arrowRight.svg": c, "./assets/calendar.svg": f, "./assets/chartBar.svg": g, "./assets/check.svg": l, "./assets/checkGradientBlue.svg": v, "./assets/checkGradientOrange.svg": d, "./assets/checkGradientPurple.svg": w, "./assets/creditCard.svg": u, "./assets/cross.svg": h, "./assets/crossSpecial.svg": k, "./assets/cube.svg": y, "./assets/exit.svg": C, "./assets/eyeClose.svg": _, "./assets/eyeOpen.svg": B, "./assets/fire.svg": D, "./assets/info.svg": A, "./assets/lock.svg": G, "./assets/pause.svg": O, "./assets/play.svg": x, "./assets/plus.svg": L, "./assets/rewind.svg": b, "./assets/search.svg": U, "./assets/star.svg": $, "./assets/starFilled.svg": j, "./assets/swap.svg": F, "./assets/sword.svg": I, "./assets/textAlignLeft.svg": M, "./assets/tinyArrowDown.svg": P, "./assets/tinyArrowUp.svg": R, "./assets/trendingDown.svg": S, "./assets/trendingUp.svg": z, "./assets/verificationCircle.svg": E })
    ).map(([s, r]) => [
      o(s),
      r.default
    ]);
    return (s, r) => (e(), t("div", {
      class: q(s.$style.iconsMap)
    }, [
      (e(!0), t(H, null, J(K(i), ([a, m]) => (e(), Q(T(m), {
        id: `icon-${a}`,
        key: a
      }, null, 8, ["id"]))), 128))
    ], 2));
  }
});
export {
  X as default
};
//# sourceMappingURL=IconsMap.vue2.js.map
