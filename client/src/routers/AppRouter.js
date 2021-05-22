import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { CatalogueContainer } from '../components/Container/CatalogueContainer';
import { ContainerProductsInCart } from '../components/ContainerProductsInCart/ContainerProductsInCart';
import { DetailsBook } from '../components/DetailsBook/DetailsBook';
import { Home } from "../components/Home/Home"
import { Nav } from '../components/Nav/Nav';
import { ProductsInCart } from '../components/ProductsInCart/ProductsInCart';




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
                        exact path='/'
                        component={Home}
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
