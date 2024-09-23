import { Link } from "react-router-dom";

function MovieCard({ image, name, link }) {
  return (
    <div className="movie-card">
      <Link to={link}>
        <div className="poster-icon">
          <img src={image} alt={name} className="movie-card-image" />
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
