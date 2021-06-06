import { types } from "../types/types";


export const setProducts = (offset = 0, limit = 40, word = '', location) => {
    return async (dispatch) => {

        let token = null;

        if(localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).token
        }
        try {
            const response = await fetch(`http://localhost:3001/books/${offset}/${limit}?word=${word}`, {
                headers: {
                    'authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            });
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