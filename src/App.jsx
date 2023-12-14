import React, {useContext} from "react";
import { FaReddit } from "react-icons/fa";
import { Register } from "./Pages/Register/Register";
import {  AuthUserContext } from "./context/AuthUserContext";
import { HomePage } from "./Pages/HomePage/HomePage";

export const App = () => {
    const {authUser}=useContext(AuthUserContext)
    return (

            <div className="text-blue-300">
                <div className=" text-4xl my-2 text-center text-red-700 flex justify-center  w-full">
                    <FaReddit size={45} />
                    <h1>Reddit</h1>
                </div>

                {authUser ? (
                  <HomePage />
                ) : (
                    <Register />
                )}
            </div>
    );
};
