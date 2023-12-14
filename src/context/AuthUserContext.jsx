import { useAuth } from "../Hooks/useAuth";
import { createContext } from "react";
import React from "react";
export const AuthUserContext = createContext();

export const AuthUserContextProvider = (props) => {
    const {authUser,signOut}=useAuth();
    const values={authUser,signOut}
    console.log(authUser?.email)
    return (
        <AuthUserContext.Provider value={values}>
            {props.children}
        </AuthUserContext.Provider>
    );
};
