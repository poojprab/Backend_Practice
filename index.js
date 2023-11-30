const admin = require ('firebase-admin');
const express = require("express")
const bodyParser = require('body-parser');
const firebase = require('firebase')

const app = express();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_9WNNimm05RxfDDzJBkr5HzJOVH91kSQ",
    authDomain: "firebasics-3532a.firebaseapp.com",
    projectId: "firebasics-3532a",
    storageBucket: "firebasics-3532a.appspot.com",
    messagingSenderId: "526766126409",
    appId: "1:526766126409:web:97be1d314d7b5feb3e9698",
    measurementId: "G-EQ4Z3QFLY6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

