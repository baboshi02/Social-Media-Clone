import { createContext } from "react";
import React from "react";
import { collection, doc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useCollection, useDocumentData } from "react-firebase-hooks/firestore";

export const PostContext = createContext();

const getPosts = () => {
    let posts = [];
    const postsRef = collection(db, "Posts");
    const [snapShot, loading,error] = useCollection(postsRef, { idField: "id" });
    console.log("error: " + error)
    snapShot?.forEach((doc) => {
        posts.push({ docID: doc.id, docData: doc.data() });
    });
    return [posts, loading];
};

const getUsers = () => {
    const { uid } = auth.currentUser;
    const userNameRef = doc(db, "users", uid);
    const [users, ,error] = useDocumentData(userNameRef);
    console.log("error: ", error)
    return users;
};

export const PostContextProvider = (props) => {
    const [posts, loading] = getPosts();
    const users = getUsers();
    const values = { posts, loading, users };
    return (
        <PostContext.Provider value={values}>
            {props.children}
        </PostContext.Provider>
    );
};
