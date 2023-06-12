import { useState, useContext } from "react";
import { AiOutlineLoading } from "react-icons/ai";

import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./Login.css";
import { AuthContext } from "../../Context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setAuth } = useContext(AuthContext);

  const onLogin = () => {
    console.log(auth);
    if (email !== "" && password !== "") {
      setLoading(true);
      signInWithEmailAndPassword((auth, email, password))
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
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="input_login"
        ></input>
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
    </div>
  );
}
