import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc,setDoc } from "firebase/firestore";
import { db } from "../firebase";
export const signUp=async (auth,email,password,username)=>{
        try {
            const userCredential =await  createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
        const uid=userCredential.user.uid
        const userNameRef=doc(db, 'usernames',username)
        const usersRef=doc(db, 'users',uid)
        setDoc(usersRef,{
            username
        })
        setDoc(userNameRef,{
            uid

        })    
        
            console.log("user", userCredential);
        } catch (err) {
            alert(err);
        }
}