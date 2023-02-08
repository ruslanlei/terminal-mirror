import dayjs from 'dayjs';
import { curry } from '@/utils/fp';
import now from 'lodash/now';

export {
  now as dateNow,
};

type DateValue = Date | string;

export const toISOSString = (
  date: DateValue,
) => dayjs(date).toISOString();

export const humanizeDate = (
  date: DateValue,
): string => dayjs(date).format('DD/MM/YYYY');

export const subtractMonths = curry((
  months: number,
  date: DateValue,
) => dayjs(date).subtract(months, 'months'));
