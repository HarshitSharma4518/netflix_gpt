import React, { useEffect } from 'react'
import Header from './header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  // Fetch Data from TMDB API and update stored movies
  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
     {
      /*
      MainContainer
      -VideoBackground
      - VideoTitle
      SecondaryContainer
      -MovieList
      -cards
      */
     }
    </div>
  )
}

export default Browse
