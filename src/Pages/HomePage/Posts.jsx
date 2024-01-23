import React from "react";
import { PostElement } from "./PostElement";
export const Posts = ({posts}) => {
    return (
        <div className="mt-5 flex flex-col gap-1 items-center text-blue-600">
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
