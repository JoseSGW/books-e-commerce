import { types } from "../types/types";


export const setProducts = ( offset = 0, limit = 40, word = '', location ) => {
    return async (dispatch) => {

        try {
            console.log("cuantas veces me llame")
            const response = await fetch(`http://localhost:3001/books/${offset}/${limit}?word=${word}`);
            const data = await response.json();
            console.log(" aoy data ",data)
            dispatch({
                type: types.SET_PRODUCTS,
                payload: data
            })

        } catch (error) {
            console.error(error)
        }

    }
}

export const clearProducts = () => {
    return {
        type: types.CLEAR_PRODUCTS
    }
}