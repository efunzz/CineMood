import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieContent from "../components/MovieContentSideBar";
import MovieScrollable from "../components/MovieScrollableContent";
import InfiniteTicker from "../components/InfiniteTicker";
function MovieDetailsPage() {
  const { movieID } = useParams();
  console.log("Movie ID:", movieID);
  const [movieData, setMovieData] = useState(null);
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${movieID}&apikey=${apiKey}`
        );
        console.log("Movie ID:", movieID);
        const text = await response.text(); // Get the raw text response
        console.log("Raw response:", text);
        const data = JSON.parse(text); // Manually parse the JSON
        setMovieData(data); // Set the fetched data to movieData state
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails(); // Call the function
  }, [movieID]); // Run the effect when movieId changes

  if (!movieData) {
    return <div>Loading...</div>; // Show a loading state while fetching
  }
  return (
    <div className="movie-full-content">
      <div className="movie-left-content">
        <MovieContent movieName={movieData.Title} movieDesc={movieData.Plot} />
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
