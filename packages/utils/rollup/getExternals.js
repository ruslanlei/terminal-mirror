export const getRollupExternals = (pkg) => {
  const modules = Object.keys(pkg.dependencies);
  return modules.map((moduleName) => new RegExp(`^${moduleName}`));
};
