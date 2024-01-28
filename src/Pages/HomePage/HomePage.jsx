import React, { useContext } from "react";
import { NavBar } from "../../components/NavBar";
import { Posts } from "./Posts";
import { AddPostElement } from "../addPost/addPostElement";
import { Route, Routes } from "react-router-dom";
import { EditPost } from "../editPost/EditPost";
import { PostContext } from "../../context/PostsContext";
import { IconContext } from "react-icons";
export const HomePage = () => {
    const { posts } = useContext(PostContext);

    return (
        <div className="mb-2">
            {/* <IconContext.Provider> */}
                <NavBar />
                <Routes>
                    <Route index element={<Posts posts={posts} />} />
                    <Route path="/addPost" element={<AddPostElement />} />
                    <Route
                        path="/editPost/:id"
                        element={<EditPost posts={posts} />}
                    />
                </Routes>
            {/* </IconContext.Provider> */}
        </div>
    );
};
