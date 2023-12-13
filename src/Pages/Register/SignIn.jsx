import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Button } from "../../components/regButton";
import {useNavigate} from "react-router-dom"
export const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate=useNavigate()
    console.log("email: ", email);
    console.log("password: ", password);
    const signin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(
            (userCredential) =>
                console
                    .log("user", userCredential)
                    .catch((err) => console.log(err))
        );
    };
    const InputStyle = "inline-block w-full border-1 text-black w-1/2";
    return (
        <div
            onSubmit={signin}
            className="mx-auto p-4 bg-gray-500 rounded-md w-1/2 h-[50vh]"
        >
            <h1>Sign In</h1>
            <form className="border-2 border-[#f1f1f1] p-1 h-1/2">
                <label htmlFor="uname">
                    {" "}
                    <b>Email</b>{" "}
                </label>
                <input
                    type="text"
                    placeholder="Email"
                    name="uname"
                    className={InputStyle}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="pswrd">
                    <b>password</b>
                </label>
                <input
                    type="password"
                    placeholder="Password"
                    name="pswrd"
                    className={InputStyle}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button>
                    Sign in
                </Button>
            </form>
            <Button onClick={(e)=>navigate('/signup')}>
                Create Account
            </Button>
        </div>
    );
};
