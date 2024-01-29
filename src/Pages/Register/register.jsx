import React, { useState } from "react";
import { Button } from "../../components/regButton";
import { useNavigate } from "react-router-dom";
import { FaReddit } from "react-icons/fa";
import { PiAndroidLogoFill } from "react-icons/pi";
import { auth } from "../../firebase";
import { signIn } from "../../utils/signIn";
import { signUp } from "../../utils/signUp";

export const Register = (props) => {
    const { authUser, Name } = props;
    const navigate = useNavigate();
    const pageName = Name == "signIn" ? "Sign In" : "Sign Up";

    if (authUser) {
        navigate("/");
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const Link = Name == "signIn" ? "signup" : "signin";
    const Action =
        Name == "signIn"
            ? (e) => {
                  e.preventDefault();
                  signIn(auth, email, password);
              }
            : (e) => {
                  e.preventDefault();
                  signUp(auth, email, password, username);
              };
    const InputStyle = "inline-block w-full border-1 text-black w-1/2 ";

    return (
        <>
            <div className="text-4xl my-2 text-center text-red-700 flex justify-center w-full">
                <PiAndroidLogoFill size={45} />
                <h1>Reddit</h1>
            </div>
            <div className="mx-auto p-4 bg-gray-500 rounded-md w-3/4 ">
                <h1 className="text-3xl font-sans">{pageName} </h1>
                <form
                    className="  p-1 h-1/2 border border-white rounded-md"
                    onSubmit={(e) => Action(e)}
                >
                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input
                        value={email}
                        required
                        type="text"
                        placeholder="Email"
                        name="email"
                        className={InputStyle}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="pswrd">
                        <b>password</b>
                    </label>
                    <input
                        value={password}
                        required
                        type="password"
                        placeholder="Password"
                        name="pswrd"
                        className={InputStyle}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {Name == "signUp" ? (
                        <div>
                            <label htmlFor="username">
                                <b>username</b>
                            </label>

                            <input
                                value={username}
                                required
                                type="text"
                                placeholder="usename"
                                name="username"
                                className={InputStyle}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    ) : (
                        ""
                    )}
                    <Button>{pageName}</Button>
                </form>
                <div className="flex justify-end   m-1">
                    <Button onClick={(e) => navigate(`/${Link}`)}>
                        {pageName == "Sign In" ? "Sign Up" : "Sign In"}
                    </Button>
                </div>
            </div>
        </>
    );
};
