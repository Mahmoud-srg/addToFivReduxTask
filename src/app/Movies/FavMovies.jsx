import { useMovieSelector } from "./movieSlice";
import MoviesList from "./moviesList";

const FavMovies = () => {
  const { favMovies } = useMovieSelector();

  if (favMovies.length == 0)
    return (
      <div className="container">
        <p className="text-light pt-4">No fav movies yet!</p>
      </div>
    );

  return <MoviesList title="Fav Movies" moviesArr={favMovies} />;
};

export default FavMovies;
