import { signInWithEmailAndPassword } from "firebase/auth";
export const signIn =  async(auth,email,password) => {

    try {
        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
    } catch (err) {
        alert(err);
    }
};
