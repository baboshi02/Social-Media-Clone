import React, { useState, useRef } from "react";
import { auth,db } from "../../firebase";
import { serverTimestamp } from "firebase/firestore";
import { Button } from "../../components/regButton";
import { addDoc,doc,getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const AddPostElement = (props) => {
    const navigate=useNavigate()
    const [formValue, setFormValue] = useState("");
    const inputForm = useRef();
    const { postsRef } = props;
    const sendPost = async (e) => {
        e.preventDefault();
        
        try {
            const { uid } = auth.currentUser;
            const userNameRef = doc(db, "users", uid);
            const userNameSnaphot=await getDoc(userNameRef)
            const userName=await userNameSnaphot.data().username
            await addDoc(postsRef, {
                text: formValue,
                createdAt: serverTimestamp(),
                uid,
                userName,
            });
            console.log("Document written with ID: ", postsRef.id);
        } catch (err) {
            console.log("Error adding element: ", err);
        } finally {
            navigate('/')
        }
    };

    return (
        <div>
            <form onSubmit={sendPost}>
                <input
                    type="text"
                    name="text"
                    onChange={(e) => setFormValue(e.target.value)}
                    ref={inputForm}
                />
                <Button>add post</Button>
            </form>
        </div>
    );
};
