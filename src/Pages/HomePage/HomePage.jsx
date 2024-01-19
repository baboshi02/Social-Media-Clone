import React from "react";
import { NavBar } from "../../components/NavBar";
import { collection, doc} from "firebase/firestore";
import { db,auth } from "../../firebase";
import { useCollectionData, useDocumentData } from "react-firebase-hooks/firestore";
import { PostElement } from "./PostElement";
import { AddPostElement } from "./addPostElement";
export const HomePage = (props) => {
    const postsRef = collection(db, "Posts");
    const {uid}=auth.currentUser
    const userNameRef=doc(db,"users",uid)
    const [users]=useDocumentData(userNameRef)
    const [posts,loading] = useCollectionData(postsRef, { idField: "id" });
    return (
        <div>
            <NavBar />
            {loading?<h1>Loading...</h1>:<h1>Welcome {users.username}</h1>}
            <AddPostElement postsRef={postsRef} />
            <div className="mt-5 flex flex-col gap-1 items-center text-blue-600">
                {posts?.map((post) => (
                    <PostElement post={post} key={post.createdAt} />
                ))}
            </div>
        </div>
    );
};
