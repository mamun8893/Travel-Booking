import { useState, useEffect } from "react";
import initializeAuth from "../firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import swal from "sweetalert";
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
        swal("Good job!", "Successfully Login", "success");
      })
      .catch((error) => {
        swal("Something went wrong!", `${error.message}`, "error");
      })
      .finally(() => setIsloading(false));
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        swal("Good job!", "Successfully Logout", "success");
      })
      .catch((error) => {
        swal("Something went wrong!", `${error.message}`, "error");
      });
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

  return { handleGoogleSignin, user, isLoading, handleSignout };
};

export default useFirebase;
