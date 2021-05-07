import React, { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux"
import { setProducts, clearProducts } from '../../actions/products'
import { CardComponent } from '../Card/Card'
import { CatalogueContainer } from './Catalogue.styles'



export const Catalogue = () => {
    //aqui va el catalogo general que ocupa la mayor parte de la pagina
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.products)
    
    useEffect(() => {

        return () => {
            dispatch(clearProducts());
        }
    }, [])


    return (
        <CatalogueContainer>
            {
                products.map(p => 
                <CardComponent 
                    name={p.name}
                    year={p.year}
                    author={p.author}
                    editorial={p.editorial}
                    images={p.images}
                />)
            }
        </CatalogueContainer>
    )
}
