import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyC1-jbNBpxEqMDJ0IkxNMMTJqEaoLwDn10",
    authDomain: "consolefirebase-b9d91.firebaseapp.com",
    databaseURL: "https://consolefirebase-b9d91.firebaseio.com",
    projectId: "consolefirebase-b9d91",
    storageBucket: "consolefirebase-b9d91.appspot.com",
    messagingSenderId: "780671870833",
    appId: "1:780671870833:web:26b86038380e21524df8d0",
    measurementId: "G-V8BGTW6WWZ"
};

const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export { fb, db }