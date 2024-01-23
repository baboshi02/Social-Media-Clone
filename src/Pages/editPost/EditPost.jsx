import React  from "react";
import { Button } from "../../components/regButton";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase";
import { useEditPost } from "../../Hooks/useEditPost";
import { submitEdit } from "../../utils/submitEdit";

export const EditPost = ({posts}) => {
    
    const {id}=useParams()
    const navigate=useNavigate() 
    const{titleValue,formValue,setTitleValue,setFormValue}=useEditPost(posts,id)
    return (
        <div className=" my-2 text-black">
            <form onSubmit={()=>submitEdit(db,id,titleValue,formValue,navigate)} action="POST">
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
