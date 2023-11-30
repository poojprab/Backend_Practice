const admin = require ('firebase-admin');
const express = require("express");
const bodyParser = require('body-parser');

// used for server side applications
// code is executed on the server
const serviceAccount = require('./firebase-p-key.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://firebasics-3532a.appspot.com',
});

const app = express();
app.use(bodyParser.json());

const db = admin.firestore();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// used for client side applications
// code is executed on the user's browser
/*
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
*/
