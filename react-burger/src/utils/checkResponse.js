import { getRefresh } from "./burger-api";
import { REFRESH_TOKEN_ALIAS } from "./const";

export const checkResponse = (response) => {
    return response.ok ? response.json() : response.json().then((error) => Promise.reject(error))
}

export const fetchWithRefresh = async (url, options) => {
    const response = await fetch(url, options);
    if (response.status === 401) {
        const newToken = await getRefresh(localStorage.getItem(REFRESH_TOKEN_ALIAS));
        options.header.authorization = newToken.accessToken

        return fetch(url, options)
    }
    return response;
}