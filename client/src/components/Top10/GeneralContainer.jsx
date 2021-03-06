import React from 'react'
import { ItemsContainer } from './ContainerTop10.styles'
import { GeneralContainerTop } from './GeneralContainer.styles'
import { OptionsTop10 } from './OptionsTop10.jsx'



export const GeneralContainer = () => {
    return (
        <GeneralContainerTop>
            <h2>Top 10</h2>
            <OptionsTop10/>
            <ItemsContainer/>
        </GeneralContainerTop>
    )
}
