import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { databaseUser } from "../../firebase";
import { useState } from "react";

export default function useAuthFirebase() {
  const [loading, setLoading] = useState<boolean>(false);
  let currentUser = databaseUser.currentUser;

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(databaseUser, email, password);
      window.location.href = "/";
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email: string, password: string, username: string) => {
    setLoading(true);
    try {
      const data = await createUserWithEmailAndPassword(
        databaseUser,
        email,
        password
      );
      const user = data.user;
      await updateProfile(user, { displayName: username });
      // If the updateProfile succeeds, you can perform any additional actions here
      window.location.href = "/"; // Redirect after successful signup
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const signout = async () => {
    setLoading(true);
    try {
      await signOut(databaseUser);
      window.location.href = "/";
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { login, signout, signup, loading, currentUser };
}
