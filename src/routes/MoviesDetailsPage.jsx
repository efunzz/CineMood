import MovieContent from "../components/MovieContentSideBar";
import MovieScrollable from "../components/MovieScrollableContent";
import InfiniteTicker from "../components/InfiniteTicker";
function MovieDetailsPage() {
  return (
    <div className="movie-full-content">
      <div className="movie-left-content">
        <MovieContent
          movieName={"Inside Out 2"}
          movieDesc={
            "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone."
          }
        />
      </div>
      <div className="movie-right-content">
        <div className="movie-video-scroll">
          <MovieScrollable />
        </div>
        <div className="image-ticker">
          <InfiniteTicker
            images={[
              "/images/tickerposter1.jpg",
              "/images/movieposter2.jpg",
              "/images/movieposter3.jpg",
              "/images/movieposter4.jpg",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
