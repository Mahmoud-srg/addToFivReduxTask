import { useMovieSelector } from "./movieSlice";
import MoviesList from "./moviesList";

const LeatestMovies = () => {
  const { allMovies, loadAllMovies } = useMovieSelector();

  if (loadAllMovies) return <h1>Loading</h1>;

  return <MoviesList title="Leatest Movies" moviesArr={allMovies} />;
};

export default LeatestMovies;
