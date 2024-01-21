import { doc,deleteDoc } from "firebase/firestore"

export const deletePost=async (db,postId)=>{
    
    deleteDoc(doc(db,"Posts",postId))
}