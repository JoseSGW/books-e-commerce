import React from 'react'
import { Catalogue } from '../Catalogue/Catalogue'
import { FilterBooks } from '../FilterBooks/FilterBooks'
import { CatalogueCont } from './CatalogueContainer.styles'


export const CatalogueContainer = () => {
    return (
        <CatalogueCont>
            <FilterBooks/>
            <Catalogue/>
        </CatalogueCont>
    )
}
