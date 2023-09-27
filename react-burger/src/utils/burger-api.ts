import { ACCESS_TOKEN_ALIAS, STELLAR_BERGER_API } from "./const"
import { checkResponse, fetchWithRefresh } from "./checkResponse"
import { getCookie } from "./cookies"
import { type } from "os"
import { TIngredient } from "../types/types"

type TIngredients = {
  data: Array<TIngredient>
}
export const getIngregientsData = () => {
  return fetch(`${STELLAR_BERGER_API}/ingredients`)
    .then(checkResponse<TIngredients>)
}

type TOrder = {
  order: {
    number: number
  }
}
export const getOrderData = (ingredientsId: ReadonlyArray<string>) => {

  const headers: HeadersInit = {
    'Content-Type': 'application/json;charset=utf-8',
  };

  const accessToken = getCookie(ACCESS_TOKEN_ALIAS);

  if (accessToken) {
    headers['authorization'] = accessToken;
  }

  return fetch(`${STELLAR_BERGER_API}/orders`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ ingredients: ingredientsId })
  })
    .then(checkResponse<TOrder>);
}

export const getPasswordReset = (email: string) => {
  return fetch(`${STELLAR_BERGER_API}/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email: email })

  })
    .then(checkResponse)
}

export const getPasswordResetReset = (password: string, token: string) => {
  return fetch(`${STELLAR_BERGER_API}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ password: password, token: token })

  })
    .then(checkResponse)
}

type TAuth = TRefresh & UserInfo;

export const getAuth = (email: string, password: string) => {
  return fetch(`${STELLAR_BERGER_API}/auth/login `, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email: email, password: password })

  })
    .then(checkResponse<TAuth>)
}

type TReg = {
  accessToken: string,
  refreshToken: string,
  user: {
    email: string,
    name: string
  }
  message?: string
}
export const getRegister = (name: string, email: string, password: string) => {
  return fetch(`${STELLAR_BERGER_API}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email: email, password: password, name: name })

  })
    .then(checkResponse<TReg>)
}

export const getLogout = (refreshToken: string | null) => {
  return fetch(`${STELLAR_BERGER_API}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ token: refreshToken })

  })
    .then(checkResponse)
}

export type TRefresh = {
  accessToken: string,
  refreshToken: string
} & UserInfo;

export const getRefresh = (refreshToken: string | null) => {
  return fetch(`${STELLAR_BERGER_API}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ token: refreshToken })

  })
    .then(checkResponse<TRefresh>)
}

type UserInfo = {
  user: {
    name: string,
    email: string
  }
}
export const getUserInfo = () => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json;charset=utf-8',
  };

  const accessToken = getCookie(ACCESS_TOKEN_ALIAS);

  if (accessToken) {
    headers['authorization'] = accessToken;
  }

  return fetch(`${STELLAR_BERGER_API}/auth/user`, {
    method: 'GET',
    headers,
  })
    .then(checkResponse<UserInfo>);
};


export const setUserInfo = (name: string, email: string, password: string) => {
  let options = {
    method: 'PATCH',
    body: JSON.stringify({ name: name, email: email, password: password }),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: getCookie(ACCESS_TOKEN_ALIAS)
    }
  }
  return fetchWithRefresh(`${STELLAR_BERGER_API}/auth/user`, options).then(checkResponse<UserInfo>)
}