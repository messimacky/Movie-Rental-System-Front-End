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
                console.log("Customer deleted succesfully", response.data);
                init();

            })
            .catch(error => {
                console.log("Something went wrong", error);
            })
    }


    return (
        <div className="container">
            <h3>Rentals</h3>
            <hr />
            <div>
                <Link to="/add-rental" className="btn btn-primary mb-2">Add Rental</Link>




                <table className="table table-border table-sriped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Member ID</th>
                            <th>Movie Status</th>
                            <th>Rental Date</th>
                            <th>Rental Expiry</th>
                            <th>Total Cost</th>



                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map(customer => (
                                <tr key={customer.id} >

                                    <td>{customer.first_name}</td>
                                    <td>{customer.last_name}</td>
                                    <td>{customer.username}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.email}</td>

                                    <td>
                                        <Link className="btn btn-info" to={`/customers/edit/${customer.id}`}> Update</Link>
                                        <button className="btn btn-danger ml-2" onClick={(e) => {
                                            handleDelete(customer.id);
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

export default CustomersList;