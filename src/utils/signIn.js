import { signInWithEmailAndPassword } from "firebase/auth";
export const signIn =  (auth,email,password) => {
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
