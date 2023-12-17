import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const useSignIn = () => {
    const navigate=useNavigate()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    console.log("email: ", email);
    console.log("password: ", password);
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(navigate("/"))
            .catch((err) => console.log("error", err));
    };
    return { signIn, setEmail, setPassword };
};
