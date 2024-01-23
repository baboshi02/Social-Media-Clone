import { useState, useEffect } from "react";
export const useEditPost = (posts, id) => {
    const post = posts.find((post) => post.docID === id);
    const [titleValue, setTitleValue] = useState(" ");
    const [formValue, setFormValue] = useState(" ");
    useEffect(() => {
        setTitleValue(post?.docData.titleValue);
        setFormValue(post?.docData.text);
    }, [post]);
    return { titleValue, formValue, setTitleValue, setFormValue };
};
