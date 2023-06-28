const c = (o) => {
  if (o.scrollLeft === 0) {
    const { scrollWidth: s } = o, t = o.offsetWidth;
    o.scrollLeft = s - t;
  }
};
export {
  c as setMaximalScrollLeft
};
//# sourceMappingURL=element.js.map
