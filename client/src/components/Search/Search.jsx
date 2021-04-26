import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from './search.styles'
import { useFetch } from '../../hooks/useFetch'
import { useHistory } from "react-router-dom"
import { setProducts } from '../../actions/products'




export const Search = () => {
    const [word, setWord] = useState('');
    const dispatch = useDispatch();
    const { location, push } = useHistory();

    useEffect(() => {
        
    }, []);


    //poner condicionales para determinar donde se guardara la data dependiendo del componente que llame a Search

    const handleSubmit = (e) => {
        e.preventDefault();
        if (word !== '') {
            dispatch(setProducts(0, 12, word, location.pathname))
            push('/catalogue')
        }
    }


    return (
        <SearchBar>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setWord(e.target.value)} value={word} />
                <button>Buscar</button>
            </form>
        </SearchBar>
    )
}
