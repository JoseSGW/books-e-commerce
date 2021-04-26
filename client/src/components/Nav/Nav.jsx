import React from 'react'
import { Link } from 'react-router-dom';
import { NavBar } from "./Nav.styles"

export const Nav = () => {
    return (
        <NavBar>
            <div className="menu-options">
                <Link to="/new" >Nuevos</Link>
                <Link to="/offers" >Ofertas</Link>
                <Link to="/catalogue" >Catalogo</Link>
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
