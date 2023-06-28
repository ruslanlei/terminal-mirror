const o = () => new Promise((t) => {
  requestAnimationFrame(t);
}), i = () => window.location.origin, e = (t) => t.startsWith("/") ? `${i()}${t}` : `${i()}/${t}`;
export {
  o as awaitFrame,
  i as getLocationOrigin,
  e as getUrlForRelativePath
};
//# sourceMappingURL=window.js.map
