import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { auth, db } from "../../firebase";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { FaComment } from "react-icons/fa6";
import { CommentBox } from "../../components/Comment/CommentBox";
export const PostElement = (props) => {
    const navigate = useNavigate();
    const [activeComments, setActiveComments] = useState(false);
    const currentUID = auth.currentUser.uid;
    const postID = props.id;
    const { text, createdAt, userName, titleValue, uid } = props.post;
    const date = createdAt?.toDate().toLocaleDateString();
    const time = createdAt?.toDate().toLocaleTimeString();
    return (
        <div className="w-1/2 bg-slate-400 text-blue-900 px-4 py-2  text-left">
            <div className="  relative  ">
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
                                title="Delete post"
                                onClick={() =>
                                    deleteDoc(doc(db, "Posts", postID))
                                }
                                className="hover:bg-red-500 hover:cursor-pointer"
                            >
                                <FaRegTrashAlt />
                            </button>
                            <button
                            title="Edit post"
                                onClick={() => navigate(`/editPost/${postID}`)}
                                className="hover:bg-red-500 hover:cursor-pointer"
                            >
                                <FaEdit />
                            </button>
                            <button
                                title="Comment"
                                onClick={() =>
                                    setActiveComments(!activeComments)
                                }
                                className="hover:cursor-pointer"
                            >
                                <FaComment />
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                            title="Delete post"
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
                            title="Edit post"
                                onClick={() =>
                                    alert(
                                        "This action must be used by the post publisher"
                                    )
                                }
                                className="hover:bg-gray-500 hover:cursor-pointer"
                            >
                                <FaEdit />
                            </button>
                            <button
                            title="Comment"
                                onClick={() =>
                                    setActiveComments(!activeComments)
                                }
                                className="hover:cursor-pointer"
                            >
                                <FaComment />
                            </button>
                            <div></div>
                        </>
                    )}
                </div>
            </div>
            {activeComments && <CommentBox postID={postID} />}
        </div>
    );
};
