import React, {Component} from "react";
import {AuthProvider} from "../context/AuthContext";
import {requestAPI} from "../API/API";

class Auth extends Component {

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
        accessToken: ""
    };

    data = {};

    initiateLogin = async (data:any) => {

        let log = await requestAPI("POST", "LOGIN", null, data)
        if(log.data?.result === true)
        {
            this.setSession(log.data.user)
        }

        return false

        //TODO
    };

    logout = () => {
        this.setState({
            authenticated: false,
            user: {
                ...this.defaultUser
            },
            accessToken: ""
        });
    };

    handleAuthentication = () => {
        //TODO

        // auth.parseHash((error, authResult) => {
        //     if (error) {
        //         console.log(error);
        //         console.log(`Error ${error.error} Occured`);
        //         return;
        //     }
        //
        //     this.setSession(authResult.idTokenPayload);
        // });
    };

    setSession(data: any) {
        const user = {
            role: data.role.id,
            email: data.email,
            firstname: data.firstName,
            lastname: data.lastName
        };
        this.setState({
            authenticated: true,
            accessToken: "",
            user
        });
    }

    render() {
        const authProviderValue = {
            ...this.state,
            initiateLogin: this.initiateLogin,
            handleAuthentication: this.handleAuthentication,
            logout: this.logout
        };
        return (
            <AuthProvider value={authProviderValue}>
                {this.props.children}
            </AuthProvider>
        );
    }
}

export default Auth;

// const Auth = () => {
//
//     const [state, setState] = useState(
//         {
//             authenticated: false,
//             user: {
//                 role: "visitor"
//             },
//             accessToken: ""
//         }
//     );
//
//     const initiateLogin = () => {
//         //TODO Login API CALL
//     };
//
//     const logout = () => {
//         setState({
//                 authenticated: false,
//                 user: {
//                     role: "visitor"
//                 },
//                 accessToken: ""
//             }
//         )
//     };
//
//     const handleAuthentication = () => {
//         //TODO Login API CALL
//     };
//
//     let data = null;
//
//     const setSession = (data: { sub: any; email: any; role: any; accessToken: any; } | null) => {
//         const user = {
//             id: data?.sub,
//             email: data?.email,
//             role: data?.role
//         };
//         setState({
//             authenticated: true,
//             user: user,
//             accessToken: data?.accessToken,
//         });
//     };
//
//     const authProviderValue = {
//         authenticated: state.authenticated,
//         user: state.user,
//         accessToken: state.accessToken,
//         initiateLogin: initiateLogin,
//         handleAuthentication: handleAuthentication,
//         logout: logout,
//     };
//
//     return (
//         <AuthProvider value={authProviderValue}/>
//     )
//
// }
//
// export default Auth

//
//
// class UserBis extends React.Component {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             isLogged : false,
//             name: '',
//             email: '',
//             created_at: '',
//             last_connexion: '',
//         };
//     }
// }