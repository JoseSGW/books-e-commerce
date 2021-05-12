import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Catalogue } from '../components/Catalogue/Catalogue';
import { CatalogueContainer } from '../components/Container/CatalogueContainer';
import { DetailsBook } from '../components/DetailsBook/DetailsBook';
import { FilterBooks } from '../components/FilterBooks/FilterBooks';
import { Home } from "../components/Home/Home"
import { Nav } from '../components/Nav/Nav';




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
                        path='/'
                        component={Home}
                    />
                    <Route
                        path='/details/:idProduct'
                        component={DetailsBook}
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
