import dayjs from 'dayjs';
import { compose, curry } from '@/utils/fp';
import now from 'lodash/now';
import {
  add, divide, divideRight, multiply,
} from '@/utils/number';
import collect from 'collect.js';

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

/// ///////

const data = [
  ['2023-01-01', 113.6],
  ['2023-02-01', 2194.84],
  ['2023-05-01', 1.05],
];

const startDate = collect(data).min('0');
const endDate = collect(data).max('0');

console.log(
  startDate,
  endDate,
);

// const newData = collect([]);
// dayjs
//   .range(startDate, endDate.add(1, 'month'))
//   .forEach((date) => {
//     const dateStr = date.format('YYYY-MM');
//     const existingData = data.find((d) => d[0].slice(0, 7) === dateStr);
//     if (existingData) {
//       newData.push(existingData);
//     } else {
//       newData.push([`${dateStr}-01`, 0]);
//     }
//   });
//
// console.log(newData.all());
