import { getIngregientsData } from "../../utils/burger-api";

export const INGREDIENTS_REQUEST   = 'INGREDIENTS_REQUEST';
export const INGREDIENTS_SUCCESS   = 'INGREDIENTS_SUCCESS';
export const INGREDIENTS_ERROR     = 'INGREDIENTS_ERROR';


/**
 * Генераторы экшенов
 */

export const getIngredientsRequest = () => ({
        type: INGREDIENTS_REQUEST
});

export const getIngredientsSuccess = (payload) => ({
    type: INGREDIENTS_SUCCESS,
    payload
})

export const getIngredientsError = () => ({
    type: INGREDIENTS_ERROR
});

export const sentIngredientsRequest = () => (dispatch) => {
        dispatch(getIngredientsRequest());
        getIngregientsData()
        .then(res => {
            if(res && res.success){
                dispatch(getIngredientsSuccess(res.data))
            }
        }).catch(e => {
            dispatch(getIngredientsError());
        })
}