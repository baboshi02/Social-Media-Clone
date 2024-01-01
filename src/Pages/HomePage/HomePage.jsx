import React from "react";
import { NavBar } from "../../components/NavBar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { PostElement } from "./PostElement";
import { AddPostElement } from "./addPostElement";
export const HomePage = (props) => {
    const postsRef = collection(db, "Posts");
    const [posts] = useCollectionData(postsRef, { idField: "id" });
    // getDocs(postsRef).then(snapshot=>snapshot.forEach(element => {
    //     console.log(element.id)

    // }))
    const { authUser } = props;
    return (
        <div>
            <NavBar />
            <h1>Welcome {authUser.email}</h1>
            <AddPostElement postsRef={postsRef} />
            <div className="mt-5 flex flex-col gap-1 items-center text-blue-600">
                {posts?.map((post) => (
                    <PostElement post={post} />
                ))}
            </div>
        </div>
    );
};
