import { createContext } from "react";

export const authContext = createContext({
    authenticated: false,
    user: {
        role: "",
        email: "",
        firstName: "",
        lastName: "",
        token: ""

    },
    initiateLogin: (data:any) => {},
    logout: () => {},
});

export const AuthProvider = authContext.Provider;
export const AuthConsumer = authContext.Consumer;