// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbicsP2iXnuCdDbq2w_F7wrdH06b79k04",
    authDomain: "super-app-acb4f.firebaseapp.com",
    projectId: "super-app-acb4f",
    storageBucket: "super-app-acb4f.appspot.com",
    messagingSenderId: "118667147500",
    appId: "1:118667147500:web:c8fd6b170edef15fe38dc9",
    measurementId: "G-9FDY39ZJRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }