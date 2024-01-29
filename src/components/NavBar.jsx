import React, { useContext } from "react";
import { NavBarButton } from "./regButton";
import { signOut } from "firebase/auth";
import { PiAndroidLogoFill } from "react-icons/pi";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../context/PostsContext";
export const NavBar = () => {
    const navigate = useNavigate();
    const { users } = useContext(PostContext);
    const currentLocation = location.pathname;
    return (
        <div className=" gap-2 bg-slate-500 flex justify-end pr-1 ">
            {" "}
            <div className=" mr-auto">
                <div className="text-4xl my-2 text-center text-green-400 flex justify-center w-full">
                    <PiAndroidLogoFill size={45} />
                </div>
            </div>
            {users && (
                <div className="my-auto">Signed in as {users.username}</div>
            )}
            
            {currentLocation == "/" ? (
                <NavBarButton onClick={() => navigate("/addPost")}>
                    Add Post{" "}
                </NavBarButton>
            ) : (
                <NavBarButton onClick={() => navigate("/")}>
                    {" "}
                    Discard{" "}
                </NavBarButton>
            )}
            <NavBarButton
                onClick={() => signOut(auth).catch((err) => console.error(err))}
            >
                Sign Out
            </NavBarButton>
        </div>
    );
};
