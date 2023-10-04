import { ORDER_SUCCESS, ORDER_REQUEST, ORDER_ERROR, TOrderActions, ORDER_CLEAR } from "../actions/order";

type TOrder = {
    orderNumber: number | null,
    orderRequest: boolean,
    orderError: boolean,
}
const orderDefault: TOrder = {
    orderNumber: null,
    orderRequest: false,
    orderError: false,
}

export const orderReducer = (state = orderDefault, action: TOrderActions) => {
    switch (action.type) {
        case ORDER_REQUEST: {
            return { ...state, orderRequest: true }
        }
        case ORDER_SUCCESS: {
            return { ...state, orderNumber: action.payload }
        }
        case ORDER_ERROR: {
            return { ...state, orderRequest: false, orderError: true }
        }
        case ORDER_CLEAR: {
            return { ...state, orderNumber: null, orderRequest: false, orderError: false }
        }
        default:
            return state
    }
}

