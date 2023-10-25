import { toast } from "react-toastify";
import { TOAST_DISPLAY_DURATION } from "../constant/constant";

export function showToast(statusCode, message, duration = TOAST_DISPLAY_DURATION) {
    if (statusCode >= 200 && statusCode <= 299) {
        toast.success(`Success: ${message}`, {
            autoClose: duration
        });
    } else {
        toast.error(`Failed: ${message}`, {
            autoClose: duration
        });
    }
}

export function getLocalDate(date) {
    return new Date(date).toLocaleDateString();
}

export function getLocalTime(date) {
    return new Date(date).toLocaleTimeString();
}

export function getLocalDateTime(date) {
    const tempDate = new Date(date);
    const formattedDate = tempDate.toLocaleDateString();
    const formattedTime = tempDate.toLocaleTimeString();
    return `${formattedDate} ${formattedTime}`;
}

export function compareDates(date1, date2) {
    console.log(date1);
    console.log(date2);
    return date1 - date2 >= 0;
}

export function getNumberOfBidders(bidders) {
    if (!bidders) return '0 person';
    return bidders > 1 ? `${bidders} people` : `${bidders} person`;
}

export const getTimerFormat = (time) => {
    let res = '';
    if (time.days > 0)
        res += time.days + ' days, ';
    if (time.hours >= 0)
        res += time.hours + ':';
    if (time.minutes >= 0)
        res += time.minutes + ':';
    if (time.seconds >= 0)
        res += time.seconds;

    return res;
}