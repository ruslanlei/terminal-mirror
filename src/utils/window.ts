export const awaitFrame = () => new Promise((res) => {
  requestAnimationFrame(res);
});
