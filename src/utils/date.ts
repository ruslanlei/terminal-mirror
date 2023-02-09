import dayjs from 'dayjs';
import { curry } from '@/utils/fp';
import now from 'lodash/now';

export {
  now as dateNow,
};

type DateValue = Date | number| string;

export const toISOString = (
  date: DateValue,
) => dayjs(date).toISOString();

export const humanizeDate = (
  date: DateValue,
): string => dayjs(date).format('DD/MM/YYYY');

export const addSeconds = curry((
  seconds: number,
  date: DateValue,
) => dayjs(date).add(seconds, 'seconds'));

export const subtractMinutes = curry((
  minutes: number,
  date: DateValue,
) => dayjs(date).subtract(minutes, 'minutes'));

export const addHours = curry((
  days: number,
  date: DateValue,
) => dayjs(date).add(days, 'hours'));

export const subtractDays = curry((
  months: number,
  date: DateValue,
) => dayjs(date).subtract(months, 'days'));

export const subtractMonths = curry((
  months: number,
  date: DateValue,
) => dayjs(date).subtract(months, 'months'));

export const subtractYears = curry((
  years: number,
  date: DateValue,
) => dayjs(date).subtract(years, 'years'));

export const toTimestamp = (
  date: DateValue,
) => dayjs(date).valueOf();
