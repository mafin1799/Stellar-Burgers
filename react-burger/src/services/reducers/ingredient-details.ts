import { TIngredient } from "../../types/types";
import { ADD_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS, TIngredientDetailsActions } from "../actions/ingredient-details";

type TInitIngredientDetails = {
    details: TIngredient | null;
}
const initialIngredientDetails: TInitIngredientDetails = {
    details: null
}

export const ingredientsDetailsReduser = (state = initialIngredientDetails, action: TIngredientDetailsActions) => {
    switch (action.type) {
        case ADD_INGREDIENT_DETAILS: {
            return { details: action.payload }
        }
        case DELETE_INGREDIENT_DETAILS: {
            return { details: null }
        }
        default: {
            return state;
        }
    }
}