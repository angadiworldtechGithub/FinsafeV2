import { createContext, useState } from "react";
import { auth as firebaseAuth } from "../../firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

// May have to change the AuthContext
export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log("Use Effect user", user);
        setAuth(user);
      }
    });
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
