import React, { useEffect } from 'react'
import Header from './header'
import { addNowPlayingMovies } from '../utils/movieSlice';
import {  useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants'

const Browse = () => {
  // Fetch Data from TMDB API and update stored movies
  const dispatch = useDispatch();
  const getNowPlayingMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(()=>{
getNowPlayingMovies();
  },[]);
  return (
    <div>
      <Header/>
     
    </div>
  )
}

export default Browse
