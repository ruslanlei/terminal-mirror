const g = () => {
  var a;
  return (navigator == null ? void 0 : navigator.userLanguage) || ((a = navigator.languages) == null ? void 0 : a[0]) || navigator.language || (navigator == null ? void 0 : navigator.browserLanguage) || (navigator == null ? void 0 : navigator.systemLanguage) || "en";
};
export {
  g as getUserLanguage
};
//# sourceMappingURL=navigator.js.map
