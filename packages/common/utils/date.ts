import dayjs, { QUnitType } from 'dayjs';
import now from 'lodash/now';
import { compose, curry } from './fp';
import {
  divide,
  divideRight,
  multiply,
} from './number';

export {
  now as dateNow,
};

export type DateValue = Date | number | string;

export const isDateBefore = curry((
  date1: DateValue,
  date2: DateValue,
) => (
  dayjs(date1).isBefore(dayjs(date2))
));

export const toISOString = (
  date: DateValue,
) => dayjs(date).toISOString();

export const humanizeDate = (
  date: DateValue,
): string => dayjs(date).format('DD/MM/YYYY');

export const customFormatDate = curry((
  format: string,
  date: DateValue,
) => dayjs(date).format(format));

export const secondsToMilliseconds = (seconds: number) => multiply(seconds, 1000);
export const millisecondsToSeconds = (milliseconds: number) => divide(milliseconds, 1000);
export const addMilliseconds = curry((
  milliseconds: number,
  date: DateValue,
) => dayjs(date).add(milliseconds, 'millisecond'));

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

export const addDays = curry((
  days: number,
  date: DateValue,
) => dayjs(date).add(days, 'days'));

export const subtractDays = curry((
  days: number,
  date: DateValue,
) => dayjs(date).subtract(days, 'days'));

export const addMonths = curry((
  months: number,
  date: DateValue,
) => dayjs(date).add(months, 'months'));

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

export const isDateWithinCurrentMonth = (
  date: DateValue,
) => (
  dayjs(date).isSame(new Date(), 'month')
);

export const isDateWithinCurrentDay = (
  date: DateValue,
) => (
  dayjs(date).isSame(new Date(), 'day')
);

export const isDateWithinCurrentWeek = (
  date: DateValue,
) => (
  dayjs(date).isSame(new Date(), 'week')
);

export const getMonthIndex = (
  date: DateValue,
) => (
  dayjs(date).month()
);

export const getMonthName = (
  monthIndex: number,
) => dayjs().month(monthIndex).format('MMM');

export const getDateDifferenceIn = curry(
  (
    unit: QUnitType,
    dateA: DateValue,
    dateB: DateValue,
  ): number => (
    dayjs(dateA).diff(dayjs(dateB), unit)
  ),
);

export const getDifferenceInMonths = getDateDifferenceIn('month');
