import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { SearchForm } from './search.styles'
import { useHistory } from "react-router-dom"
import { setProducts } from '../../actions/products'




export const Search = () => {
    const [word, setWord] = useState('');
    const dispatch = useDispatch();
    const { location, push } = useHistory();

    //poner condicionales para determinar donde se guardara la data dependiendo del componente que llame a Search

    const handleSubmit = (e) => {
        e.preventDefault();
        if (word !== '') {
            dispatch(setProducts(0, 12, word, location.pathname))
            push('/catalogue')
        }
    }


    return (
            <SearchForm onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setWord(e.target.value)} value={word} />
                <button>Buscar</button>
            </SearchForm>
    )
}
