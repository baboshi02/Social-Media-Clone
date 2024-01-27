import React from "react";
import { query, collection, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

export const ShowComments = ({ postID }) => {
    console.log("postID", postID);
    const q = query(collection(db, "Comments"), where("postId", "==", postID));
    const [comments] = useCollectionData(q);
    console.log("Comments length = ",comments?.length);
    return (
        <div className=" overflow-scroll overflow-x-scroll">
            {comments ? (
                comments.map(({ publisher, postId, value, createdAt }) => {
                    const date = createdAt?.toDate().toLocaleDateString();
                    const time = createdAt?.toDate().toLocaleTimeString();

                    return (
                        <div className="border border-white pb-1" key={date+time}>
                            <div className="mb-2">
                                <small className="inline text-black ">
                                    u/{publisher}
                                </small>
                                <small className="inline text-slate-100">
                                    {"     " + date + "  " + time}
                                </small>
                            </div>
                            <p className="px-3">{value}</p>
                        </div>
                    );
                })
            ) : (
                <h1>No Comments</h1>
            )}
        </div>
    );
};
