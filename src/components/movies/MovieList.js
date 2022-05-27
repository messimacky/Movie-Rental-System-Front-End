import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  console.log(props);

  const deleteMovieHandler = (movieId) => {
    props.getMovieId(movieId);
  };

  const renderMovieList = props.movies.map((movie) => {
    return (
      <MovieCard
        movie={movie}
        clickHander={deleteMovieHandler}
        key={movie.movieId}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Movie List
        <Link to="/add">
          <button className="ui button blue right">Add movie</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderMovieList}</div>
    </div>
  );
};

export default MovieList;
