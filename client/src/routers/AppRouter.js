import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Catalogue } from '../components/Catalogue/Catalogue';
import { Home } from "../components/Home/Home"


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path='/catologue'
                        component={Catalogue}
                    />
                    <Route
                        path='/'
                        component={Home}
                    />
                    
                </Switch>
            </div>
        </Router>
    )
}
