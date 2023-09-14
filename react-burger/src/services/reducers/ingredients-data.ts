import { TIngredient } from "../../types/types";
import { INGREDIENTS_REQUEST, INGREDIENTS_SUCCESS, INGREDIENTS_ERROR, TIngredientsData } from "../actions/ingredients-data";

type TInitIngredients = {
    ingredients: ReadonlyArray<TIngredient> | null,
    ingredientsRequest: boolean,
    ingredientsError: boolean,
    ingredientsLoaded: boolean
}
const ingredientsDefault: TInitIngredients = {
    ingredients: null,
    ingredientsRequest: false,
    ingredientsError: false,
    ingredientsLoaded: false
}

export const ingredientsReducer = (state = ingredientsDefault, action: TIngredientsData) => {
    switch (action.type) {
        case INGREDIENTS_REQUEST: {
            return { ...state, ingredientsRequest: true }
        }
        case INGREDIENTS_SUCCESS: {
            return { ...state, ingredients: action.payload, ingredientsRequest: false, ingredientsError: false, ingredientsLoaded: true }
        }
        case INGREDIENTS_ERROR: {
            return { ...state, ingredientsRequest: false, ingredientsError: true }
        }
        default:
            return state
    }
}

