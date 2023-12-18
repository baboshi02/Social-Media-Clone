import React from "react";
import { NavBar } from "../../components/NavBar";
import { collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { PostElement } from "./PostElement";
export const HomePage = (props) => {
    const postsRef = collection(db, "Posts");
    const [posts] = useCollectionData(postsRef, { idField: "id" });
    const { authUser } = props;
    return (
        <div>
            <NavBar />
            <h1>Welcome {authUser.email}</h1>
            {posts?.map((post) => (
                <PostElement post={post} />
            ))}
        </div>
    );
};
