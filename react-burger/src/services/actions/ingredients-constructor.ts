import uuid from "react-uuid";
import { TIngredient } from "../../types/types";

type IngredientMove = {
    dragId: number,
    targetId: number
};

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_BUNS = 'ADD_BUNS';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const MOVE = 'MOVE';
export const DELETE_ALL = 'DELETE_ALL';

export interface IAddIngredient { readonly type: typeof ADD_INGREDIENT; payload: TIngredient & { unique: string }; };
export interface IAddBuns { readonly type: typeof ADD_BUNS; payload: TIngredient; };
export interface IDeleteIngredient { readonly type: typeof DELETE_INGREDIENT; payload: string; };
export interface IMoveIngredient { readonly type: typeof MOVE; payload: IngredientMove; };
export interface IDeleteAllIngredients { readonly type: typeof DELETE_ALL; };

export type TIngredientConstructorActions = IAddIngredient | IAddBuns | IDeleteIngredient | IMoveIngredient | IDeleteAllIngredients;

export const addIngredient = (item: TIngredient): IAddIngredient => ({
    type: ADD_INGREDIENT,
    payload: {
        ...item,
        unique: uuid()
    }
});

export const addBuns = (payload: TIngredient): IAddBuns => ({ type: ADD_BUNS, payload });
export const deleteIngredient = (payload: string): IDeleteIngredient => ({ type: DELETE_INGREDIENT, payload });
export const deleteAll = (): IDeleteAllIngredients => ({ type: DELETE_ALL });
export const move = (payload: IngredientMove): IMoveIngredient => ({ type: MOVE, payload });