import { doc,updateDoc } from "firebase/firestore"
export const submitEdit=(db,id,titleValue,formValue,navigate)=>{
       const postRef=doc(db,"Posts",id)
       updateDoc(postRef,{
        titleValue,
        text:formValue,

       })
       navigate('/')
    }