import React, { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



export const AuthContext = createContext(null);
const auth = getAuth(app);








export const AuthProvider = ({children}) => {






    // const authInfo = {
    //     user,
    //     loading,
    //     createUser,
    //     signIn,
    //     googleSignIn,
    //     logOut,
    //     updateUserProfile
    // }
    return (
       <AuthContext.Provider value={authInfo} >
        {children}
       </AuthContext.Provider>
    );
}