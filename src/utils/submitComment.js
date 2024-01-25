import {  collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
export const submitComment = (postId, commentValue,users) => {

    const values = {
        publisher: users.username,
        postId,
        value: commentValue,
        createdAt: serverTimestamp(),
    };

    const commentRef = collection(db, "Comments");
    addDoc(commentRef, values);
};
