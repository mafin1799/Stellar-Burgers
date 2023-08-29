import { ADD_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS } from "../actions/ingredient-details";


const initialIngredientDetails = {
    details: null
}

export const ingredientsDetailsReduser = (state = initialIngredientDetails, action) => {
    switch(action.type){
        case ADD_INGREDIENT_DETAILS: {
            return {details: action.payload}
        }
        case DELETE_INGREDIENT_DETAILS: {
            return {details: null}
        }
        default: {
            return state;
        }
    }
}