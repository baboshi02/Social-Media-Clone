import React from "react";
import { query, collection, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

export const ShowComments = ({ postID }) => {
    console.log("postID", postID);
    const q = query(collection(db, "Comments"), where("postId", "==", postID));
    const [comments] = useCollectionData(q);
    console.log(comments);
    return (
        <div className="h-10 overflow-scroll overflow-x-scroll">
            {comments?comments.map((comment) => (
                <h1>{comment.value}</h1>
            )):<h1>Loading...</h1>}
        </div>
    );
};
