// store/UserProvider.js
import React, { createContext, Component } from "react"; 
import {requestAPI} from "../API/API";


export const UserContext = createContext({
    authenticated: false, // to check if authenticated or not
    user: {
        role: "",
        email: "",
        firstname: "",
        lastname: "",
    }, // store all the user details
    accessToken: "",
    initiateLogin: (data:any) => {}, // to start the login process
    logout: () => {}, // logout the user
    login:() => {}
});

class UserProvider extends Component {
    defaultUser = {
        role: "1",
        email: "",
        firstname: "",
        lastname: ""
    }

    state = {
        authenticated: false,
        user: {
            ...this.defaultUser
        },
        accessToken: "",
        initiateLogin: (data:any) => {},
    };
    initiateLogin = async (data:any) => {

        let log = await requestAPI("POST", "LOGIN", null, data)
        if(log?.data?.result === true)
        {
            localStorage.setItem('token', log.data.user.token)
        }

        return false

        //TODO
    };
    login = () => {
        
    }
    logout = () => {

    }

    render() {
        const authProviderValue = {
            ...this.state,
            initiateLogin: this.initiateLogin,
            logout: this.logout,
            login: this.login
        };
        return (
            <UserContext.Provider value={authProviderValue}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;