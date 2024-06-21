export const formatTimeToPH = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Singapore",
    };

    const formatter = new Intl.DateTimeFormat("en-US", options);
    const parts = formatter.formatToParts(date);

    const formatDatePart = (type) =>
        parts.find((part) => part.type === type).value;

    const year = formatDatePart("year");
    const month = formatDatePart("month");
    const day = formatDatePart("day");
    const hour = formatDatePart("hour");
    const minute = formatDatePart("minute");
    const dayPeriod = formatDatePart("dayPeriod");

    return `${year}-${month}-${day} - ${hour}:${minute} ${dayPeriod}`;
};
export default formatTimeToPH;
