import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import customerService from "../services/customer.service";
import { Link } from "react-router-dom";

const CustomerList = () => {
    const [customer, setCustomer] = useState([]);


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
                console.log("Movie deleted succesfully", response.data);
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
                <Link to="/add-customer" className="btn btn-primary mb-2">Add Customer</Link>




                <table className="table table-border table-sriped">
                    <thead className="thead-dark">
                        <tr>
                            <th>firstname</th>
                            <th>lastname</th>
                            <th>username</th>
                            <th>phone</th>
                            <th>address</th>
                            <th>email</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map(customer => (
                                <tr key={customer.id} >

                                    <td>{customer.firstname}</td>
                                    <td>{customer.lastname}</td>
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

export default CustomerList;