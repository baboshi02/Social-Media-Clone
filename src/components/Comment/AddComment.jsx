import React, { useState } from "react";
import { Button } from "../regButton";
import { submitComment } from "../../utils/submitComment";

import { useContext } from "react";
import { PostContext } from "../../context/PostsContext";
export const AddComment = ({postID}) => {
    const { users } = useContext(PostContext);
    const [commentValue, setCommentValue] = useState("");
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submitComment(postID, commentValue,users);
                }}
            >
                <textarea
                    className="resize-none"
                    name="comment"
                    cols="30"
                    rows="2"
                    maxLength={70}
                    onChange={(e) => setCommentValue(e.target.value)}
                />
                <div>
                    <Button>comment</Button>
                </div>
            </form>
        </div>
    );
};
