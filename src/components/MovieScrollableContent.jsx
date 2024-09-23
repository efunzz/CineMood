function MovieScrollable() {
  return (
    <div className="movie-right-content">
      <div className="movie-trailer-video">
        <iframe
          width="790"
          height="500"
          src="https://www.youtube.com/embed/LEjhY15eCx0"
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
            Amy Poehler as Joy, Phyllis Smith as Sadness, Bill Hader as Fear,
            Lewis Black as Anger, Kaitlyn Dias as Riley, Diane Lane as Mom, and
            Kyle MacLachlan as Dad.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieScrollable;
