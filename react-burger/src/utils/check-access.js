import { ACCESS_TOKEN_ALIAS, ACCESS_TOKEN_EXPIRES } from "./const"
import { getCookie } from "./cookies"

export const checkToken = () => {
    const accessToken = getCookie(ACCESS_TOKEN_ALIAS);
    const now = new Date();
    if (accessToken && now < localStorage.getItem(ACCESS_TOKEN_EXPIRES)) {
        return true;
    }
    return false;
}