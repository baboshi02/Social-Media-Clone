import React, {useContext} from "react";
import { signOut } from "../../utils/signOut";
import { Button } from "../../components/regButton";
import { NavBar } from "../../components/NavBar";
export const HomePage = (props) => {
    const {authUser} = props;
    return (
        <div >
            <NavBar />
            <h1>Welcome {authUser.email}</h1>
        </div>
    );
};
