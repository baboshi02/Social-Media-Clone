import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
export const signUp = async (e,auth, email, password, username) => {
    e.preventDefault();
    console.log(username)
    if (username.length < 3 || username.length > 7) {
        alert("Username must be between 3 and 8");
        return;
    }
    try {
        
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

        console.log("user", userCredential);
    } catch (err) {
        alert(err);
    }
};
