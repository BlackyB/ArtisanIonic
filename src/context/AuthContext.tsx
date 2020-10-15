import { createContext } from "react";

export const authContext = createContext({
    authenticated: false, // to check if authenticated or not
    user: {
        role: "",
        email: "",
        firstName: "",
        lastName: "",
        token: ""

    }, // store all the user details
    initiateLogin: (data:any) => {}, // to start the login process
    handleAuthentication: () => {}, // handle Auth0 login process
    logout: () => {}, // logout the user
    login:() => {}
});

export const AuthProvider = authContext.Provider;
export const AuthConsumer = authContext.Consumer;