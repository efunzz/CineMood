function MovieScrollable() {
  return (
    <div className="movie-right-content">
      <div className="movie-trailer-video">
        <iframe
          width="790"
          height="500"
          src="https://www.youtube.com/embed/LEjhY15eCx0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="movie-overview">
        <div className="overview">
          <p>Overview</p>
        </div>
        <div className="overview-description">
          <p>
            Teenager Riley's mind headquarters is undergoing a sudden demolition
            to make room for something entirely unexpected: new Emotions! Joy,
            Sadness, Anger, Fear and Disgust, who’ve long been running a
            successful operation by all accounts, aren’t sure how to feel when
            Anxiety shows up. And it looks like she’s not alone.
          </p>
        </div>
      </div>

      <div className="movie-actors">
        <div className="actors">
          <p>Actors</p>
        </div>
        <div className="actors-description">
          <p>
            dwadwdwadLorem ipsum odor amet, consectetuer adipiscing elit. porta
            dictum tempus, convallis ultrices cubilia. Nunc aliquet cursus
            praesent maximus nullam
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieScrollable;
