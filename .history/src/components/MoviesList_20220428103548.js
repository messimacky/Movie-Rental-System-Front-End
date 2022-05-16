import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import movieService from "../services/movie.service";
import { Link } from "react-router-dom";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    init();

  }, [])

  const init = () => {
    movieService.getAll()
      .then(response => {
        console.log(response.data);
        setMovies(response.data);

      })
      .catch(error => {
        console.log("Something went wrong", error);
      })
  }

  const handleDelete = id => {
    movieService.remove(id)
      .then(response => {
        console.log("Movie deleted succesfully", response.data);
        init();

      })
      .catch(error => {
        console.log("Something went wrong", error);
      })
  }


  return (
    <div className="container">
      <form className="form-inline my-4 my-lg-0">
        <h3 className="mx-auto">Customers</h3>
        <input className="form-control mr-sm-2 ml-20" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

      </form>
      <hr />
      <div>
        <Link to="/add-movie" className="btn btn-primary mb-2">Add Movie</Link>




        <table className="table table-border table-sriped">
          <thead className="thead-dark">
            <tr>
              <th>Language</th>
              <th>Title</th>
              <th>Price</th>
              <th>Created by</th>
              <th>Created Date</th>
              <th>Updated by</th>
              <th>Updated Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              movies.map(movie => (
                <tr key={movie.id} >

                  <td>{movie.language}</td>
                  <td>{movie.title}</td>
                  <td>{movie.price}</td>
                  <td>{movie.createdBy}</td>
                  <td>{movie.creationDate}</td>
                  <td>{movie.lastModifiedBy}</td>
                  <td>{movie.lastModifiedDate}</td>

                  <td>
                    <Link className="btn btn-info" to={`/movies/edit/${movie.id}`}> Update</Link>
                    <button className="btn btn-danger ml-2" onClick={(e) => {
                      handleDelete(movie.id);
                    }}>Delete</button>
                  </td>

                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Link className="btn btn-warning" to="/home">Back</Link>
    </div>
  );
}

export default MoviesList;