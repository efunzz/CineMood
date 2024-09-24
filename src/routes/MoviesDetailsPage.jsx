import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieContent from "../components/MovieContentSideBar";
import MovieScrollable from "../components/MovieScrollableContent";
import InfiniteTicker from "../components/InfiniteTicker";
function MovieDetailsPage() {
  const { movieID } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null); // State for trailer URL
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const TMDBKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${movieID}&apikey=${apiKey}`
        );

        const text = await response.text(); // Get the raw text response
        const data = JSON.parse(text); // Manually parse the JSON
        setMovieData(data); // Set the fetched data to movieData state

        // Now fetch trailer data from TMDb API
        const tmdbResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${data.imdbID}/videos?api_key=${TMDBKey}`
        );
        const tmdbData = await tmdbResponse.json();
        console.log("TMDB Data:", tmdbData); // Log the TMDB data for debugging

        // Find the trailer link in the TMDb response
        const trailer = tmdbData.results.find(
          (video) => video.type === "Trailer"
        );
        console.log("Trailer found:", trailer); // Log the trailer object

        if (trailer) {
          console.log("Trailer key:", trailer.key); // Log the trailer key
          setTrailerUrl(`https://www.youtube.com/watch?v=${trailer.key}`); // Set the trailer URL
        } else {
          console.log("No trailer found."); // Log if no trailer is found
        }
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
          <MovieScrollable
            videoTrailer={trailerUrl}
            description={movieData.Plot}
            actors={movieData.Actors}
          />
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
