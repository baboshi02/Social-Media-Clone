import { doc, addDoc, getDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { serverTimestamp } from "firebase/firestore";
export const submitAdd = async (auth, values, navigate) => {
  const { titleValue, formValue } = values;
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
  } catch (err) {
    console.log("Error adding element: ", err);
  } finally {
    navigate("/");
  }
};
