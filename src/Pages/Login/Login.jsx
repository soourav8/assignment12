import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import eye from '../../assets/eye.png'
import hide from '../../assets/hide.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



export const Login = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [inputType, setInputType] = useState('password');
    const [icon, setIcon] = useState(eye)
    const {logIn} = useContext(AuthContext);



    const onSubmit = data => {
        console.log(data)
        logIn(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => console.log(error.message))
        
    };

    const handlePasswordToggle = () => {
        if (inputType === 'password') {
            setInputType('text');
            setIcon(hide);
        }
        else {
            setInputType('password');
            setIcon(eye)

        }
    }





    return (
        <div className="-view">
            <form onSubmit={handleSubmit(onSubmit)} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login</h1>

                    </div>
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex">

                                    <input type={inputType} {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered inline-block" />
                                    <button onClick={handlePasswordToggle}><img className="w-[30px]" src={icon} /></button>
                                </div>


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>


                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label">
                                <Link to="/signup" className="label-text-alt link link-hover">New here  please Sign Up</Link>
                            </label>


                        </div>
                    </div>
                    </div>

            </form>
        </div>
    );
}