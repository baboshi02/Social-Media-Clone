import { useState, useEffect } from "react";
import { onAuthStateChanged  } from "firebase/auth";
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
    }, [auth]);

  
    return { authUser  ,loading};
};

