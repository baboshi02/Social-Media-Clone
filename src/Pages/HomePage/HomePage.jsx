import React from "react";
import { NavBar } from "../../components/NavBar";
import { collection, doc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import {
    useCollection,
    useDocumentData,
} from "react-firebase-hooks/firestore";
import { PostElement } from "./PostElement";
import { AddPostElement } from "./addPostElement";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button } from "../../components/regButton";
import { EditPostElement } from "./editPostElement";
export const HomePage = (props) => {
    const navigate = useNavigate();
    const Posts = () => {
        return (
            <div className="mt-5 flex flex-col gap-1 items-center text-blue-600">
                {posts?.map(({docID,docData}) => (
                    <PostElement post={docData} id={docID} key={docData?.createdAt} />
                ))}
            </div>
        );
    };
    const currentLocation = location.pathname;
    const postsRef = collection(db, "Posts");
    const { uid } = auth.currentUser;
    const userNameRef = doc(db, "users", uid);
    const [users] = useDocumentData(userNameRef);
    const [snapShot, loading] = useCollection(postsRef, { idField: "id" });
    let posts=[]
    snapShot?.forEach(doc=>{
        posts.push({docID: doc.id, docData:doc.data()})
    })
    return (
        <div>
            <NavBar />
            {loading ? <h1>Loading...</h1> : <h1>Welcome {users.username}</h1>}
            {currentLocation == "/" ? (
                <Button onClick={() => navigate("/addPost")}>Add Post </Button>
            ) : (
                <Button onClick={()=>navigate("/")}> Discard </Button>
            )}
            <Routes>
                <Route index element={<Posts />} />
                <Route
                    path="/addPost"
                    element={<AddPostElement postsRef={postsRef} />}
                />
                <Route
                    path="/editPost/:id"
                    element={<EditPostElement posts={posts} />}
                />
            </Routes>
        </div>
    );
};
