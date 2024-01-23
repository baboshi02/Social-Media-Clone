import {doc,addDoc,getDoc,collection} from "firebase/firestore"
import {db} from "../firebase"
import { serverTimestamp } from "firebase/firestore";
export const submitAdd = async (e,auth,values,navigate) => {
    const {titleValue,formValue} =values
    e.preventDefault();
    if (formValue.length > 100) {
        return;
    }
    try {
        const postsRef = collection(db, "Posts");
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
