import React from "react";
export const PostElement = (props) => {
    const { text, createdAt, userName,titleValue } = props.post;
    console.log(titleValue)
    const date = createdAt?.toDate().toLocaleDateString();
    const time = createdAt?.toDate().toLocaleTimeString();
    return (
        <div className="bg-slate-400 p-8 w-1/2 relative text-blue-900">
            <div className="absolute right-1 bottom-0">
                {date + "  " + time}
            </div>
            <div>
                Title: {titleValue}
            </div>
            <h1>{text}</h1>

            <div className="absolute left-1 top-0">r/{userName}</div>
        </div>
    );
};
