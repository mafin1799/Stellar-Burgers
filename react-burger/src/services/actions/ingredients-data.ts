import { TDispatch } from "../../types/idx";
import { TIngredient } from "../../types/types";
import { getIngregientsData } from "../../utils/burger-api";

export const INGREDIENTS_REQUEST = 'INGREDIENTS_REQUEST';
export const INGREDIENTS_SUCCESS = 'INGREDIENTS_SUCCESS';
export const INGREDIENTS_ERROR = 'INGREDIENTS_ERROR';

export interface IDataRequest { readonly type: typeof INGREDIENTS_REQUEST; };
export interface IDataSuccess { readonly type: typeof INGREDIENTS_SUCCESS; payload: Array<TIngredient>; };
export interface IDataError { readonly type: typeof INGREDIENTS_ERROR; };

export type TIngredientsDataActions = IDataRequest | IDataSuccess | IDataError;


export const getIngredientsRequest = (): IDataRequest => ({ type: INGREDIENTS_REQUEST });
export const getIngredientsSuccess = (payload: Array<TIngredient>): IDataSuccess => ({ type: INGREDIENTS_SUCCESS, payload });
export const getIngredientsError = (): IDataError => ({ type: INGREDIENTS_ERROR });

export const sentIngredientsRequest = () => (dispatch: TDispatch) => {
    dispatch(getIngredientsRequest());
    getIngregientsData()
        .then(res => {
            if (res && res.success) {
                dispatch(getIngredientsSuccess(res.data));
            }
        }).catch(e => {
            dispatch(getIngredientsError());
        });
};