import { ADD_INGREDIENT, ADD_BUNS, DELETE_ALL, DELETE_INGREDIENT, MOVE, TIngredientConstructorActions } from "../actions/ingredients-constructor";
import { TIngredient } from "../../types/types";
type IIngredientDefault = {
    ingredients: ReadonlyArray<TIngredient>,
    bun: TIngredient | null
}

const ingredientsDefault: IIngredientDefault = {
    ingredients: [],
    bun: null
}

export const ingredientsConstructorReducer = (state = ingredientsDefault, action: TIngredientConstructorActions) => {
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
                const newState = [...state.ingredients];
                const index1 = state.ingredients.findIndex(item => item.id === String(action.payload.dragId))
                const index2 = state.ingredients.findIndex(item => item.id === String(action.payload.targetId))

                if (index1 !== -1 && index2 !== -1) {
                    const temp = newState[index1];
                    newState[index1] = newState[index2];
                    newState[index2] = temp
                }

                return {
                    ...state,
                    ingredients: newState,
                }
            }
        default:
            return state;

    }
};