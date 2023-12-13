import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut as SignOut } from "firebase/auth";
import { auth } from "../firebase";
export const useAuth = () => {
    const [authUser, setAuthUser] = useState();
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return listen;
    }, []);
    const signOut = () => {
        SignOut(auth)
            .then(() => setAuthUser(null))
            .catch((err) => console.error(err));
    };
    return { authUser, signOut };
};
