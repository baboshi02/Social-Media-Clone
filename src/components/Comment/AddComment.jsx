import React, { useState } from "react";
import { Button } from "../regButton";
import { submitComment } from "../../utils/submitComment";

import { useContext } from "react";
import { PostContext } from "../../context/PostsContext";
export const AddComment = ({postID,setIsAddingComment}) => {
    const { users } = useContext(PostContext);
    const [commentValue, setCommentValue] = useState("");
    return (
        <div >
            <form
                onSubmit={(e) => {
                    if (commentValue.length<=0 || commentValue.length>100) {
                        alert("Comment value must be between 0 and 100 characters long")
                        return
                    }
                    e.preventDefault();
                    submitComment(postID, commentValue,users);
                    setIsAddingComment((prev)=>!prev);

                }}
            >
                <textarea
                    className="resize-none overflow-auto w-full bg-slate-300 rounded  border-gray-500 text-black"
                    placeholder="Comment..."
                    name="comment"
                    cols="30"
                    rows="2"
                    maxLength={70}
                    onChange={(e) => setCommentValue(e.target.value)}
                    required
                />
                <div>
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    );
};
