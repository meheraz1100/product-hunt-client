import { useState, useEffect, createContext } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";

import auth from "../Firebase/firebase.config";
import { toast } from "react-toastify";
import axios from "axios"; 
import { useQueryClient } from "@tanstack/react-query";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(9999);
  const [checkedBrand, setCheckedBrand] = useState([]);
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // Toast Design

  const updateToast = (toastMessage) => {
    toast.info(toastMessage, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const successToast = (toastMessage) => {
    toast.success(toastMessage, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const errorToast = (toastMessage) => {
    toast.error(toastMessage, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    login,
    register,
    googleSignIn,
    updateUser,
    logOut,
    updateToast,
    successToast,
    errorToast,
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
    checkedBrand,
    setCheckedBrand,
    checkedCategory,
    setCheckedCategory,
    currentPage,
    setCurrentPage,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
