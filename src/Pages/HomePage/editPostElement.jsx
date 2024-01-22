import React, { useState  } from "react";
import { Button } from "../../components/regButton";
import {doc, updateDoc} from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { db } from "../../firebase";

export const EditPostElement = ({posts}) => {
    
    const {id}=useParams()
    const navigate = useNavigate();
    const handleFormSubmit=()=>{
       const postRef=doc(db,"Posts",id)
       updateDoc(postRef,{
        titleValue,
        text:formValue,

       })
       navigate('/')
    }
    const post=posts.find(post => post.docID===id)
    console.log(post?.docData)
    const [titleValue, setTitleValue] = useState(" ");
    const [formValue, setFormValue] = useState(" ");
    useEffect(()=>{
        setTitleValue(post?.docData.titleValue);
        setFormValue(post?.docData.text);
    },[post])
    return (
        <div className=" my-2 text-black">
            <form onSubmit={handleFormSubmit} action="POST">
                <div>
                    <input
                        value={titleValue || ''}
                        required
                        type="text"
                        placeholder="Title"
                        name="title"
                        className="bg-slate-300 rounded mb-2" 
                        onChange={(e) => setTitleValue(e.target.value)}
                    />
                </div>
                <textarea
                    value={formValue || ''}
                    className="resize-none bg-slate-300 rounded-md p-1 border  border-gray-500"
                    required
                    autoFocus
                    name="text"
                    onChange={(e) => setFormValue(e.target.value)}
                    cols="30"
                    rows="10"
                    placeholder="Post..."
                />
                <div>
                    <Button>Edit Post</Button>
                    {formValue?.length > 100 && (
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
