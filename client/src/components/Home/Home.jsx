import React, { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux"
import { setProducts, clearProducts } from '../../actions/products'
import { Hero } from "../Hero/Hero.jsx"
import { Offers } from '../Offers/Offers';
import { GeneralContainer } from '../Top10/GeneralContainer';
import { Footer } from '../Footer/Footer';




export const Home = () => {
    //El home solo contendra otros componentes hijos en un primer momento

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
