const { types } = require("../types/types");

const initialState = {
    ShoppingCartProduct: [],
}

export const ShoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_SHOPPING_CART:
            const product = state.ShoppingCartProduct.find(p => p.id === action.payload.id)
            if (product) {
                product.amount = product.amount + 1
                return state
            }
            else {
                return {
                    ...state,
                    ShoppingCartProduct: state.ShoppingCartProduct.concat(action.payload)
                }
            }
        case types.REMOVE_FROM_SHOPPING_CART:
            return {
                ...state,
                ShoppingCartProduct: state.ShoppingCartProduct.filter(p => p.id !== action.payload)
            }
        case types.UPDATE_AMOUNT_TO_SHOPPING_CART:
            return {
                ...state,
                ShoppingCartProduct: state.ShoppingCartProduct.map(p => {
                    if (p.id === action.payload.id) {
                        p.amount = action.payload.amount
                    }
                    return p
                })
            }
        default:
            return state;
    }
}