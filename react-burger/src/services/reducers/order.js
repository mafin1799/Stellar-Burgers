import { ORDER_SUCCESS, ORDER_REQUEST, ORDER_ERROR } from "../actions/order";

const orderDefault = {
    orderNumber: null,
    orderRequest: false,
    orderError: false,
}

export const orderReducer = (state = orderDefault, action) => {
    switch(action.type){
        case ORDER_REQUEST: {
            return {...state, orderRequest: true}
        }
        case ORDER_SUCCESS: {
            return {...state, orderNumber: action.payload}
        }
        case ORDER_ERROR: {
            return {...state, orderRequest: false, orderError: true}
        }
        default:
            return state
    }
}

