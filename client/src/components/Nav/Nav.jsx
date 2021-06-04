import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from '../../actions/products'
import { NavBar } from "./Nav.styles"
import CustomizedBadges from '../CounterCartIcon/CounterCartIcon';
import { LoggedInUserIcon } from '../LoggedInUserIcon/LoggedInUserIcon';

export const Nav = () => {

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.userLoggedIn)


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


            <div className='container-user-options'>
                <Link
                    to="/products-in-cart"> <CustomizedBadges className="icon-cart" />
                </Link>

                {
                    user.user_id && user.user_id > 0 ?
                        <div>
                            <LoggedInUserIcon {...user}/>
                        </div>
                        :
                        <div className="menu-users">
                            <Link
                                to="/login-or-register"> Iniciar sesión
                            </Link>
                            <Link
                                to="/login-or-register"> Registrarse
                            </Link>
                        </div>
                }
            </div>

        </NavBar>
    )
}
