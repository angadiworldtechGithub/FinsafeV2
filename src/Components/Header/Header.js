import "./Header.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="topheader">
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
      </div>

      <div className="mid_header">
        <img src="assets/images/logo.png" alt="logonot loaded" class="logo" />
      </div>
    </>
  );
}
