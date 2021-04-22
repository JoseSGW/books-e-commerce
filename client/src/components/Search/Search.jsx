import React from 'react'
import { SearchBar } from './search.styles'
import { useFetch } from '../../hooks/useFetch'



export const Search = (url) => {
    const { data, loading, error } = useFetch(url)

    //poner condicionales para determinar donde se guardara la data dependiendo del componente que llame a Search

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return (
        <SearchBar>
            <form onSubmit={ handleSubmit }>
                <input type="text" />
                <button>Buscar</button>
            </form>
        </SearchBar>
    )
}
