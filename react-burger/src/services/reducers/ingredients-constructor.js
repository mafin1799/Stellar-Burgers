import { ADD_INGREDIENT, ADD_BUNS, DELETE_ALL, DELETE_INGREDIENT, MOVE } from "../actions/ingredients-constructor";
import update from 'immutability-helper';
const ingredientsDefault = {
    ingredients: [],
    bun: null
}

export const ingredientsConstructorReducer = (state = ingredientsDefault, action) => {
    switch (action.type) {
        case ADD_BUNS:
            return { ...state, bun: action.payload }
        case ADD_INGREDIENT:
            return { ...state, ingredients: [...state.ingredients, action.payload] }
        case DELETE_INGREDIENT:
            return { ...state, ingredients: [...state.ingredients.filter((ingredient) => ingredient?.id !== action.payload)] }
        case DELETE_ALL:
            return { ...state, ingredients: [], bun: null}
        case MOVE:
            return {
                ...state,
                ingredients: update(state.ingredients, {
                  $splice: [
                    [action.payload.dragIndex, 1],
                    [action.payload.hoverIndex, 0, state.ingredients[action.payload.dragIndex]],
                  ],
                }),
              }
        default:
            return state;

    }
};