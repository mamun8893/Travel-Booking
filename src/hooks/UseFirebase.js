import { useState, useEffect } from "react";
import initializeAuth from "../firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
initializeAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  //Google signin

  const handleGoogleSignin = () => {
    setIsloading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsloading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
  }, []);

  return { handleGoogleSignin, user, isLoading };
};

export default useFirebase;
