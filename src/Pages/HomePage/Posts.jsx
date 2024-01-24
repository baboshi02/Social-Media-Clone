import React, { useContext } from "react";
import { PostElement } from "./PostElement";
import { PostContext } from "../../context/PostsContext";

export const Posts = ({posts}) => {
    const {loading,users}=useContext(PostContext)
    return (
        <div className="mt-5 flex flex-col gap-1 items-center text-blue-600">
            {loading && <h1>Loading...</h1> }
            {posts?.map(({ docID, docData }) => (
                <PostElement
                    post={docData}
                    id={docID}
                    key={docData?.createdAt}
                />
            ))}
        </div>
    );
};
