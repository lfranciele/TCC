// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpFIIVce4MA0nHG2SqqdVEzJgEv-KrFz8",
    authDomain: "projetotcc-af358.firebaseapp.com",
    projectId: "projetotcc-af358",
    storageBucket: "projetotcc-af358.appspot.com",
    messagingSenderId: "1043013669347",
    appId: "1:1043013669347:web:fa49942d1baa084cc8d0d6",
    measurementId: "G-Y4SN9ZERED"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
const storage = firebase.storage()
export { auth, firestore, storage };