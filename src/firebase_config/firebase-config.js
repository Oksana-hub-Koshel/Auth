import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCpIwe6EW3IxAi6gTM8FD7Zl_dUbh9K1zQ",
    authDomain: "vibrant-retina-371710.firebaseapp.com",
    databaseURL: "https://vibrant-retina-371710-default-rtdb.firebaseio.com",
    projectId: "vibrant-retina-371710",
    storageBucket: "vibrant-retina-371710.appspot.com",
    messagingSenderId: "658472563321",
    appId: "1:658472563321:web:08d79ff9d17e28b7ecdaa8"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
