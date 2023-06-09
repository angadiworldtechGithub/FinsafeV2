import "./ServiceCard.css";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function ServiceCard({ title, ICON, link, color1, color2 }) {
  return (
    <div
      className="card"
      style={{ background: `linear-gradient(to right, ${color1}, ${color2})` }}
    >
      <h2>{title}</h2>
      <ICON className="middle_icon" />
      <div className="right_icon_box">
        <Link to={link}>
          <AiOutlineDoubleRight className="right_icon" />
        </Link>
      </div>
    </div>
  );
}
