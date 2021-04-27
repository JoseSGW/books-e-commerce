import { types } from "../types/types";


export const setProducts = ( offset = 0, limit = 10, word = '', location ) => {
    return async (dispatch) => {

        try {
            const response = await fetch(`http://localhost:3001/products/${offset}/${limit}?word=${word}`);
            const data = await response.json();
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