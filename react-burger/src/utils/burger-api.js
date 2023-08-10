import { STELLAR_BERGER_API } from "./const"
import { checkResponse } from "./checkResponse"

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
    body: JSON.stringify({ ingredients: ingredientsId})
    
  })
    .then(checkResponse)
}