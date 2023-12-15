import React from "react";
import { FaReddit } from "react-icons/fa";
import { HomePage } from "./Pages/HomePage/HomePage";
import { useAuth } from "./Hooks/useAuth";
import { BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
import { SignIn } from "./Pages/Register/SignIn";
import { SignUp } from "./Pages/Register/SignUp";

export const App = () => {
    const { authUser,loading,signOut } = useAuth();

    return (
        <Router>
            <div className="text-blue-300">
                <div className="text-4xl my-2 text-center text-red-700 flex justify-center w-full">
                    <FaReddit size={45} />
                    <h1>Reddit</h1>
                </div>
                {loading ? (
                    <div> Loading...</div>
                ) : (
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={authUser ? <HomePage authUser={authUser} signOut={signOut}/> : <Navigate to="/signin"/>}
                        />
                        <Route path="/signin" element={<SignIn authUser={authUser}/>} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                )}
            </div>
        </Router>
    );
};
