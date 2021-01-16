import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import '@fortawesome/fontawesome-free/css/all.min.css'; import
    'bootstrap-css-only/css/bootstrap.min.css'; import
    'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import firebase from "firebase/app";

firebase.initializeApp({
    apiKey: "AIzaSyAozgAuIA6qczsPTh3VOfA5auQeI7MR9rU",
    authDomain: "hotsauceapp-56421.firebaseapp.com",
    projectId: "hotsauceapp-56421",
    storageBucket: "hotsauceapp-56421.appspot.com",
    messagingSenderId: "830033657123",
    appId: "1:830033657123:web:828c7055d79f86fc9a6096",
    measurementId: "G-1C6B0B469E"
});



ReactDOM.render(
    <App />,
    document.querySelector('#root')
)