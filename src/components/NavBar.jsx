import React from "react";
import { NavBarButton } from "./regButton";
import { signOut } from "firebase/auth";
import { FaReddit } from "react-icons/fa";
import { auth } from "../firebase";
export const NavBar = () => {
    return (
        <div className=" gap-2 bg-slate-500 flex justify-end pr-1 ">
            <div className=" mr-auto">
                <div className="text-4xl my-2 text-center text-red-700 flex justify-center w-full">
                    <FaReddit size={45} />
                    <h1>Reddit</h1>
                </div>
            </div>

            <NavBarButton
                onClick={()=>signOut(auth).catch((err) => console.error(err))}
            >
                Sign Out
            </NavBarButton>
        </div>
    );
};
