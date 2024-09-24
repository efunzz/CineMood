function MovieScrollable({ videoTrailer, description, actors }) {
  return (
    <div className="movie-right-content">
      <div className="movie-trailer-video">
        <iframe
          width="790"
          height="500"
          src={videoTrailer ? videoTrailer.replace("watch?v=", "embed/") : ""}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="movie-overview">
        <div className="overview">
          <p>Overview</p>
        </div>
        <div className="overview-description">
          <p>{description}</p>
        </div>
      </div>

      <div className="movie-actors">
        <div className="actors">
          <p>Actors</p>
        </div>
        <div className="actors-description">
          <p>{actors}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieScrollable;
