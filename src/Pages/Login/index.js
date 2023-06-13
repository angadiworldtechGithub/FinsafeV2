import { useState, useContext } from "react";
import {
  AiOutlineLoading,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { auth as firebaseAuth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { usePreventAuthUser } from "../../Hooks/redirect.js";

import "./Login.css";
import { AuthContext } from "../../Context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);

  usePreventAuthUser("login", auth);

  const handleEyeClick = () => {
    setShowPassword((bool) => !bool);
  };

  const onLogin = () => {
    if (email !== "" && password !== "") {
      setLoading(true);
      signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
          setAuth(userCredential.user);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          alert("Could not sign in.");
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <div className="header_text">
        <h1>Login</h1>
      </div>
      <div className="login_box">
        <div>
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
        <div>
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
        <button
          className="button_login"
          style={{ width: "100%", height: "40px" }}
          onClick={onLogin}
        >
          {loading ? <AiOutlineLoading className="loading" /> : "Login"}
        </button>
      </div>
      <div className="bottom_text">Forgot Password ?</div>
      <div className="bottom_text">
        <Link to="/signup">No account, please create an account</Link>
      </div>
    </div>
  );
}
