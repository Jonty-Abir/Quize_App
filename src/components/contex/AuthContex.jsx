// fireBase lign-fun signUp-fun eventListner-fun
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase";

const AuthContex = React.createContext();

export function useAuth() {
  return useContext(AuthContex);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  // sideEffact handler
  useEffect(() => {
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unSubscribe;
  }, []);

  // signUp function
  async function signUp(email, password, userName) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    // update Profile
    await updateProfile(auth.currentUser, {
      displayName: userName,
    });
    // after updateing userName
    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  // login funtion
  async function login(email, password, userName) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  // logout funtion
  function logOut() {
    const auth = getAuth();
    return signOut(auth);
  }
  // value object

  const value = {
    currentUser,
    signUp,
    login,
    logOut,
  };

  return (
    <AuthContex.Provider value={value}>
      {!loading && children}
    </AuthContex.Provider>
  );
}
