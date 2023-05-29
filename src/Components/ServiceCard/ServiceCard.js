import "./ServiceCard.css";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
export default function ServiceCard({ title, ICON, link }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <ICON />
      <div class="right_icon_box">
        <Link to={link}>
          <AiOutlineDoubleRight className="right_icon" />
        </Link>
      </div>
    </div>
  );
}
