import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import eye from '../../assets/eye.png'
import hide from '../../assets/hide.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

export const SignUp = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [inputType, setInputType] = useState('password');
    const [icon, setIcon] = useState(eye);
    const { createUser, updateUser } = useContext(AuthContext);



    


    const onSubmit = data => {
        console.log(data)
        if (data.password !== data.confirmPassword) {
            alert("password should be mathced")

        }
        else {
            createUser(data.email, data.password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    updateUser(data.name, data.photoURL)
                    .then(result => {
                        console.log(result.user)
                    })
                    .catch(error => console.log(error.meessage))
                    
                })
                .catch(error => console.log(error.message))
        }


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
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            </div>
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

                                    <input type={inputType} {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern:
                                            /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/,
                                    })} name="password" placeholder="password" className="input input-bordered inline-block" />


                                    <button onClick={handlePasswordToggle}><img className="w-[30px]" src={icon} /></button>
                                </div>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex">

                                    <input type={inputType} {...register("confirmPassword", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern:
                                            /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/,
                                    })} name="confirmPassword" placeholder="confirm password" className="input input-bordered inline-block" />


                                    <button onClick={handlePasswordToggle}><img className="w-[30px]" src={icon} /></button>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="photoURL" className="input input-bordered" />
                                </div>









                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">If already signed please Login</Link>
                            </label>
                            <div>
                                {errors.password?.type === "required" && (
                                    <p className="text-red-500 ">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-500 ">Password must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-500 ">
                                        Password must be less than 20 characters
                                    </p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-500 text-center">
                                        Password must have one uppercase one lowercase and one
                                        number one special character
                                    </p>)}
                            </div>


                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
}