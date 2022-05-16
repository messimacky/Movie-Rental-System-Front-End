import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import customerService from "../services/customer.service";
import { Link } from "react-router-dom";

const CustomersList = () => {
    const [customers, setCustomers] = useState([]);


    useEffect(() => {
        init();

    }, [])

    const init = () => {
        customerService.getAll()
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
        <div>
            <h3>Customers</h3>
            <hr />
            <div>
                <Link to="/add-customer" className="btn btn-primary mb-2">Add Customer</Link>




                <table className="table table-border table-sriped">
                    <thead className="thead-dark">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Phone number</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Created by</th>
                            <th>Created Date</th>
                            <th>Updated by</th>
                            <th>Updated Date</th>

                            <th>Actions</th>




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
                                    <td>{customer.created_by}</td>
                                    <td>{customer.created_date}</td>
                                    <td>{customer.updated_by}</td>
                                    <td>{customer.updated_date}</td>





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