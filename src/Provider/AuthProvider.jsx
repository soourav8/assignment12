import React, { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);









export const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const logIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);

    }






    const authInfo = {
        createUser,
        logIn
       
    }
    return (
       <AuthContext.Provider value={authInfo} >
        {children}
       </AuthContext.Provider>
    );
}