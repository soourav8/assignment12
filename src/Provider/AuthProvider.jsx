import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();









export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const logIn = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password);

    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const updateUser = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)


    }





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser)});
        return () => {
            return unsubscribe();
        }
    }, [])






    const authInfo = {
        createUser,
        logIn,
        logOut,
        user,
        loading,
        updateUser,
        googleSignIn

    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
}