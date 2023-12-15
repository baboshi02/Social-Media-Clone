import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut as SignOut } from "firebase/auth";
import { auth } from "../firebase";
export const useAuth = () => {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthUser(user);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, [authUser]);

    const signOut = () => {
        SignOut(auth)
            .then(() => setAuthUser(null))
            .catch((err) => console.error(err));
    };
    return { authUser, signOut ,loading,signOut};
};
