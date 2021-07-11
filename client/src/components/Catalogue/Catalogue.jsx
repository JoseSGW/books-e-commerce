import React from 'react'
import { useSelector} from "react-redux"
import { CardComponent } from '../Card/Card'
import { CatalogueContainer } from './Catalogue.styles'


export const Catalogue = () => {

    const { products } = useSelector((state) => state.products)
    
    return (
        <CatalogueContainer>
            {
                products.map(p => 
                <CardComponent 
                    key={p.id}
                    name={p.name}
                    year={p.year}
                    author={p.author}
                    editorial={p.editorial}
                    images={p.images}
                    price={p.price}
                    id={p.id}
                />)
            }
        </CatalogueContainer>
    )
}
