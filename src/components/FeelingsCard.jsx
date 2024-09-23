import { Link } from "react-router-dom";

function FeelingsCard({ image, name, definition, link }) {
  return (
    <div className="feelings-card">
      <Link to={link}>
        <div className="image-icon">
          <img src={image} alt={name} className="feelings-card-image" />
        </div>
      </Link>
      <div className="content">
        <div className="title">{name}</div>
        <p>{definition}</p>
      </div>
    </div>
  );
}

export default FeelingsCard;
