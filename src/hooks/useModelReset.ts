import cloneDeep from 'lodash/cloneDeep';

export const useModelReset = (model: Record<any, any>) => {
  const baseModel = cloneDeep(model);

  const resetModel = () => {
    Object.assign(model, baseModel);
  };

  return { resetModel };
};
