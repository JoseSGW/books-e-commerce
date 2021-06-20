import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { addToShoppingCart } from '../actions/ShoppingCart';
import { CatalogueContainer } from '../components/Container/CatalogueContainer';
import { ContainerProductsInCart } from '../components/ContainerProductsInCart/ContainerProductsInCart';
import { DetailsBook } from '../components/DetailsBook/DetailsBook';
import { Home } from "../components/Home/Home"
import { Nav } from '../components/Nav/Nav';
import { Login } from '../components/User/Login/Login';
import { SignIn } from '../components/User/Sign-In/SignIn';



export const AppRouter = () => {

    const { ShoppingCartProduct } = useSelector(state => state.shoppingCart)
    const { user } = useSelector(state => state.userLoggedIn)

    const dispatch = useDispatch()

    let token;

    if (localStorage.getItem('user')) {
        token = JSON.parse(localStorage.getItem('user')).token
    }

    window.onbeforeunload = () => {

        fetch('http://localhost:3001/auth/saveShoppingCart', {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
    }


    useEffect(() => {
        fetch('http://localhost:3001/auth/userHaveAShoppingCart', {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
            .then(response => response.json())
            .then(products => {
                dispatch(addToShoppingCart(products))
            })
            .catch(error => console.error('Error:', error))
    }, [])


    // si no hay user logeado se guardara el carrito en el local storage
    useEffect(() => {
        if (!user.firstname) {
            const localProducts = JSON.parse(localStorage.getItem('guestShoppingCart'));
            if (localProducts && localProducts[0] != null) {
                dispatch(addToShoppingCart(localProducts))
            }
        }
    }, [user])


    useEffect(() => {
        if (!user.firstname) {
            localStorage.setItem('guestShoppingCart', JSON.stringify(ShoppingCartProduct))
        }

        const updatedProducts = ShoppingCartProduct.map(p => {
            return { id: p.id, amount: p.amount }
        })

        fetch(`http://localhost:3001/users/updateCart`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ updatedProducts })
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
