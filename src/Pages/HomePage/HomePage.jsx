import React, {useContext} from "react";
import { AuthUserContext } from "../../context/AuthUserContext";
import { Button } from "../../components/regButton";
export const HomePage = (props) => {
    const {authUser,signOut} = props;
//   const { authUser, signOut } = useContext(AuthUserContext);
    return (
        <div>
            <h1>Welcome {authUser.email}</h1>
            <Button onClick={signOut}>Sign Out</Button>
        </div>
    );
};
