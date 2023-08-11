import { propDefinition } from "../../utils/propDefenitions";

export const ADD_INGREDIENT_DETAILS = 'ADD_INGREDIENT_DETAILS';
export const DELETE_INGREDIENT_DETAILS = 'DELETE_INGREDIENT_DETAILS';

export const addIngredientDetails = (payload) => ({
    type: ADD_INGREDIENT_DETAILS,
    payload
})

addIngredientDetails.propTypes = {
    payload: propDefinition.isRequired
}

export const deleteIngredientDetails = () => ({
    type: DELETE_INGREDIENT_DETAILS
})