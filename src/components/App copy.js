import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import api from "../api/db";
import "./App.css";
import Header from "./movies/Header"; 
import AddMovie from "./movies/AddMovie"; 
import MovieList from "./movies/MovieList"; 
import MovieDetail from "./movies/MovieDetail" 
import EditMovie from "./movies/EditMovie";

function App() {
 
  const [movies, setMovies] = useState([]);
 
 //RetrieveMovies
 const retrieveMovies = async () => {
  const response = await api.get("/movie");
  return response.data;
};

const addMovieHandler = async (movie) => {
  console.log(movie);
  const request = {
    // id: uuid(),
    ...movie,
  };
 
    const response = await api.post("/movie", request);
    console.log(response);
    setMovies([...movies, response.data]);
    window.location.reload(false);
  };

  const updateMovieHandler = async (movie) => {
    const response = await api.put(`/movie/${movie.id}`, movie);
    const { id, title, genre } = response.data;
  
      setMovies(
        movies.map((movie) => {
          return movie.id === id ? { ...response.data } : movie;
        })
      ); 
      window.location.reload(false);
  };

  const removeMovieHandler = async (id) => {
    await api.delete(`/movie/${id}`);
    const newMovieList = movies.filter((movie) => {
      return movie.id !== id;
    });

    setMovies(newMovieList);
    window.location.reload(false);
  };

  useEffect(() => { 
    const getAllMovies = async () => {
      const allMovies = await retrieveMovies();
      if (allMovies) setMovies(allMovies);
    };

    getAllMovies();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [movies]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <MovieList
                {...props}
                movies={movies}
                getMovieId={removeMovieHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddMovie {...props} addMovieHandler={addMovieHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditMovie
                {...props}
                updateMovieHandler={updateMovieHandler}
              />
            )}
          />

          <Route path="/movie/:id" component={MovieDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
