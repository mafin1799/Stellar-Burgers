import { ACCESS_TOKEN_ALIAS } from "./const"
import { getCookie } from "./cookies"

export const checkToken = () => {
    console.log(34234234)
    const accessToken = getCookie(ACCESS_TOKEN_ALIAS);
    if (accessToken) {
        return true;
    }
    return false;
}