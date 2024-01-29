import React from "react";

export const Button = (props) => {
    return (
        <button
            {...props}
            className="  bg-[#98c1d9] rounded text-black active:bg-[#e0fbfc] hover:bg-[#3d5a80] p-1 border  h-8 my-auto overflow-hidden "
        >
            {props.children}
        </button>
    );
};

export const NavBarButton = (props) => {
    return (
        <button
            {...props}
            className="  bg-[#98c1d9] rounded text-black active:bg-[#e0fbfc] hover:bg-[#3d5a80] p-1 border h-8 my-auto overflow-hidden "
        >
            {props.children}
        </button>
    );
};
