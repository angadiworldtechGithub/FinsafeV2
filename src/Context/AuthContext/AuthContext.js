import { createContext, useMemo, useState } from "react";
import { auth as firebaseAuth } from "../../firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { ADMIN_EMAILS } from "../../constants";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);

  const getIdentifier = () => {
    return auth ? (auth.email ? auth.email : auth.phoneNumber) : "";
  };

  const isAdmin = useMemo(() => {
    return Boolean(auth) && ADMIN_EMAILS.includes(auth.email);
  }, [auth]);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setAuth(user);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, getIdentifier, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}
