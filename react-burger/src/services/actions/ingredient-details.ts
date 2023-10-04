import { TIngredient } from "../../types/types";

export const ADD_INGREDIENT_DETAILS = 'ADD_INGREDIENT_DETAILS';
export const DELETE_INGREDIENT_DETAILS = 'DELETE_INGREDIENT_DETAILS';

export interface IAddIngredientData { readonly type: typeof ADD_INGREDIENT_DETAILS; payload: TIngredient; };
export interface IDeleteIngredientData { readonly type: typeof DELETE_INGREDIENT_DETAILS; };

export type TIngredientDetailsActions = IAddIngredientData | IDeleteIngredientData;

export const addIngredientDetails = (payload: TIngredient): IAddIngredientData => ({ type: ADD_INGREDIENT_DETAILS, payload });
export const deleteIngredientDetails = (): IDeleteIngredientData => ({ type: DELETE_INGREDIENT_DETAILS });