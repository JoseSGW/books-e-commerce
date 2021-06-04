import { types } from "../types/types";



export const setUser = (user) => {
    return {
        type: types.SET_USER,
        payload: user
    }
}

export const removeUser = () => {
    return {
        type: types.REMOVE_USER
    }
}