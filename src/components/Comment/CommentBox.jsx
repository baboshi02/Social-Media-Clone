import  React,{ useState } from "react";
import { Button } from "../regButton";
import { AddComment } from "./AddComment";
import { ShowComments } from "./ShowComments";

export const CommentBox = ({ postID }) => {
    console.log(postID);
    const [isAddingComment, setIsAddingComment] = useState(false);
    return (
        <>
            <Button onClick={() => setIsAddingComment(!isAddingComment)}>
                {isAddingComment ? "Show Commensts" : "ADD Comments"}
            </Button>
            {isAddingComment ? <AddComment postID={postID} setIsAddingComment={setIsAddingComment} /> : <ShowComments postID={postID} />}
        </>
    );
};
