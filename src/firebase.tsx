import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC7tgrjsp4NGcy2BPACTRYCP4uDrXSVEr0",
    authDomain: "artisanetmoi.firebaseapp.com",
    databaseURL: "https://artisanetmoi.firebaseio.com",
    projectId: "artisanetmoi",
    storageBucket: "artisanetmoi.appspot.com",
    messagingSenderId: "214255066031",
    appId: "1:214255066031:web:d7102e794ecc36c175ad5a",
    measurementId: "G-XSEQJ13WFP"
};

firebase.initializeApp(firebaseConfig);

export default firebase;