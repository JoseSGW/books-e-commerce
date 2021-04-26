import React, { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux"
import { setProducts } from '../../actions/products'
import { Card } from '../Card/Card'
import { CatalogueContainer } from './Catalogue.styles'



export const Catalogue = () => {
    //aqui va el catalogo general que ocupa la mayor parte de la pagina
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(setProducts(0, 12))

    }, [])

    console.log(products)

    return (
        <CatalogueContainer>
            {
                products.map(p => 
                <Card 
                    name={p.name}
                    year={p.year}
                    author={p.author}
                    editorial={p.editorial}
                />)
            }
        </CatalogueContainer>
    )
}
