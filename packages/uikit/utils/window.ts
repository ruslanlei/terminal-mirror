export const awaitFrame = () => new Promise((res) => {
  requestAnimationFrame(res);
});

export const getLocationOrigin = () => (
  window.location.origin
);

export const getUrlForRelativePath = (
  path: string,
) => {
  const locationOrigin = getLocationOrigin();

  return path.startsWith('/')
    ? `${locationOrigin}${path}`
    : `${locationOrigin}/${path}`;
};
