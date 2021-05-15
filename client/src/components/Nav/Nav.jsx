import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { setProducts } from '../../actions/products'
import { NavBar } from "./Nav.styles"

export const Nav = () => {

    const dispatch = useDispatch()


    return (
        <NavBar>
            <div className="menu-options">
                <Link to="/new" >Nuevos</Link>
                <Link to="/offers" >Ofertas</Link>
                <Link to="/catalogue" onClick={() => dispatch(setProducts())}>Catalogo</Link>
            </div>

            <div className="logo">
                <Link to="/" ><img src="" alt="logo"></img></Link> 
            </div>

            <div className="menu-users">
                <Link
                    to="/login"> Iniciar sesión
                </Link>
                <Link
                    to="/register"> Registrarse
                </Link>
            </div>
        </NavBar>
    )
}
