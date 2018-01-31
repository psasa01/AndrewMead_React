import React from 'react';
import {Link, Switch, BrowserRouter, Route, NavLink} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';

import Header from '../components/Header';
import MainPage from '../components/MainPage';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import PortfolioItem from '../components/PortfolioItem';



const AppRouter = () => (
    <BrowserRouter> 
        <div>
            <Header />
            <Switch>
                <Route 
                    path="/"
                    component={MainPage}
                    exact={true}
                />
                <Route 
                    path="/portfolio"
                    component={Portfolio}
                    exact={true}
                    
                />
                <Route
                    path="/portfolio/:id"
                    component={PortfolioItem}
                />
                <Route 
                    path="/contact"
                    component={Contact}
                />
                <Route 
                    component={NotFoundPage}
                />
            </Switch>
        </div>
    </BrowserRouter>
) 

export default AppRouter;




