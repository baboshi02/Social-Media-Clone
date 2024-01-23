import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { auth, db } from "../../firebase";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
export const PostElement = (props) => {
    const navigate = useNavigate();
    const currentUID = auth.currentUser.uid;
    const postID = props.id;
    const { text, createdAt, userName, titleValue, uid } = props.post;
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

            <div className="flex justify-end gap-2   ">
                {currentUID == uid ? (
                    <>
                        <button
                            onClick={() => deleteDoc(doc(db, "Posts", postID))}
                            className="hover:bg-red-500 hover:cursor-pointer"
                        >
                            <FaRegTrashAlt />
                        </button>
                        <button
                            onClick={() => navigate(`/editPost/${postID}`)}
                            className="hover:bg-red-500 hover:cursor-pointer"
                        >
                            <FaEdit />
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() =>
                                alert(
                                    "This action must be used by the post publisher"
                                )
                            }
                            className="hover:bg-gray-500 hover:cursor-pointer"
                        >
                            <FaRegTrashAlt />
                        </button>
                        <button
                            onClick={() =>
                                alert(
                                    "This action must be used by the post publisher"
                                )
                            }
                            className="hover:bg-gray-500 hover:cursor-pointer"
                        >
                            <FaEdit />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};
