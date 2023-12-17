import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
export const useSignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    console.log("email: ", email);
    console.log("password: ", password);
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential) =>
                console
                    .log("user", userCredential)
                    
        ).catch(err => console.log("error", err))}
    return {signUp,setEmail,setPassword}
}

