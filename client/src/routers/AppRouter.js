import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { CatalogueContainer } from '../components/Container/CatalogueContainer';
import { ContainerProductsInCart } from '../components/ContainerProductsInCart/ContainerProductsInCart';
import { DetailsBook } from '../components/DetailsBook/DetailsBook';
import { Home } from "../components/Home/Home"
import { Nav } from '../components/Nav/Nav';
//import { ProductsInCart } from '../components/ProductsInCart/ProductsInCart';
import { Login } from '../components/User/Login/Login';
import { SignIn } from '../components/User/Sign-In/SignIn';



export const AppRouter = () => {

    const { ShoppingCartProduct } = useSelector(state => state.shoppingCart)

    useEffect(() => {

        const updatedProducts = ShoppingCartProduct.map(p => {
            return { id: p.id, amount: p.amount }
        })
        
        fetch(`http://localhost:3001/users/updateCart`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({updatedProducts})
        })
            .then()
            .catch(err => {
                console.error(err)
            })
    }, [ShoppingCartProduct]);


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
