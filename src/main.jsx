import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AuthUserContextProvider } from "./context/AuthUserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthUserContextProvider>
        <App />
    </AuthUserContextProvider>
);
