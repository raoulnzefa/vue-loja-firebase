import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBn5PLpzZj753IigDKAWhhYs9tKoNKepdc",
    authDomain: "projetos-vue.firebaseapp.com",
    projectId: "projetos-vue",
    storageBucket: "projetos-vue.appspot.com",
    messagingSenderId: "1010152483590",
    appId: "1:1010152483590:web:d4a78ef14e262253eb4c87",
    measurementId: "G-X6W6N1B7HC"
};

const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export { fb, db }