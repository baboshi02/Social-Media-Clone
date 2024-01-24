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
import { PostContextProvider } from "./context/PostsContext";

export const App = () => {
    const { authUser, loading } = useAuth();
    console.log(authUser)
    return (
        <Router>
            <div className="text-blue-300 text-center box-border">
                {loading ? (
                    <div> Loading...</div>
                ) : (
                    <Routes>
                        <Route
                            path="/*"
                            element={
                                authUser ? (
                                    <PostContextProvider>
                                        <HomePage />
                                    </PostContextProvider>
                                ) : (
                                    <Navigate to="/signin" />
                                )
                            }
                        />
                        <Route
                            path="/signin"
                            element={
                                <Register Name="signIn" authUser={authUser} />
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <Register Name="signUp" authUser={authUser} />
                            }
                        />
                    </Routes>
                )}
            </div>
        </Router>
    );
};
