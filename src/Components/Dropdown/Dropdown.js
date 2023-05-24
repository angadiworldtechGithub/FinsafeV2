import { addHide } from "../Navbar/Navbar";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import shortid from "shortid";
import "./Dropdown.css";

export default function Dropdown({
  isActive,
  setIsActive,
  headerName,
  headerLink,
  subHeaders,
}) {
  return (
    <div className="navbar_text navbar_text_mobile">
      <Link to={headerLink} className="navbar_link">
        {headerName}
      </Link>
      <MdArrowDropDown className="icon" onClick={setIsActive} />
      <div className={isActive ? "dropdown" : addHide("dropdown")}>
        <ul className="dropdown_list">
          {subHeaders.map((subHeader) => (
            <li key={shortid.generate()} className="sub_heading_text">
              <Link to={subHeader.link} className="navbar_link">
                {subHeader.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
