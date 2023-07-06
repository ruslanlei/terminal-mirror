import { FormErrorsList } from '@/form';
import { useToastStore } from '@/stores/toasts';

export type ErrorResponse = {
  non_field_errors?: string[],
} & Record<string, string[]>;

export const processServerErrors = (
  errorResponse: ErrorResponse | any,
  t?: (message: string) => string,
  fallbackError?: string,
): FormErrorsList => {
  const toastStore = useToastStore();

  if (!errorResponse || typeof errorResponse !== 'object') return [];

  if (errorResponse?.non_field_errors) {
    errorResponse.non_field_errors.forEach((error: string) => {
      toastStore.showDanger({
        text: t ? t(`serverError["${error}"]`) : error,
        duration: 6000,
      });
    });
    delete errorResponse.non_field_errors;
  } else if (fallbackError) {
    toastStore.showDanger({
      text: fallbackError,
      duration: 6000,
    });
  }

  const serverErrorsMap: FormErrorsList = Object.entries(errorResponse as Record<any, any>)
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
