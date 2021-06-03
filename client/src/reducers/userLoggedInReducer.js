const { types } = require("../types/types");

const initialState = {
    user: {}
}

export const userLoggedInReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER:
            console.log("llegue al reducer ", action.payload)
            return {
                ...state,
                user: { ...action.payload }
            }
        default:
            return state;
    }
}