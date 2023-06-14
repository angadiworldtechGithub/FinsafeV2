import { useState, useContext } from "react";
import {
  AiOutlineLoading,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { auth as firebaseAuth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../Context/AuthContext";
import { usePreventAuthUser } from "../../Hooks/redirect";

import "./SignUp.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);

  usePreventAuthUser("login", auth);

  const handleEyeClick = () => {
    setShowPassword((bool) => !bool);
  };

  const onSignUp = () => {
    if (email !== "" && password !== "") {
      if (password === confirmPassword) {
        setLoading(true);
        createUserWithEmailAndPassword(firebaseAuth, email, password)
          .then((userCredential) => {
            setAuth(userCredential.user);
            alert("User created and signed In");
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            alert("Could not sign in.");
            setLoading(false);
          });
      } else {
        alert("Passwords does not match");
      }
    }
  };

  return (
    <div>
      <div className="header_text">
        <h1>Sign Up</h1>
      </div>
      <div className="login_box">
        <div className="center_text">
          <label>Email</label>
        </div>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="input_login"
        ></input>
      </div>
      <div className="login_box">
        <div className="center_text">
          <label>Password</label>
        </div>
        <div style={{ display: "flex" }}>
          <input
            value={password}
            type={showPassword ? "text" : "password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="input_login"
          />
          {showPassword ? (
            <AiFillEye className="password_eye" onClick={handleEyeClick} />
          ) : (
            <AiFillEyeInvisible
              className="password_eye"
              onClick={handleEyeClick}
            />
          )}
        </div>
      </div>
      <div className="login_box">
        <div className="center_text">
          <label>Confirm Password</label>
        </div>
        <input
          value={confirmPassword}
          type={showPassword ? "text" : "password"}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          className="input_login"
        ></input>
      </div>
      <div className="login_box">
        <button
          className="button_login"
          style={{ width: "100%", height: "40px" }}
          onClick={onSignUp}
        >
          {loading ? <AiOutlineLoading className="loading" /> : "Sign Up"}
        </button>
      </div>
    </div>
  );
}