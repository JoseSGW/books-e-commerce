import { types } from "../types/types";



export const setUser = (user) => {
    console.log("me ejecute serUser", user)
    return {
        type: types.SET_USER,
        payload: user
    }
}