import { Register } from "../../components/register";
import React from "react";
export const SignUp = (props) => {
    const authUser = props.authUser;
    return <Register Name="signUp" authUser={authUser} />;
};
