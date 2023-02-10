import dayjs from 'dayjs';
import { compose, curry } from '@/utils/fp';
import now from 'lodash/now';
import { divideRight } from '@/helpers/number';

export {
  now as dateNow,
};

type DateValue = Date | number | string;

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

export const subtractSeconds = curry((
  seconds: number,
  date: DateValue,
) => dayjs(date).subtract(seconds, 'seconds'));

export const addMinutes = curry((
  minutes: number,
  date: DateValue,
) => dayjs(date).add(minutes, 'minutes'));

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

export const toSecondsTimestamp = (
  date: DateValue,
) => compose(
  divideRight(1000),
  toTimestamp,
)(date);
