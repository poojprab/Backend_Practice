// Firebase Admin SDK
// An SDK: Software Development Kit (firebase)
const admin = require ('firebase-admin');
// web framework for node.js
const express = require("express");
// Middleware for 3rd party access like firebase
const cors = require("cors");
// middleware to parse incoming web requests through json
const bodyParser = require('body-parser');

// used for server side applications
// code is executed on the server
const serviceAccount = require('./firebasics-p-key.json');
// Initializes the Firebase Admin SDK using the provided service account credentials.
// Configures the storage bucket for Firebase Storage.
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://firebasics-3532a.appspot.com',
});

// create an express application
const app = express();
// allow to parse requests sent through json
app.use(bodyParser.json());
app.use(cors());

const db = admin.firestore();

const studentRoutes = require("./api/routes/studentRoutes");
const professorRoutes = require("./api/routes/professorRoutes");
const classRoutes = require("./api/routes/classRoutes");
const universityRoutes = require("./api/routes/universityRoutes");

app.use("/students", studentRoutes);
app.use("/professors", professorRoutes);
app.use("/classes", classRoutes);
app.use("/universities", universityRoutes);


app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: error.message || "Internal Server Error",
    });
});


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
