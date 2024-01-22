import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { auth, db } from "../../firebase";
import { deletePost } from "../../utils/deletePost";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export const PostElement = (props) => {
    const navigate=useNavigate()
    const currentUID = auth.currentUser.uid;
    const { text, createdAt, userName, titleValue, uid } = props.post;
    const postID = props.id;
    console.log(titleValue);
    const date = createdAt?.toDate().toLocaleDateString();
    const time = createdAt?.toDate().toLocaleTimeString();
    return (
        <div className="bg-slate-400 px-2 py-2 w-1/2 text-left relative  text-blue-900">
            <div className="mb-2">
                <small className="inline text-black ">u/{userName}</small>
                <small className="inline text-slate-100">
                    {"     " + date + "  " + time}
                </small>
            </div>
            <h1
                className="text-black text-2xl
            "
            >
                {titleValue}
            </h1>
            <div className="p-6  ">
                <h1>{text}</h1>
            </div>

            {currentUID == uid && (
                <div className="flex justify-end gap-2   ">
                    <div
                        onClick={() => deletePost(db, postID)}
                        className="hover:bg-red-500 hover:cursor-pointer"
                    >
                        <FaRegTrashAlt />
                    </div>
                    <div onClick={()=>navigate(`/editPost/${postID}`)} className="hover:bg-red-500 hover:cursor-pointer">
                        <FaEdit />
                    </div>
                </div>
            )}
        </div>
    );
};
