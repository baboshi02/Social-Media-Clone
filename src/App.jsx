import React from "react";

import { HomePage } from "./Pages/HomePage/HomePage";
import { useAuth } from "./Hooks/useAuth";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Register } from "./Pages/Register/register";

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
                            element={<Register Name="signIn" authUser={authUser} />}
                        />
                        <Route path="/signup" element={<Register Name="signUp" authUser={authUser}/>} />
                    </Routes>
                )}
            </div>
        </Router>
    );
};
