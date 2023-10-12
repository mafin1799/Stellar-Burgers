import { ingredientsReducer, ingredientsDefault } from "./ingredients-data";
import { INGREDIENTS_REQUEST, INGREDIENTS_SUCCESS, INGREDIENTS_ERROR } from '../actions/ingredients-data';

describe('ingredientsReducer', () => {
    it('should handle INGREDIENTS_REQUEST action', () => {

        const action = { type: INGREDIENTS_REQUEST };
        const expectedState = {
            ingredients: null,
            ingredientsRequest: true,
            ingredientsError: false,
            ingredientsLoaded: false
        };
        expect(ingredientsReducer(ingredientsDefault, action)).toEqual(expectedState);
    });

    it('should handle INGREDIENTS_SUCCESS action', () => {
        const ing = {
            id: '12345',
            name: 'Булка'
        };
        const action = { type: INGREDIENTS_SUCCESS, payload: ing };
        const expectedState = {
            ingredients: ing,
            ingredientsRequest: false,
            ingredientsError: false,
            ingredientsLoaded: true
        };
        expect(ingredientsReducer(ingredientsDefault, action)).toEqual(expectedState);
    });

    it('should handle INGREDIENTS_ERROR action', () => {
        const action = { type: INGREDIENTS_ERROR };
        const expectedState = {
            ingredients: null,
            ingredientsRequest: false,
            ingredientsError: true,
            ingredientsLoaded: false
        };
        expect(ingredientsReducer(ingredientsDefault, action)).toEqual(expectedState);
    });
});