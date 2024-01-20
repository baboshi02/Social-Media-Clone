import React, { useState, useRef } from "react";
import { auth, db } from "../../firebase";
import { serverTimestamp } from "firebase/firestore";
import { Button } from "../../components/regButton";
import { addDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const AddPostElement = (props) => {
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    const inputForm = useRef();
    const { postsRef } = props;
    const sendPost = async (e) => {
        e.preventDefault();
        if (formValue.length > 100) {
            return;
        }
        try {
            const { uid } = auth.currentUser;
            const userNameRef = doc(db, "users", uid);
            const userNameSnaphot = await getDoc(userNameRef);
            const userName = await userNameSnaphot.data().username;
            await addDoc(postsRef, {
                titleValue,
                text: formValue,
                createdAt: serverTimestamp(),
                uid,
                userName,
            });
            console.log("Document written with ID: ", postsRef.id);
        } catch (err) {
            console.log("Error adding element: ", err);
        } finally {
            navigate("/");
        }
    };

    return (
        <div className=" my-2 text-black">
            <form onSubmit={sendPost}>
                <div>
                    <input
                        required
                        type="text"
                        placeholder="Title"
                        name="title"
                        className="bg-slate-300 rounded mb-2" 
                        onChange={(e) => setTitleValue(e.target.value)}
                    />
                </div>
                <textarea
                    className="resize-none bg-slate-300 rounded-md p-1 border  border-gray-500"
                    required
                    autoFocus
                    name="text"
                    onChange={(e) => setFormValue(e.target.value)}
                    cols="30"
                    rows="10"
                    ref={inputForm}
                    placeholder="Post..."
                />
                <div>
                    <Button>add post</Button>
                    {formValue.length > 100 && (
                        <h1 className="text-red-500">
                            Post length is too long must be less than 100
                            characters
                        </h1>
                    )}
                </div>
            </form>
        </div>
    );
};
