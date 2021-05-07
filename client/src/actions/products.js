import { types } from "../types/types";


export const setProducts = (offset = 0, limit = 40, word = '', location) => {
    return async (dispatch) => {

        try {
            const response = await fetch(`http://localhost:3001/books/${offset}/${limit}?word=${word}`);
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

export const setProductsByFilters = ({ author, year, genre, range = ['undefined', 'undefined'] }) => {

    return async (dispatch) => {
        try {

            const response = await fetch(`http://localhost:3001/books/productByFilters?author=${author}&year=${year}&genre=${genre}&min=${range[0]}&max=${range[1]}`);

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