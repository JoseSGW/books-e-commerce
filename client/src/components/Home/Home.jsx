import React from 'react'
import { Nav } from "../Nav/Nav";
import { Hero } from "../Hero/Hero.jsx"
import { Offers } from '../Offers/Offers';


export const Home = () => {
    //El home solo contendra otros componentes hijos en un primer momento
    return (
        <>
            <Nav/>
            <Hero/>
            <Offers/>
        </>
    )
}
