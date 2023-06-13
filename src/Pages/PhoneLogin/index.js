import { useState, useContext } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { auth as firebaseAuth } from "../../firebase";
import { signInWithPhoneNumber } from "firebase/auth";
import { usePreventAuthUser } from "../../Hooks/redirect.js";

import { AuthContext } from "../../Context/AuthContext";

export default function Login() {
  const [mobilenumber, setMobilenumber] = useState("");
  const [loading, setLoading] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);

  usePreventAuthUser("phonelogin", auth);

  const onLogin = () => {
    console.log(auth);
    if (mobilenumber !== "") {
      setLoading(true);
      signInWithPhoneNumber(firebaseAuth, mobilenumber)
        .then((userCredential) => {
          setAuth(userCredential.user);
          setLoading(false);
          alert("Loggin in");
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
        <h1>Phone Login</h1>
      </div>
      <div className="login_box">
        <div>
          <label>Mobile Number</label>
        </div>
        <input
          value={mobilenumber}
          onChange={(e) => {
            setMobilenumber(e.target.value);
          }}
          className="input_login"
        ></input>
      </div>
      <div id="recaptcha-verifier"></div>
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
