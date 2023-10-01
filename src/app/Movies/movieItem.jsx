import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { handleAddToFav, handleRemoveFromFav } from "./movieSlice";

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();

  const handleFavClick = () => {
    movie.fav == true
      ? dispatch(handleRemoveFromFav({ id: movie.id }))
      : dispatch(handleAddToFav({ id: movie.id }));
  };

  return (
    <div class="card bg-dark border border-secondary h-100 position-relative">
      <div className="bg-dark text-danger fav" onClick={handleFavClick}>
        <i
          className={`${movie.fav ? "fa-solid" : "fa-regular"} fa-heart fs-5`}
        ></i>
      </div>

      <Link to="/" className="text-decoration-none text-white">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h4>{movie.title}</h4>
          <p class="card-text text-light">
            {movie.overview.split(" ").slice(0, 15).join(" ")}...
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieItem;
