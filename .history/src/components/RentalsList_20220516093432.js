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
                console.log("Rental deleted succesfully", response.data);
                init();

            })
            .catch(error => {
                console.log("Something went wrong", error);
            })
    }


    return (
        <div className="container">
            <form className="form-inline my-4 my-lg-0">
                <h3 className="mx-auto"><b>Rentals</b></h3>
                <input className="form-control mr-sm-2 ml-20" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

            </form>

            <div>
                <Link to="/add-rental" className="btn btn-primary mb-2">Add Rental</Link>




                <table className="table table-border table-sriped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Customer Id</th>
                            <th>Rental Date</th>
                            <th>Rental Expiry</th>
                            <th>Total Cost</th>
                            <th>Created By</th>
                            <th>Creation Date</th>
                            <th>Updated By</th>
                            <th>Updated Date</th>
                            <th>Actions</th>
                            <th>Return Status</th>




                        </tr>
                    </thead>
                    <tbody>
                        {
                            rentals.map(rental => (
                                <tr key={rental.id} >

                                    <td>{rental.Id}</td>

                                    <td>{rental.rentalDate}</td>
                                    <td>{rental.rentalExpiry}</td>
                                    <td>{rental.totalCost}</td>
                                    <td>{rental.createdBy}</td>
                                    <td>{rental.creationDate}</td>
                                    <td>{rental.lastModifiedBy}</td>
                                    <td>{rental.lastModifiedDate}</td>
                                    <td>{rental.isReturned}</td>


                                    <td>
                                        <Link className="btn btn-info" to={`/rentals/edit/${rental.id}`}> Update</Link>
                                        <button className="btn btn-danger ml-2" onClick={(e) => {
                                            handleDelete(rental.id);
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

export default RentalsList;