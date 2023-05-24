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
    <div className="dropdown_text navbar_text_mobile">
      <Link to={headerLink} className="navbar_link">
        {headerName}
      </Link>
      <MdArrowDropDown className="icon" />
      <div className="dropdown">
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
