import "./Header.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
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
    if (["admin", "dashboard"].includes(pageName)) {
      return {
        text: "Sign Out",
        link: null,
      };
    }
    if (ADMIN_EMAILS.includes(auth.email)) {
      return {
        text: "Admin",
        link: "/admin",
      };
    } else {
      return {
        text: "Dashboard",
        link: "/dashboard",
      };
    }
  } else {
    return {
      text: "Sign In Options",
      subHeaders: [
        {
          text: "Google sign in",
          onClick: isClicked ? () => {} : signInClick(setAuth, setIsClicked),
        },
        { text: "Sign in with email and password", to: "/login" },
      ],
    };
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
              <BsFacebook className="facebook social_icons" />
            </Link>
          </div>
          <div>
            <Link to="#">
              <BsLinkedin className="linkedin social_icons" />
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
        {!rightButton.link ? (
          <div
            className="sign_in_out"
            onClick={
              rightButton.text === "Sign Out"
                ? signOutClick(setAuth, setIsClicked)
                : () => {}
            }
          >
            {rightButton.text}
            {rightButton.subHeaders ? (
              rightButton.subHeaders.length ? (
                <div className="dropdown_sign_in">
                  <ul className="sign_in_list">
                    {rightButton.subHeaders.map((subHeader) => {
                      return (
                        <li onClick={subHeader.onClick}>
                          {subHeader.to ? (
                            <Link style={{ color: "white" }} to={subHeader.to}>
                              {subHeader.text}
                            </Link>
                          ) : (
                            subHeader.text
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </div>
        ) : (
          <Link className="right_button" to={rightButton.link}>
            {rightButton.text}
          </Link>
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
