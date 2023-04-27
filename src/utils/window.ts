export const awaitFrame = () => new Promise((res) => {
  requestAnimationFrame(res);
});

export const getLocationOrigin = () => (
  window.location.origin
);

export const getUrlForRelativePath = (
  path: string,
) => (
  path.startsWith('/')
    ? `${getLocationOrigin()}${path}`
    : `${getLocationOrigin()}/${path}`
);
