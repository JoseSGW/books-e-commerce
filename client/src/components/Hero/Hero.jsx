import React from 'react'
import { AutomaticSlider } from "../automaticSlider/automaticSlider.jsx"
import { HeroContainer, CustomSearch } from './Hero.styles'



export const Hero = () => {
    return (
        <HeroContainer>
            <AutomaticSlider/>
            <div>
                <h1>Puertas al universo</h1>
                <p>El inicio de cientos de viajes</p>
            </div>
            <CustomSearch/>
        </HeroContainer>
    )
}
