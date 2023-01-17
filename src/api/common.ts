import { useToastStore } from '@/stores/toasts';
import { FormErrorsList } from '@/components/form';
import { ApiResponse } from '@/api/httpTransport';

export type ErrorResponse = {
  non_field_errors?: string[],
} & Record<string, string[]>;

export const processServerErrors = (
  errorResponse: ErrorResponse,
): FormErrorsList => {
  const toastStore = useToastStore();

  if (errorResponse?.non_field_errors) {
    errorResponse.non_field_errors.forEach((error: string) => {
      toastStore.showDanger({
        text: error,
        duration: 6000,
      });
    });
    delete errorResponse.non_field_errors;
  }

  const serverErrorsMap: FormErrorsList = Object.entries(errorResponse)
    .reduce((
      errorList: FormErrorsList,
      [path, value],
    ) => [
      ...errorList,
      {
        path,
        message: value?.[0],
      },
    ], []);

  return serverErrorsMap;
};

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
