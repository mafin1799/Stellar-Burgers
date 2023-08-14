export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_BUNS = 'ADD_BUNS';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const MOVE = 'MOVE';
export const DELETE_ALL = 'DELETE_ALL';

export const addIngredient = (payload) => ({
    type: ADD_INGREDIENT,
    payload
})

export const addBuns = (payload) => ({
    type: ADD_BUNS,
    payload
})

export const deleteIngredient = (payload) => ({
    type: DELETE_INGREDIENT,
    payload
})

export const deleteAll = () => ({
    type: DELETE_ALL
})

export const move = (payload) => ({
    type: MOVE,
    payload
})