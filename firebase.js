// Import the functions you need from the SDKs you need
// import firebase from 'firebase';
import React from "react";

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjNoHqTTMXNiFxpDEH4QIZdg1iJofEHd0",
  authDomain: "chatapp-two.firebaseapp.com",
  projectId: "chatapp-two",
  storageBucket: "chatapp-two.appspot.com",
  messagingSenderId: "496413295627",
  appId: "1:496413295627:web:1aa4c8e4102f237882330e",
  measurementId: "G-HCT3KLDFW8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);