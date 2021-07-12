import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDHm_EDRhsqQwpDdzh7lZV4GJtpjpRS26A",
    authDomain: "react-coder-dl.firebaseapp.com",
    projectId: "react-coder-dl",
    storageBucket: "react-coder-dl.appspot.com",
    messagingSenderId: "415394822933",
    appId: "1:415394822933:web:2ee1a1bcc6680f3c6b871c",
    measurementId: "G-CM5BR7173W"
})


export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}