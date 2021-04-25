import React, { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux"
import { setProducts } from '../../actions/products'
import { CatalogueContainer } from './Catalogue.styles'


export const Catalogue = () => {
    //aqui va el catalogo general que ocupa la mayor parte de la pagina
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(setProducts())
        
    }, [])

    console.log(products)

    return (
        <CatalogueContainer>
            {
                products.map(p => <h2>{p.name}</h2>)
            }
        </CatalogueContainer>
    )
}
