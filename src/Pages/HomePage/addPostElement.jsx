import React, { useState } from "react";
import { auth } from "../../firebase";
import { serverTimestamp } from "firebase/firestore";
import { Button } from "../../components/regButton";
import { setDoc, addDoc } from "firebase/firestore";
export const AddPostElement = (props) => {
    const [formValue, setFormValue] = useState("a");
    const { postsRef } = props;
    const sendPost = async (e) => {
        e.preventDefault();
        const { uid } = auth.currentUser;
        try {
            await addDoc(postsRef, {
                text: formValue,
                createdAt: serverTimestamp(),
                uid,
            });
            console.log("Document written with ID: ",postsRef.id)
        } catch (err) {
            console.log("Error adding element: ",err);
        }
    };

    return (
        <div>
            <form onSubmit={sendPost}>
                <input
                    type="text"
                    name="text"
                    onChange={(e) => setFormValue(e.target.value)}
                />
                <Button>add post</Button>
            </form>
        </div>
    );
};
