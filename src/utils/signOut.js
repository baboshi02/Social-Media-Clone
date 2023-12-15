import { auth } from "../firebase";
import { signOut as SignOut } from "firebase/auth";
export  const signOut = () => {
        SignOut(auth)
            .catch((err) => console.error(err));
    };