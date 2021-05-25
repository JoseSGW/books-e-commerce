import { Divider, styled } from '@material-ui/core';
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { CatalogueContainer } from '../components/Container/CatalogueContainer';
import { ContainerProductsInCart } from '../components/ContainerProductsInCart/ContainerProductsInCart';
import { DetailsBook } from '../components/DetailsBook/DetailsBook';
import { Home } from "../components/Home/Home"
import { Nav } from '../components/Nav/Nav';
import { ProductsInCart } from '../components/ProductsInCart/ProductsInCart';
import { Login } from '../components/User/Login/Login';
import { SignIn } from '../components/User/Sign-In/SignIn';






export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path='/catalogue' component={CatalogueContainer}>
                        {/* <Route component={Catalogue}></Route>
                        <Route component={FilterBooks}></Route> */}
                    </Route>
                    <Route
                        path='/details/:idProduct'
                        component={DetailsBook}
                    />
                    <Route
                        path='/products-in-cart'
                        component={ContainerProductsInCart}
                    />
                    <Route
                        path='/login-or-register'
                        render={props =>
                            <div style={{ display: 'flex', padding: '2rem', maxWidth: '90vw', margin: '0 auto' }}>
                                <Login />
                                <SignIn />                              
                            </div>
                        }
                    />
                    <Route
                        exact path='/'
                        component={Home}
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
