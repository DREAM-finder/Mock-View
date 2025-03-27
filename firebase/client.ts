import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth} from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfK0qw1FvUAtLQVTvJYqkHkA0WW_tLZ5I",
    authDomain: "prepview-e9fb8.firebaseapp.com",
    projectId: "prepview-e9fb8",
    storageBucket: "prepview-e9fb8.firebasestorage.app",
    messagingSenderId: "733663262311",
    appId: "1:733663262311:web:ec9ba228e1b03c81d286c2",
    measurementId: "G-KJ04QT9818"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth();
export const db = getFirestore()