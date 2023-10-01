import MovieItem from "./movieItem";

const MoviesList = ({ title, moviesArr }) => {
  const renderedMovies = moviesArr?.map((movie) => {
    return (
      <div className="col-md-6 col-lg-4 col-xl-3">
        <MovieItem movie={movie} />
      </div>
    );
  });

  return (
    <div className="container ">
      <div className="py-5 text-white">
        <h1 className="mb-4">{title}</h1>

        {renderedMovies ? (
          <div className="row gy-3">{renderedMovies}</div>
        ) : (
          <p>Threre is no movies yet</p>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
