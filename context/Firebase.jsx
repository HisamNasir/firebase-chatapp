import React,{ createContext, useContext } from "react";
import {initializeApp} from 'firebase/app'
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";


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

const firebaseApp=initializeApp(firebaseConfig);
const firebaseAuth=getAuth(firebaseApp);
const database=getDatabase(firebaseApp);
const FirebaseContext = createContext(null);

export const useFirebase=()=>useContext(FirebaseContext);

export const FirebaseProvider=(props)=>{
    const signupUserWithEmailAndPassword =(email,password)=>{
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
          // Handle successful user creation here
          const user = userCredential.user;
          console.log("User created:", user);
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error creating user:", error);
        });
    };
    const putData=(key,data)=>set(ref(database,key),data);
    return(
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,putData }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}