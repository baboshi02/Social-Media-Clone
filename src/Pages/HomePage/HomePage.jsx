import React from "react";
import { NavBar } from "../../components/NavBar";
import { collection } from "firebase/firestore";
import { db } from "../../firebase";
import {useCollectionData}from "react-firebase-hooks/firestore"
export const HomePage = (props) => {
    
    const postsRef = collection(db,"Posts");
    const [posts] = useCollectionData(postsRef, { idField: "id" });
    console.log(posts)
    

    // const docSnap= getDoc(postRef).then(doc => console.log(doc));
    // console.log(postRef)


    const {authUser}=props;
    return (
        <div>
            <NavBar />
            <h1>Welcome {authUser.email}</h1>
            {posts?.map(post=>{
                return(
                    <div>
                        {post.text}
                    </div>
                )
            })}

        </div>
    )
};
