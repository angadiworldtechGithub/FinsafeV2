import "./Header.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { AiTwotonePhone } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { ADMIN_EMAILS } from "../../constants";

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth as firebaseAuth } from "../../firebase";

const provider = new GoogleAuthProvider();

const signInClick = (setAuth, setIsClicked) => () => {
  console.log("SignIn Clicked");
  setIsClicked(true);
  signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      setAuth(result.user);
      setIsClicked(false);
    })
    .catch((error) => {
      console.error("Sign In Failed");
      setIsClicked(false);
    });
};

const signOutClick = (setAuth, setIsClicked) => () => {
  console.log("SignOut Clicked");
  signOut(firebaseAuth)
    .then((result) => {
      setAuth(null);
      setIsClicked(false);
    })
    .catch((error) => console.error(error));
};

const getButton = (auth, setAuth, location, isClicked, setIsClicked) => {
  const pageName = location.pathname.split("/")[1];
  if (auth) {
    if (
      ["admin", "dashboard", "adminservice", "adminnotification"].includes(
        pageName
      )
    ) {
      return {
        text: "Sign Out",
        to: null,
      };
    }
    if (ADMIN_EMAILS.includes(auth.email)) {
      return [
        {
          text: "Admin",
          to: "/admin",
        },
        {
          text: "Admin Service",
          to: "/adminservice",
        },
        {
          text: "Admin Notification",
          to: "/adminnotification",
        },
      ];
    } else {
      return [
        {
          text: "Dashboard",
          to: "/dashboard",
        },
      ];
    }
  } else {
    return [
      {
        text: (
          <img
            alt="Google sign in"
            src="/assets/images/btn_google_signin_dark_pressed_web.png"
            className="hover_click"
            style={{ aspectRatio: 4.15, height: "21px" }}
          />
        ),
        onClick: isClicked ? () => {} : signInClick(setAuth, setIsClicked),
      },
      {
        text: (
          <>
           <button> <MdEmail style={{ fontSize: "20px" }} />Sign In</button>
          </>
        ),
        to: "/login",
      },
      {
        text: (
          <>
            <button><AiTwotonePhone style={{ fontSize: "20px" }} />
            Sign In</button>
          </>
        ),
        to: "/phonelogin",
      },
    ];
  }
};

export default function Header() {
  const { auth, setAuth } = useContext(AuthContext);
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();

  const rightButton = getButton(
    auth,
    setAuth,
    location,
    isClicked,
    setIsClicked
  );

  return (
    <>
      <div className="top_header">
        <div className="social_icon_box">
          <div>
            <Link to="#">
              <IoLogoWhatsapp className="whatsapp social_icons" />
            </Link>
          </div>
          <div>
            <Link to="#">
              <HiMail className="mail social_icons" />
            </Link>
          </div>
          <div>
            <Link to="#">
              <BsFillTelephoneFill className="phone social_icons" />
            </Link>
          </div>
        </div>
        {!rightButton.link && !Array.isArray(rightButton) ? (
          <div
            className="sign_in_out"
            onClick={
              rightButton.text === "Sign Out"
                ? signOutClick(setAuth, setIsClicked)
                : () => {}
            }
          >
            {rightButton.text}
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            {rightButton.map((rb, index) => {
              return rb.to ? (
                <Link
                  key={index}
                  className="right_button"
                  to={rb.to}
                  style={{ fontWeight: 700 }}
                >
                  {rb.text}
                </Link>
              ) : (
                <div key={index} className="right_button" onClick={rb.onClick}>
                  {rb.text}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="mid_header">
        <img
          src="assets/images/logo.png"
          alt="logonot loaded"
          className="logo"
        />
      </div>
    </>
  );
}
