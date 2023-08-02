import { STELLAR_BERGER_API } from "./const"
import { checkResponse } from "./checkResponse"

export const getIngregientsData = () => {
  return  fetch(`${STELLAR_BERGER_API}/ingredients`)
        .then(checkResponse)
}