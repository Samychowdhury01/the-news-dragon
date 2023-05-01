import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  //   google sign-in method
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   create new user with email and password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // validate user
  const validateUser = () => {
    return sendEmailVerification(auth.currentUser);
  };

  //   signIn with email and password
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // observer
  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser)
      setLoading(false)
    }) 
    return () =>{
      unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    signInWithGoogle,
    createUser,
    validateUser,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
