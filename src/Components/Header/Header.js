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
    const blog = {
      text: "Blog",
      to: "/blog",
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
        blog,
        signOut,
      ];
    } else {
      return [
        {
          text: "Dashboard",
          to: "/dashboard",
        },
        blog,
        signOut,
      ];
    }
  } else {
    return [
      {
        text: (
          <>
          <button  className="signin-button">
            <img
              alt="Google sign in"
              src="assets/images/google.png"
              className="hover_click"
              style={{ aspectRatio: 1, height: "21px" }}
            />
            <span className="mobile_hide">Sign In</span>
            </button>
          </>
        ),
        onClick: isClicked ? () => {} : signInClick(setAuth, setIsClicked),
      },
      {
        text: (
          <>
            {" "}
            <button className="signin-button">
              {" "}
              <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
              <span className="mobile-hide">Sign In</span>
            </button>
          </>
        ),
        to: "/login",
      },
      {
        text: (
          <>
            <button className="signin-button">
              <i className="fa fa-mobile" aria-hidden="true"></i>
              <span className="mobile-hide">Sign In</span>
            </button>
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
              <a href = "contact@finsafegroup.com"><HiMail className="mail social_icons" /></a>
            </Link>
          </div>
          <div>
            <Link to="#">
              <BsFillTelephoneFill className="phone social_icons" />
            </Link>
          </div>
        </div>
        <div>
          {newNotifications.length && auth && !isAdmin ? (
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
        <div className="mid-left">
          <img
            src="/assets/images/logo.png"
            alt="logonot loaded"
            className="logo"
          />
        </div>

        <div className="mid-right"></div>
      </div>
    </>
  );
}
