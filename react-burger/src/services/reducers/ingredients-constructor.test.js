import { ingredientsConstructorReducer, ingredientsDefault } from "./ingredients-constructor";
import { ADD_INGREDIENT, ADD_BUNS, DELETE_ALL, DELETE_INGREDIENT, MOVE } from "../actions/ingredients-constructor";

describe('ingredientsConstructorReducer', () => {
    it('should handle ADD_INGREDIENT action', () => {

        const action = { type: ADD_INGREDIENT, payload: "ing" };
        const expectedState = {
            ingredients: ["ing"],
            bun: null
        };
        expect(ingredientsConstructorReducer(ingredientsDefault, action)).toEqual(expectedState);
    });

    it('should handle ADD_BUNS action', () => {
       
        const action = { type: ADD_BUNS, payload: "bun" };
        const expectedState = {
            ingredients: [],
            bun: "bun"
        };
        expect(ingredientsConstructorReducer(ingredientsDefault, action)).toEqual(expectedState);
    });

    it('should handle DELETE_ALL action', () => {
        const action = { type: DELETE_ALL };
        const expectedState = {
            ingredients: [],
            bun: null
        };
        expect(ingredientsConstructorReducer(ingredientsDefault, action)).toEqual(expectedState);
    });



    it('should handle DELETE_INGREDIENT action', () => {
        const action = { type: DELETE_INGREDIENT };
        const expectedState = {
            ingredients: [],
            bun: null,
        };
        expect(ingredientsConstructorReducer(ingredientsDefault, action)).toEqual(expectedState);
    });

    it('should handle MOVE action', () => {
        const action = { type: MOVE };
        const expectedState = {
            ingredients: [],
            bun: null
        };
        expect(ingredientsConstructorReducer(ingredientsDefault, action)).toEqual(expectedState);
    });
});