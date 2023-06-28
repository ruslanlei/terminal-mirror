import t from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/animejs/lib/anime.es.js";
const m = (e) => new Promise((o) => {
  t({
    ...e,
    autoplay: !0,
    complete: () => {
      t.remove(e.targets), o(!0);
    }
  });
});
export {
  m as playAnimation
};
//# sourceMappingURL=animation.js.map
