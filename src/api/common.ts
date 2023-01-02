import { useToastStore } from '@/stores/toasts';

export type ErrorResponse = {
  non_field_errors?: string[],
} & Record<string, string[]>;

export const processServerErrors = (
  errorsMap: Record<string, string>,
  errorResponse: ErrorResponse,
) => {
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

  const serverErrorsMap = Object.entries(errorResponse)
    .reduce((acc, [key, value]) => ({
      ...acc,
      [key]: value?.[0],
    }), {});

  Object.assign(errorsMap, serverErrorsMap);
};
