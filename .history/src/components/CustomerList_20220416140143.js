import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import customerService from "../services/customer.service";
import { Link } from "react-router-dom";

const MoviesList = () => {
    const [customers, setCustomers] = useState([]);


    useEffect(() => {
        init();

    }, [])

    const init = () => {
        constService.getAll()
            .then(response => {
                console.log(response.data);
                setCustomers(response.data);

            })
            .catch(error => {
                console.log("Something went wrong", error);
            })
    }

    const handleDelete = id => {
        customerService.remove(id)
            .then(response => {
                console.log("Customer deleted succesfully", response.data);
                init();

            })
            .catch(error => {
                console.log("Something went wrong", error);
            })
    }


    return (
        <div className="container">

            <h3>Customers</h3>
            <hr />
            <div>
                <Link to="/add-movie" className="btn btn-primary mb-2">Add Movie</Link>




                <table className="table table-border table-sriped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Language</th>
                            <th>Title</th>
                            <th>Price</th>
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

        </div>
    );
}

export default MoviesList;