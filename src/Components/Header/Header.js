import "./Header.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { AiTwotonePhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { NotificationsContext } from "../../Context/NotificationsContext";
import { ADMIN_EMAILS } from "../../constants";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth as firebaseAuth } from "../../firebase";
import NotificationsModal from "../NotificationsModal/NotificationsModal";

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

const getButton = (auth, setAuth, isClicked, setIsClicked) => {
  if (auth) {
    const signOut = {
      text: "Sign Out",
      onClick: isClicked ? () => {} : signOutClick(setAuth, setIsClicked),
    };
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
        signOut,
      ];
    } else {
      return [
        {
          text: "Dashboard",
          to: "/dashboard",
        },
        signOut,
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
            <MdEmail style={{ fontSize: "20px" }} />
            Sign In
          </>
        ),
        to: "/login",
      },
      {
        text: (
          <>
            <AiTwotonePhone style={{ fontSize: "20px" }} />
            Sign In
          </>
        ),
        to: "/phonelogin",
      },
    ];
  }
};

export default function Header() {
  const { auth, setAuth, getIdentifier, isAdmin } = useContext(AuthContext);
  const { newNotifications, setNewNotifications } =
    useContext(NotificationsContext);
  const [isClicked, setIsClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const rightButton = getButton(auth, setAuth, isClicked, setIsClicked);

  return (
    <>
      {!isAdmin && newNotifications.length ? (
        <NotificationsModal
          isOpen={showModal}
          closeModal={() => setShowModal(false)}
          newNotifications={newNotifications}
          setNewNotifications={setNewNotifications}
          getIdentifier={getIdentifier}
        />
      ) : (
        <></>
      )}
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
        <div>
          {newNotifications.length && !isAdmin ? (
            <span
              onClick={() => {
                setShowModal(true);
              }}
              style={{ textDecoration: "underline" }}
            >
              New Notifications
            </span>
          ) : (
            <></>
          )}
        </div>
        {
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
        }
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
