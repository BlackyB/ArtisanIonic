import React from 'react'
//import AuthService from './Services/AuthService'
import { Redirect, Route } from 'react-router-dom'

// @ts-ignore
const PrivateRoute = ({ component: Component, ...rest }) => {

    //const isLoggedIn = AuthService.isLoggedIn()
    const isLoggedIn = true

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/connexion', state: { from: props.location } }} />
                )
            }
        />
    )
}

export default PrivateRoute