import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { movies } from './movies'

const initialState = {
  allMovies : movies ,
  loadAllMovies : false,
  favMovies : []
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    handleAddToFav : (state , {payload}) => {
      state.allMovies = state.allMovies.map(movie => {
        if(movie.id == payload.id) {
          movie.fav = true ;
          state.favMovies.push(movie);
          return movie ;
        } 
        return movie ;
      })
    },
    handleRemoveFromFav : (state , {payload}) => {
      state.allMovies = state.allMovies.map(movie => {
        if(movie.id == payload.id) {
          movie.fav = false ;
          state.favMovies = state.favMovies.filter(movie => movie.id != payload.id)
          return movie ;
        } 
        return movie ;
      })
    }
  },
})

export const { handleRemoveFromFav , handleAddToFav } = movieSlice.actions

export const movieReducer =  movieSlice.reducer;
export const useMovieSelector = () => useSelector(state => state.movie)
