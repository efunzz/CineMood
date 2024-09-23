function MovieContent({ movieName, movieDesc }) {
  return (
    <div className="movie-content">
      <div className="movie-title">
        <h1>{movieName}</h1>
      </div>
      <div className="movie-description">
        <p>{movieDesc}</p>
      </div>
      <div className="movie-streaming">
        <div className="movie-streaming-1">
          <p>Netflix</p>
          <div className="horizontal_line_3"></div>
        </div>
        <div className="movie-streaming-1">
          <p>Apple TV</p>
          <div className="horizontal_line_3"></div>
        </div>
        <div className="movie-streaming-1">
          <p>Disney+</p>
          <div className="horizontal_line_3"></div>
        </div>
      </div>
    </div>
  );
}

export default MovieContent;
