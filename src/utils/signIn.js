import { signInWithEmailAndPassword } from "firebase/auth";
export const signIn = async (auth, email, password, setError) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    setError({ isError: true, message: err.message });
  }
};
