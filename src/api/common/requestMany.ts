import { ApiResponse } from '@/api/httpTransport';

export type MultiRequestResponse<R> = Pick<ApiResponse<R>, 'result' | 'data'>;

export const requestMany = async <R>(
  requests: Promise<ApiResponse>[],
): Promise<MultiRequestResponse<R>> => {
  const results = await Promise.all(requests);

  const commonResult = !results.map(
    ({ result }) => result,
  ).includes(false);

  return {
    result: commonResult,
    data: results.map(({ data }) => data) as R,
  };
};
