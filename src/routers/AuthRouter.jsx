import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import LoginScreen from '../auth/LoginScreen';
import RegisterScreen from '../auth/RegisterScreen';

const AuthRouter = () => {
    return (
        <div className="auth">
            <div className="container">
                <div className="auth__content">
                    <div className="auth__header">
                        <div className="auth__top">
                            <div className="auth__menu">
                                <i className="auth__icon fas fa-bars"></i>
                            </div>
                            <ul className="auth__list">
                                <li className="auth__item auth__item--first">
                                    <NavLink 
                                        activeClassName="auth__link--active"
                                        className="auth__link"
                                        to="/auth/menu"
                                    >
                                        MENU
                                    </NavLink>
                                </li>
                                <li className="auth__item auth__item--second">
                                    <NavLink 
                                        activeClassName="auth__link--active"
                                        className="auth__link"
                                        to="/auth/login"
                                    >
                                        LOGIN
                                    </NavLink>
                                </li>
                                <li className="auth__item">
                                    <NavLink 
                                        activeClassName="auth__link--active"
                                        className="auth__link"
                                        to="/auth/register"
                                    >
                                        REGISTER
                                    </NavLink>
                                </li>
                            </ul>

                        </div>
                        <div className="auth__bottom">
                            <h1>Welcome</h1>
                        </div>
                    </div>
                    <div className="auth__body">
                        <Switch>
                            <Route
                                path="/auth/login"
                                component={LoginScreen}
                                exact
                            />
                            <Route
                                path="/auth/register"
                                component={RegisterScreen}
                                exact
                            />
                            <Redirect
                                to="/auth/login"
                            />
                        </Switch>
                        <div className="auth__footer">
                            <ul className="auth__aside">
                                <li className="auth__aside-item">
                                    <a href="#" className="auth__aside-link">About</a>
                                </li>
                                <li className="auth__aside-item">
                                    <a href="#" className="auth__aside-link">Impress</a>
                                </li>
                                <li className="auth__aside-item">
                                    <a href="#" className="auth__aside-link">Privacy</a>
                                </li>
                                <li className="auth__aside-item">
                                    <a href="#" className="auth__aside-link">Degress</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthRouter
