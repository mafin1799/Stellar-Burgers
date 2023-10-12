import { ingredientsDetailsReduser, initialIngredientDetails } from "./ingredient-details";
import { ADD_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS } from '../actions/ingredient-details';

describe('ingredientsDetailsReduser', () => {
    it('should handle ADD_INGREDIENT_DETAILS action', () => {

        const action = { type: ADD_INGREDIENT_DETAILS, payload: {}};
        const expectedState = {
            details: {}
        };
        expect(ingredientsDetailsReduser(initialIngredientDetails, action)).toEqual(expectedState);
    });

    it('should handle DELETE_INGREDIENT_DETAILS action', () => {
        const action = { type: DELETE_INGREDIENT_DETAILS };
        const expectedState = {
            details: null
        };
        expect(ingredientsDetailsReduser(initialIngredientDetails, action)).toEqual(expectedState);
    });
});