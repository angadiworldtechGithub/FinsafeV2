import { useState, useContext, useEffect } from "react";
import "./PhoneLogin.css";
import { AiOutlineLoading } from "react-icons/ai";
import { auth as firebaseAuth } from "../../firebase";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { usePreventAuthUser } from "../../Hooks/redirect.js";

import { AuthContext } from "../../Context/AuthContext";

export default function Login() {
  const [mobilenumber, setMobilenumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const { auth, setAuth } = useContext(AuthContext);
  const [confirmationResult, setConfirmationResult] = useState(null);

  usePreventAuthUser("phonelogin", auth);

  const onLogin = () => {
    console.log("Clicked");
    if (mobilenumber !== "") {
      const number = "+91" + mobilenumber;
      console.log(number);
      setLoading(true);
      signInWithPhoneNumber(firebaseAuth, number, window.recaptchaVerifier)
        .then((confirmationResult) => {
          setConfirmationResult(confirmationResult);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          alert("Could not sign in.");
          setLoading(false);
        });
    }
  };

  const onCodeSubmit = () => {
    if (confirmationCode) {
      setLoading(true);
      confirmationResult.confirm(confirmationCode).then((result) => {
        setAuth(result.user);
        console.log(result.user);
        setLoading(false);
      });
    } else {
      alert("No Confirmation Code");
    }
  };

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          console.log("verified!");
        },
      },
      firebaseAuth
    );
  }, []);

  return (
    <div>
      <div className="header_text">
        <h1>Phone Login (Only Indian Number Valid)</h1>
      </div>
      <div className="login_box">
        {confirmationResult ? (
          <>
            <div>
              <label>Confirmation Code</label>
            </div>
            <input
              value={confirmationCode}
              onChange={(e) => {
                setConfirmationCode(e.target.value);
              }}
              className="input_login"
            ></input>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
      <div id="recaptcha-container"></div>
      <div className="login_box">
        <button
          className="button_login"
          style={{ width: "100%", height: "40px" }}
          onClick={confirmationCode ? onCodeSubmit : onLogin}
        >
          {loading ? (
            <AiOutlineLoading className="loading" />
          ) : confirmationCode ? (
            "Submit"
          ) : (
            "Login"
          )}
        </button>
      </div>
    </div>
  );
}
