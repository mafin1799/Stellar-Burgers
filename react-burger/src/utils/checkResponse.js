export const checkResponse = (response) => {
    return response.ok ? response.json() : response.json().then((error) => Promise.reject(error))
}