import React, {Component} from "react";
import {AuthProvider} from "../context/AuthContext";

class Auth extends Component {
    state = {
        authenticated: true,
        user: {
            role: "visitor"
        },
        accessToken: "KDJYGFHZGJDKHILOMKZDJHJGH"
    };

    data = {};

    initiateLogin = (data:any) => {
        console.log("Logging in")
        console.log(data)
        //TODO
    };

    logout = () => {
        this.setState({
            authenticated: false,
            user: {
                role: "visitor"
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

    setSession(data: { sub: any; email: any; roleUrl: any; accessToken: any; }) {
        // const user = {
        //     id: data.sub,
        //     email: data.email,
        //     role: data.roleUrl
        // };
        // this.setState({
        //     authenticated: true,
        //     accessToken: data.accessToken,
        //     user
        // });
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