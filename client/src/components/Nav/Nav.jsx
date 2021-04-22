import React from 'react'
import { Link } from 'react-router-dom';
import { NavBar } from "./Nav.styles"

export const Nav = () => {
    return (
        <NavBar>
            <div className="menu-options">
                <Link>Nuevos</Link>
                <Link>Ofertas</Link>
                <Link>Catalogo</Link>
            </div>

            <div className="logo">
                <img src="" alt="logo"></img>
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
