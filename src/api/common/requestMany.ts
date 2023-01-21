import { ApiResponse } from '@/api/httpTransport';

export type MultiRequestResponse = Pick<ApiResponse, 'result' | 'data'>;

export const requestMany = async (
  requests: Promise<ApiResponse>[],
): Promise<MultiRequestResponse> => {
  const results = await Promise.all(requests);

  const commonResult = !results.map(
    ({ result }) => result,
  ).includes(false);

  return {
    result: commonResult,
    data: results.map(({ data }) => data),
  };
};
