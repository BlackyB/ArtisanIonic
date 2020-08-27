import React, {useState} from "react";

const User = () => {
    const [is_logged, setIs_logged] = useState(false);
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('');
    const [created_at, setCreated_at] = useState('');
    const [last_connexion, setLast_connexion] = useState('');
}

export default User

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