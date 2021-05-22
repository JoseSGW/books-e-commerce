import { types } from "../types/types";


export const addToShoppingCart = (payload) => {
    return {
        type: types.ADD_TO_SHOPPING_CART,
        payload
    }
}

export const removeFromShoppingCart = (payload) => {
    return {
        type: types.REMOVE_FROM_SHOPPING_CART,
        payload
    }
}