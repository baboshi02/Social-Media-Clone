import React, { useEffect } from "react";

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
import { useDarkMode } from "./Hooks/useDarkMode";

export const App = () => {
  const [darkMode, setDatkmode] = useDarkMode();
  useEffect(() => {
    setDatkmode(true);
  }, []);
  const { authUser, loading } = useAuth();
  return (
    <Router>
      <div className="text-blue-600 text-center box-border">
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
              element={<Register Name="signIn" authUser={authUser} />}
            />
            <Route
              path="/signup"
              element={<Register Name="signUp" authUser={authUser} />}
            />
          </Routes>
        )}
      </div>
    </Router>
  );
};
