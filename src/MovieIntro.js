import React from 'react'

const MovieIntro = ({ films }) => {
  
  const findEpisode = (specificMovie) => {
    if(specificMovie) {
      return films.find(movie => movie.episode_id === specificMovie)
    } else {
      return films.find(movie => movie.episode_id === Math.floor(Math.random() * (7 - 1 + 1)) + 1);
    }
  } 
  
  return (
    <div>
      <p>{findEpisode(4).opening_crawl}</p>
    </div>
  )
}

export default MovieIntro