const { types } = require("../types/types");

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PRODUCTS:
            return {
                ...state,
                products: state.products.splice().concat(action.payload)
            }
        case types.CLEAR_PRODUCTS:
            return {
                ...state,
                products: state.products.splice()
            }
        default:
            return state;
    }
}