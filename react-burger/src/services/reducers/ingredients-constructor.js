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
            return { ...state, ingredients: [], bun: null }
        case MOVE:
            {
                console.log(action)

                const newState = [...state.ingredients];

                const index1 = state.ingredients.findIndex(item => item.id === action.payload.dragId)
                const index2 = state.ingredients.findIndex(item => item.id === action.payload.targetId)

                if(index1 !== -1 && index2 !== -1){
                   const temp = newState[index1];
                   newState[index1] = newState[index2];
                   newState[index2] = temp
                }

                return{
                    ...state,
                    ingredients: newState,
                }
            }
        default:
            return state;

    }
};