import React from "react";
import { SignUp } from "./SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "./SignIn";
export const Register = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
};
