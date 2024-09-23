import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To access the dynamic :emotion parameter
import "../App.css";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import React from "react";

function MoviesPage() {
  const { emotion } = useParams();
  const [movies, setMovies] = useState([]);
  const emotionMovieIds = {
    sad: [
      "tt2096673",
      "tt0109830",
      "tt0119217",
      "tt0454921",
      "tt1306980",
      "tt0338013",
      "tt0268978",
      "tt2582846",
      "tt3783958",
    ],
    anger: [
      "tt0137523",
      "tt0133093",
      "tt7286456",
      "tt0114369",
      "tt0110413",
      "tt1345836",
      "tt1259521",
      "tt0081505",
      "tt0102926",
    ],
    anxious: [
      "tt0317248",
      "tt0816692",
      "tt1454468",
      "tt0110912",
      "tt0482571",
      "tt0096283",
      "tt1201607",
      "tt0363547",
      "tt2278388",
    ],
    joy: [
      "tt4633694",
      "tt0120737",
      "tt0499549",
      "tt2911666",
      "tt0110357",
      "tt1877832",
      "tt1981512",
      "tt1790809",
      "tt0435761",
    ],
    calm: [
      "tt0107048",
      "tt0110357",
      "tt0266543",
      "tt0096874",
      "tt2283362",
      "tt0073195",
      "tt0347149",
      "tt1798709",
      "tt2991224",
    ],
  };
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  console.log(`API Base URL: ${apiKey}`);

  //this funciton is called as a sideeffect when th emoviepage compnent is called
  useEffect(() => {
    async function fetchMovies() {
      // Array of movie IDs for the selected emotion
      const selectedMovies = emotionMovieIds[emotion];

      // API calls for each movie ID
      const fetchedMovies = await Promise.all(
        selectedMovies.map(async (id) => {
          const response = await fetch(
            `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
          );
          const movieData = await response.json();
          return movieData;
        })
      );

      // Set the fetched movies in state
      setMovies(fetchedMovies);
    }

    fetchMovies();
  }, [emotion]); // Runs this effect whenever the emotion changes
  return (
    <div className="movies-content">
      <Header name={`${emotion}.`} />
      <div className="movies-selection">
        {/* Loop over the fetched movies and display them */}
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            image={movie.Poster}
            name={movie.Title}
            link={`moviecontent/${movie.imdbID}`}
          />
        ))}
      </div>
    </div>
  );
}
export default MoviesPage;
