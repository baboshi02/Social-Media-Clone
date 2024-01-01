import React, { useState } from "react";
import { Button } from "../components/regButton";
import { useNavigate } from "react-router-dom";
import { FaReddit } from "react-icons/fa";
import { auth } from "../firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

export const Register = (props) => {
    const { authUser, Name } = props;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const Link = Name == "signIn" ? "signup" : "signin";
    const signin = async (e) => {
        e.preventDefault();
        try {
            const userCredentials = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(userCredentials);
        } catch (err) {
            alert(err);
        }
    };
    const signUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log("user", userCredential);
        } catch (err) {
            alert(err);
        }
    };
    const Action = Name == "signIn" ? signin : signUp;
    const navigate = useNavigate();
    if (authUser) {
        navigate("/");
    }

    const InputStyle = "inline-block w-full border-1 text-black w-1/2";
    return (
        <>
            <div className="text-4xl my-2 text-center text-red-700 flex justify-center w-full">
                <FaReddit size={45} />
                <h1>Reddit</h1>
            </div>
            <div className="mx-auto p-4 bg-gray-500 rounded-md w-1/2 h-[50vh] relative">
                <h1>{Name} </h1>
                <form
                    className="border-2 border-[#f1f1f1] p-1 h-1/2"
                    onSubmit={Action}
                >
                    <label htmlFor="uname">
                        <b>Email</b>
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
                    <Button>{Name}</Button>
                </form>
                <div className="absolute bottom-0 left-1/2 translate-x-[-50%]  m-1">
                    <Button onClick={(e) => navigate(`/${Link}`)}>
                        {Link}
                    </Button>
                </div>
            </div>
        </>
    );
};
