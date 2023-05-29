import "./ServiceCard.css";

export default function ServiceCard({ title, ICON }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <ICON />
    </div>
  );
}
