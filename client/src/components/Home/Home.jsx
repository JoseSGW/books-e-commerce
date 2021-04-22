import React from 'react'
import { Nav } from "../Nav/Nav";
import { Hero } from "../Hero/Hero.jsx"

export const Home = () => {
    //El home solo contendra otros componentes hijos en un primer momento
    return (
        <>
            <Nav/>
            <Hero/>
        </>
    )
}
