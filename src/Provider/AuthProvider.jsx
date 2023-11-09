import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    const credential = signInWithEmailAndPassword(auth, email, password);
    const user = credential.user;
    setUser(user);
    setLoading(false);
    return credential;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedEmail = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axios
          .post(
            "https://restaurant-management-server-side-nu.vercel.app/jwt",
            loggedEmail,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            // console.log(res.data);
          });
      } else {
        axios
          .post(
            "https://restaurant-management-server-side-nu.vercel.app/logout",
            loggedEmail,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => unsubscribe();
  }, [user?.email]);

  const AuthInfo = { user, createUser, logout, signIn, loading };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
