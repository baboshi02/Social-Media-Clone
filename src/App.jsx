import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaReddit } from "react-icons/fa";
import { SignUp } from "./Pages/SignUp";
import { SignIn } from "./Pages/SignIn";
export const App = () => {
    return (
        <div className="text-blue-300">
            <div className=" text-4xl my-2 text-center text-red-700 flex justify-center  w-full">
                <FaReddit size={45} />
                <h1>Reddit</h1>
            </div>
            <Router>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </Router>

        </div>
    );
};
