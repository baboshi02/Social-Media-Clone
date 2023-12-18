import React from "react";

export const Button = (props) => {
    return (
        <button
            {...props}
            className="bg-blue-400 rounded text-black hover:bg-blue-500 active:bg-blue-950 p-1 border"
        >
            {props.children}
        </button>
    );
};

export const NavBarButton = (props) => {
    return (
        <button
            {...props}
            className="bg-blue-400  rounded text-black hover:bg-blue-500 active:bg-blue-950 p-1 border"
        >
            {props.children}
        </button>
    );
};
