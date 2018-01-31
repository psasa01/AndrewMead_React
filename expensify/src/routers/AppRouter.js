import React from 'react';
import {Link, Switch, BrowserRouter, Route, NavLink} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';


const AppRouter = () => (
    <BrowserRouter> 
        <div>
            <Header />
            <Switch>
                <Route 
                    path="/"
                    component={ExpenseDashboardPage}
                    exact={true}
                />
                <Route 
                    path="/create"
                    component={AddExpensePage}
                    
                />
                <Route
                    path="/edit/:id"
                    component={EditExpensePage}
                />
                <Route 
                    path="/help"
                    component={HelpPage}
                />
                <Route 
                    component={NotFoundPage}
                />
            </Switch>
        </div>
    </BrowserRouter>
) 

export default AppRouter;




