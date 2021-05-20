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
                return {
                    ...state,
                    ShoppingCartProduct: state.ShoppingCartProduct.map((p) => {

                    })
                }
            }
            break;
        default:
            return state;
    }
}