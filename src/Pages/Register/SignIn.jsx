import { Register } from "../../components/register";
import React from "react";
export const SignIn = (props) => {
    const authUser = props.authUser;
    return <Register Name="signIn" authUser={authUser} />;
};
