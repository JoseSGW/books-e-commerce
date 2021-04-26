import React from 'react'
import { Hero } from "../Hero/Hero.jsx"
import { Offers } from '../Offers/Offers';
import { GeneralContainer } from '../Top10/GeneralContainer';
import { Footer } from '../Footer/Footer';




export const Home = () => {
    //El home solo contendra otros componentes hijos en un primer momento
    return (
        <>
            <Hero/>
            <Offers/>
            <GeneralContainer/>
            <Footer/>
        </>
    )
}
