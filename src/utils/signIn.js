import { signInWithEmailAndPassword } from "firebase/auth";
export const signIn =  (e,auth,email,password) => {
    e.preventDefault()
    try {
        signInWithEmailAndPassword(
            auth,
            email,
            password
        );
    } catch (err) {
        alert(err);
    }
};
