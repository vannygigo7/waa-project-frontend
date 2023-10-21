import {toast} from "react-toastify";
import {TOAST_DISPLAY_DURATION} from "../constant/constant";
export function showToast(statusCode, message){
    if(statusCode >= 200 && statusCode <= 299 ){
        toast.success(`Success: ${message}`, {
            autoClose: TOAST_DISPLAY_DURATION
        });
    }else
    {
        toast.error(`Error: ${message}`,{
            autoClose: TOAST_DISPLAY_DURATION
        });
    }
}