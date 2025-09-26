import moment from 'moment';

export const dateFormatter = (formatDate, date) => formatDate(moment(date).toDate(), {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

/**
 * Formats a UTC date string to local timezone with specified format
 * @param {string} date - The UTC date string to format
 * @param {string} [format='ll, LT'] - Moment.js format string
 *                                     Default: 'll, LT' (e.g., "Sep 4, 2023, 3:45 PM")
 * @returns {string} The formatted date string in local timezone
 * @example
 * formatToDate('2023-09-04T15:45:00Z')
 * // Returns: "Sep 4, 2023, 3:45 PM"
 *
 * formatToDate('2023-09-04T15:45:00Z', 'YYYY-MM-DD')
 * // Returns: "2023-09-04"
 */
export const formatToDate = (date, format = 'll, LT') => moment.utc(date).local().format(format);

export default dateFormatter;
