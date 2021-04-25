const { types } = require("../types/types");

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PRODUCTS:
            return {
                ...state,
                products: state.products.slice().concat(action.payload)
            }
        default:
            return state;
    }
}