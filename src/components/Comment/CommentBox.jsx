import  React,{ useState } from "react";
import { Button } from "../regButton";
import { AddComment } from "./AddComment";
import { ShowComments } from "./ShowComments";

export const CommentBox = ({ postID }) => {
    console.log(postID);
    const [isAddingComment, setIsAddingComment] = useState(false);
    return (
        <div className="border border-gray-700 bg-slate-600 text-gray-300 p-2 my-2 rounded-md">
            <Button onClick={() => setIsAddingComment(!isAddingComment)}>
                {isAddingComment ? "Show Commensts" : "ADD Comments"}
            </Button>
            {isAddingComment ? <AddComment postID={postID} setIsAddingComment={setIsAddingComment} /> : <ShowComments postID={postID} />}
        </div>
    );
};
