import { useParams } from "react-router-dom"; // To access the dynamic :emotion parameter
import "../App.css";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";

function MoviesPage() {
  const { emotion } = useParams();
  return (
    <div className="movies-content">
      <Header name={`${emotion}.`} />
      <div className="movies-selection">
        <MovieCard
          image={"/images/movieposter1.jpg"}
          name={"sad"}
          link="moviecontent/:movieID"
        />
        <MovieCard
          image={"/images/movieposter2.jpg"}
          name={"sad"}
          link="moviespage/1"
        />
        <MovieCard
          image={"/images/movieposter3.jpg"}
          name={"sad"}
          link="moviespage/1"
        />
        <MovieCard
          image={"/images/movieposter4.jpg"}
          name={"sad"}
          link="moviespage/1"
        />
        <MovieCard
          image={"/images/movieposter5.jpg"}
          name={"sad"}
          link="moviespage/1"
        />
        <MovieCard
          image={"/images/movieposter6.jpg"}
          name={"sad"}
          link="moviespage/1"
        />
        <MovieCard
          image={"/images/movieposter7.jpg"}
          name={"sad"}
          link="moviespage/1"
        />
        <MovieCard
          image={"/images/movieposter8.jpg"}
          name={"sad"}
          link="moviespage/1"
        />
        <MovieCard
          image={"/images/movieposter9.jpg"}
          name={"sad"}
          link="moviespage/1"
        />
      </div>
    </div>
  );
}
export default MoviesPage;
