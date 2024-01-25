import  React,{ useState } from "react";
import { Button } from "../regButton";
import { AddComment } from "./AddComment";


export const CommentBox = ({ postID }) => {
    console.log(postID);
    const [addComment, setAddComment] = useState(false);
    return (
        <>
            <Button onClick={() => setAddComment(!addComment)}>
                {addComment ? "Show Commensts" : "ADD Comments"}
            </Button>
            {addComment ? <AddComment postID={postID} /> : <div>Comments</div>}
        </>
    );
};
