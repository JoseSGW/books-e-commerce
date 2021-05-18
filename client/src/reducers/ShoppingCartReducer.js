const { types } = require("../types/types");

const initialState = {
    ShoppingCartProduct: [],
}

export const ShoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_SHOPPING_CART:
            return state.ShoppingCartProduct.map((p, i, a) => {
                if (p.id === action.payload.id) p.amount = p.amount + 1
                if (a.length - 1 === i) p.amount = 0;
            })
        default:
            return state;
    }
}