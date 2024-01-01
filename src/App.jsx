import React from "react";

import { HomePage } from "./Pages/HomePage/HomePage";
import { useAuth } from "./Hooks/useAuth";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { SignIn } from "./Pages/Register/SignIn";
import { SignUp } from "./Pages/Register/SignUp";

export const App = () => {
    const { authUser, loading } = useAuth();

    return (
        <Router>
            <div className="text-blue-300 text-center box-border">
           
                {loading ? (
                    <div> Loading...</div>
                ) : (
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                authUser ? (
                                    <HomePage authUser={authUser} />
                                ) : (
                                    <Navigate to="/signin" />
                                )
                            }
                        />
                        <Route
                            path="/signin"
                            element={<SignIn authUser={authUser} />}
                        />
                        <Route path="/signup" element={<SignUp authUser={authUser}/>} />
                    </Routes>
                )}
            </div>
        </Router>
    );
};
