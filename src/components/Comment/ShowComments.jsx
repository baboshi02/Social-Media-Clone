import React from "react";
import { query, collection, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

export const ShowComments = ({ postID }) => {
    console.log("postID", postID);
    const q = query(collection(db, "Comments"), where("postId", "==", postID));
    const [comments, loading] = useCollectionData(q);
    console.log("Comments length = ", comments?.length);
    const isComments=comments?.length>0 && " overflow-y-scroll h-24"
    return (
        <div className={isComments} >
            
            {loading ? (
                <h1>Loading...</h1>
            ) : comments?.length > 0 ? (
                comments.map(({ publisher, value, createdAt }) => {
                    const date = createdAt?.toDate().toLocaleDateString();
                    const time = createdAt?.toDate().toLocaleTimeString();

                    return (
                        <div
                            className="border border-gray-500 p-1 mb-1 rounded h-20"
                            key={date + time}
                        >
                            <div className="mb-2">
                                <small className="inline text-gray-300 ">
                                    u/{publisher}
                                </small>
                                <small className="inline text-slate-100">
                                    {"     " + date + "  " + time}
                                </small>
                            </div>
                            <p className="px-3 text-gray-100">{value}</p>
                        </div>
                    );
                })
            ) : (
                <h1>No Comments</h1>
            )}
        </div>
    );
};
