import React, { useContext } from "react";
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

export const SocialLogin = (props) => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                        fetch('https://b7a12-summer-camp-server-side-soourav8.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
            navigate(from , {replace :true})



            
        })
        .catch(error => console.log(error.message))
    }
    return (
        <div className="text-center">
            <div className="devider "></div>
            <button onClick={handleGoogleSignIn} className="btn btn-circle ">
                <FaGoogle></FaGoogle>
                
            
               
            </button>
            
        </div>
    );
}