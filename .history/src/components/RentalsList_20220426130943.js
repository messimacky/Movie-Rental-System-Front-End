import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import customerService from "../services/customer.service";
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
            <h3>Customers</h3>
            <hr />
            <div>
                <Link to="/add-rental" className="btn btn-primary mb-2">Add Rental</Link>




                <table className="table table-border table-sriped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Memebr Id</th>
                            <th>Rental Date</th>
                            <th>Rental Expiry</th>
                            <th>Total Cost</th>
                            <th>Created By</th>
                            <th>Creation Date</th>
                            <th>Updated By</th>
                            <th>Updated Date</th>
                            <th>Actions</th>




                        </tr>
                    </thead>
                    <tbody>
                        {
                            rentals.map(rental => (
                                <tr key={rental.id} >

                                    <td>{rental.memberId}</td>
                                    <td>{rental.rentalDate}</td>
                                    <td>{rental.rentalExpiry}</td>
                                    <td>{rental.totalCost}</td>
                                    <td>{rental.createdBy}</td>
                                    <td>{rental.creationDate}</td>
                                    <td>{rental.lastModifiedBy}</td>
                                    <td>{rental.lastModifiedDate}</td>


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
            <Link className="btn btn-warning" to="/navbar">Back</Link>
        </div>
    );
}

export default RentalsList;