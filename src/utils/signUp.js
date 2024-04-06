import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
export const signUp = async (auth, email, password, username, setError) => {
  try {
    if (username.length < 3 || username.length > 15) {
      alert("Username must be between 3 and 8");
      return;
    }

    const ref = doc(db, "usernames", username);
    const { exists } = await getDoc(ref);
    // if (exists) {
    //   console.log("exists", exists());
    //   alert("Username already exists");
    //   return;
    // }
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = userCredential.user.uid;
    const userNameRef = doc(db, "usernames", username);
    const usersRef = doc(db, "users", uid);
    setDoc(usersRef, {
      username,
    });
    setDoc(userNameRef, {
      uid,
    });
  } catch (err) {
    setError({ isError: true, message: err.message });
  }
};
