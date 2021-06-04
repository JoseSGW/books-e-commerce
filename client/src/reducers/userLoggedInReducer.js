const { types } = require("../types/types");

const initialState = {
    user: {}
}

export const userLoggedInReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER:
            return {
                ...state,
                user: { ...action.payload }
            }
        case types.REMOVE_USER:
            return {
                ...state, user: {}
            }
        default:
            return state;
    }
}