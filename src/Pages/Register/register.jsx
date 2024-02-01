import React, { useEffect, useState } from "react";
import { Button } from "../../components/regButton";
import { useNavigate } from "react-router-dom";
import { PiAndroidLogoFill } from "react-icons/pi";
import { auth, db } from "../../firebase";
import { signIn } from "../../utils/signIn";
import { signUp } from "../../utils/signUp";
import { debounce } from "../../utils/debounce";

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
            ? () => {
                  signIn(auth, email, password);
              }
            : () => {
                  signUp(auth, email, password, username);
              };
    const debouncedAction = debounce(() => {
        console.log("Button clicked")
        Action();
    },600);
    const InputStyle = "inline-block w-full  text-black mb-1 ";

    return (
        <>
            <div className="text-4xl my-2 text-center text-green-400 flex justify-center w-full   ">
                <PiAndroidLogoFill size={45} />
            </div>
            <div className="mx-auto  p-4 bg-[#282C35] rounded-md w-3/4 ">
                <h1 className="text-3xl font-sans">{pageName} </h1>
                <form
                    className="  p-1    rounded-md my-2"
                    onSubmit={(e) => {
                        e.preventDefault();
                        debouncedAction();
                    }}
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
                <div className="flex justify-end   ">
                    <Button onClick={(e) => navigate(`/${Link}`)}>
                        {pageName == "Sign In" ? "Sign Up" : "Sign In"}
                    </Button>
                </div>
            </div>
        </>
    );
};
