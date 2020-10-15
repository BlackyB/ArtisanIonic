import React, {Component} from "react";
import {AuthProvider} from "../context/AuthContext";
import {requestAPI} from "../API/API";

class Auth extends Component {

    defaultUser = {
        role: "1",
        email: "",
        firstName: "",
        lastName: "",
        token: "",
    }

    state = {
        authenticated: false,
        user: {
            ...this.defaultUser
        },
    };

    data = {};

    initiateLogin = async (data:any) => {

        let log = await requestAPI("POST", "LOGIN", null, data)
        if(log?.data?.result === true)
        {
            this.setSession(log.data.user)
            localStorage.setItem('user', JSON.stringify(log.data.user))
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
        });
        localStorage.removeItem("user")
    };
    login =() =>{
        
    }

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
            firstName: data.firstName,
            lastName: data.lastName,
            token: data.token
        };
        this.setState({
            authenticated: true,
            user
        });
    }
    setContext(){
        try {
            if(localStorage.getItem('user')){
                let user = JSON.parse(localStorage.getItem('user') || '{}')
              this.setState({authenticated: true,
                user})
             }
        } catch (error) {
           console.log(error) 
        }   
    }
    componentDidMount() {
        this.setContext();
      }
    render() {
            
        const authProviderValue = {
            ...this.state,
            initiateLogin: this.initiateLogin,
            handleAuthentication: this.handleAuthentication,
            logout: this.logout,
            login: this.login,
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