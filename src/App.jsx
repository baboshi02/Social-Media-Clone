import React from "react";
import { FaReddit } from "react-icons/fa";
import { Register } from "./Pages/Register/Register";
import { useAuth } from "./Hooks/useAuth";
import { Button } from "./components/regButton";
export const App = () => {
    
    const {authUser,signOut} = useAuth()
    return (
        <div className="text-blue-300">
            <div className=" text-4xl my-2 text-center text-red-700 flex justify-center  w-full">
                <FaReddit size={45} />
                <h1>Reddit</h1>
            </div>
            
            {authUser? (
                <div>
                    <h1>Welcome {authUser.email}</h1>
                    <Button onClick={signOut}>
                        Sign Out
                    </Button>
                </div>
            ) : <Register/>}
        </div>
    );
};
