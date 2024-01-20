import React from "react";
export const PostElement = (props) => {
    const { text, createdAt, userName, titleValue } = props.post;
    console.log(titleValue);
    const date = createdAt?.toDate().toLocaleDateString();
    const time = createdAt?.toDate().toLocaleTimeString();
    return (
        <div className="bg-slate-400 px-2 py-2 w-1/2 text-left relative  text-blue-900">
            <div className="mb-2">
                <small className="inline text-black ">u/{userName}</small>
                <small className="inline text-slate-100">{"     "+ date + "  " + time}</small>
            </div>
            <h1 className="text-black text-2xl
            ">{titleValue}</h1>
            <div className="p-6  ">
            <h1>{text}</h1>

            </div>
        </div>
    );
};
