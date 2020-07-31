import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import AuthRouter from './AuthRouter';
import DashBoardRouter from './DashBoardRouter';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth"
                        component={AuthRouter}
                    />
                    <Route 
                        path="/inicio"
                        component={DashBoardRouter}
                        exact
                    />
                    <Redirect 
                        to="/auth/login"
                    />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
