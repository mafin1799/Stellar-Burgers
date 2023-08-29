import { getOrderData } from "../../utils/burger-api";

export const ORDER_REQUEST   = 'ORDER_REQUEST';
export const ORDER_SUCCESS   = 'ORDER_SUCCESS';
export const ORDER_ERROR     = 'ORDER_ERROR';


/**
 * Генераторы экшенов
 */

export const getOrderRequest = () => ({
        type: ORDER_REQUEST
});

export const getOrderSuccess = (payload) => ({
    type: ORDER_SUCCESS,
    payload
})

export const getOrderError = () => ({
    type: ORDER_ERROR
});

export const sentOrderRequest = (idsArray) => {
    return function (dispatch){
        dispatch(getOrderRequest());
        getOrderData(idsArray)
        .then(res => {
            if(res && res.success){
                dispatch(getOrderSuccess(res.order.number))
            }
        }).catch(e => {
            dispatch(getOrderError());
        })
    }
}