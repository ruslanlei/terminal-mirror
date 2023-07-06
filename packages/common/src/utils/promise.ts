export const awaitTimeout = (timeout: number) => new Promise(((resolve) => {
  setTimeout(resolve, timeout);
}));
