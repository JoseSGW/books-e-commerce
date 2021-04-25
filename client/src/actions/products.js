import { types } from "../types/types";


export const setProducts = ( offset = 0, limit = 10 ) => {
    return async (dispatch) => {

        try {
            const response = await fetch(`http://localhost:3001/products/${offset}/${limit}`);
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