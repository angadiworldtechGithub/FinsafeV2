import { createContext, useState } from "react";
import { auth as firebaseAuth } from "../../firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);

  const getIdentifier = () => {
    return auth ? (auth.email ? auth.email : auth.mobilenumber) : "";
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setAuth(user);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, getIdentifier }}>
      {children}
    </AuthContext.Provider>
  );
}
