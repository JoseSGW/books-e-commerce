import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { setProducts } from '../../actions/products'
import { Hero } from "../Hero/Hero.jsx"
import { Offers } from '../Offers/Offers';
import { GeneralContainer } from '../Top10/GeneralContainer';
import { Footer } from '../Footer/Footer';




export const Home = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setProducts())
       
    }, [])
    
    return (
        <>
            <Hero/>
            <Offers/>
            <GeneralContainer/>
            <Footer/>
        </>
    )
}
