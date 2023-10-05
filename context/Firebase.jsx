import React, { createContext, useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; // or 'firebase/firestore' if you're using Firestore

const firebaseConfig = {
    
    apiKey: "AIzaSyCzJxF680kVrmf2XsOK2EM8kZeB8lglMkU",
    
    authDomain: "fir-tutorialap.firebaseapp.com",
    
    projectId: "fir-tutorialap",
    
    storageBucket: "fir-tutorialap.appspot.com",
    
    messagingSenderId: "960270789141",
    
    appId: "1:960270789141:web:d2eb9617e66bd8b7113c1c",
    
    measurementId: "G-X8RZLHT21R",

    databaseURL: "https://fir-tutorialap-default-rtdb.firebaseio.com/"
    
};



// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }
  
  // Create a Firebase context
  const FirebaseContext = createContext();
  
  // Firebase provider component
  export function FirebaseProvider({ children }) {
    return <FirebaseContext.Provider value={firebase}>{children}</FirebaseContext.Provider>;
  }
  
  // Custom hook to use Firebase throughout your app
  export function useFirebase() {
    return useContext(FirebaseContext);
  }