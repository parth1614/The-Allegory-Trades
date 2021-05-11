import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAPiGQ8gHdlQszgsVaRIBSd2Sw-0DKTMIM",
    authDomain: "allegory-trades.firebaseapp.com",
    projectId: "allegory-trades",
    storageBucket: "allegory-trades.appspot.com",
    messagingSenderId: "779620474859",
    appId: "1:779620474859:web:47d6ec154cd44f8fb3c3ae",
    measurementId: "G-RY261K7N12"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export {db};