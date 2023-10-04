import { getRefresh } from "./burger-api";
import { REFRESH_TOKEN_ALIAS } from "./const";

type TResponse<T> = {
    success: boolean;
} & T;
export const checkResponse = <T>(response: Response) => {
    return response.ok ? response.json().then(data => data as TResponse<T>) :  Promise.reject(response.status)
}

export const fetchWithRefresh = async (url: string, options: any) => {
    const response = await fetch(url, options);
    if (response.status === 401) {
        const newToken = await getRefresh(localStorage.getItem(REFRESH_TOKEN_ALIAS));
        options.header.authorization = newToken.accessToken

        return fetch(url, options)
    }
    return response;
}