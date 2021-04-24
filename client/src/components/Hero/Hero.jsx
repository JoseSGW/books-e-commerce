import React from 'react'
import { AutomaticSlider } from "../automaticSlider/automaticSlider.jsx"
/* import { Search } from '../Search/Search.jsx' */
import { HeroContainer, CustomSearch } from './Hero.styles'



export const Hero = () => {
    return (
        <HeroContainer>
            <AutomaticSlider/>
            <div>
                <h1>Puertas al universo</h1>
            </div>
            <CustomSearch/>
        </HeroContainer>
    )
}