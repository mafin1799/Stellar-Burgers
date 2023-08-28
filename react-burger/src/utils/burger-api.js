import { ACCESS_TOKEN_ALIAS, STELLAR_BERGER_API } from "./const"
import { checkResponse } from "./checkResponse"
import { getCookie } from "./cookies"
import { checkToken } from "./check-access"

export const getIngregientsData = () => {
  return fetch(`${STELLAR_BERGER_API}/ingredients`)
    .then(checkResponse)
}

export const getOrderData = (ingredientsId) => {
  return fetch(`${STELLAR_BERGER_API}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ ingredients: ingredientsId })

  })
    .then(checkResponse)
}

export const getPasswordReset = (email) => {
  return fetch(`${STELLAR_BERGER_API}/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email: email })

  })
    .then(checkResponse)
}

export const getPasswordResetReset = (password, token) => {
  return fetch(`${STELLAR_BERGER_API}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ password: password, token: token })

  })
    .then(checkResponse)
}

export const getAuth = (email, password) => {
  return fetch(`${STELLAR_BERGER_API}/auth/login `, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email: email, password: password })

  })
    .then(checkResponse)
}
export const getRegister = (name, email, password) => {
  return fetch(`${STELLAR_BERGER_API}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email: email, password: password, name: name })

  })
    .then(checkResponse)
}

export const getLogout = (refreshToken) => {
  return fetch(`${STELLAR_BERGER_API}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ token: refreshToken })

  })
    .then(checkResponse)
}

export const getRefresh = (refreshToken) => {
  return fetch(`${STELLAR_BERGER_API}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ token: refreshToken })

  })
    .then(checkResponse)
}

export const getUserInfo = () => {
    return fetch(`${STELLAR_BERGER_API}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'authorization': getCookie(ACCESS_TOKEN_ALIAS)
      }
    })
      .then(checkResponse)
}

export const setUserInfo = (name, email, password) => {
  return fetch(`${STELLAR_BERGER_API}/auth/user`, {
    method: 'PATCH',
    body: JSON.stringify({name:name, email:email, password:password}),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'authorization': getCookie(ACCESS_TOKEN_ALIAS)
    }
  })
    .then(checkResponse)
}