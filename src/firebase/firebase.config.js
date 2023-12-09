// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQ0HUuygy4M-zrXI-sYBx-FT_sf4wHynA",
    authDomain: "react-dragon-news-auth-22e76.firebaseapp.com",
    projectId: "react-dragon-news-auth-22e76",
    storageBucket: "react-dragon-news-auth-22e76.appspot.com",
    messagingSenderId: "1056930669932",
    appId: "1:1056930669932:web:80a8226981918d65bebf49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;