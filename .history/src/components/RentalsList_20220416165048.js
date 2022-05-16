import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import rentalService from "../services/rental.service";
import { Link } from "react-router-dom";

const RentalsList = () => {
    const [rentals, setRentals] = useState([]);


    useEffect(() => {
        init();

    }, [])

    const init = () => {
        rentalService.getAll()
            .then(response => {
                console.log(response.data);
                setRentals(response.data);

            })
            .catch(error => {
                console.log("Something went wrong", error);
            })
    }

    const handleDelete = id => {
        rentalService.remove(id)
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

            <h3>List of Movies</h3>
            <hr />
            <div>
                <Link to="/add-rental" className="btn btn-primary mb-2">Add Rental</Link>




                <table className="table table-border table-sriped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Member ID</th>
                            <th>Rental Date</th>
                            <th>Rental Expiry</th>
                            <th>Total Cost</th>
                            <th>Return Status</th>
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