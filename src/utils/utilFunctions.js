import {toast} from "react-toastify";
import {TOAST_DISPLAY_DURATION} from "../constant/constant";

export function showToast(statusCode, message) {
    if (statusCode >= 200 && statusCode <= 299) {
        toast.success(`Success: ${message}`, {
            autoClose: TOAST_DISPLAY_DURATION
        });
    } else {
        toast.error(`Error: ${message}`, {
            autoClose: TOAST_DISPLAY_DURATION
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