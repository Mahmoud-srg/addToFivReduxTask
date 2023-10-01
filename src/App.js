import { Route, Routes } from "react-router-dom";
import LeatestMovies from "./app/Movies/LeatestMovies";
import FavMovies from "./app/Movies/FavMovies";
import Home from "./app/Home";


function App() {

  return (
    <Routes >
      <Route element={<Home />} path="/">
        <Route element={<LeatestMovies />} index/>
        <Route element={<FavMovies />} path="/fav"/>
      </Route>
    </Routes>
  );
}

export default App;
