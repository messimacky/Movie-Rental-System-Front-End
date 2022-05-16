//import { Dropdown } from "bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import customerService from "../services/customer.service";
import './AddCustomer.css';

const AddCustomer = () => {

    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [lastModifiedBy, setLastModifiedBy] = useState('');
    const [lastModifiedDate, setLastModifiedDate] = useState('');

    const history = useHistory();
    // const { id } = useParams();



    const saveCustomer = (e) => {
        e.preventDefault();
        const customer = { firstName, lastName, username, phone, address, email, creationDate, createdBy, lastModifiedBy, lastModifiedDate };
        if (id) {
            //update records
            customerService.update(customer)
                .then(response => {
                    console.log("customer updated succesfully", response.data);
                    history.push('/customers');
                })
                .catch(error => {
                    console.log("Something went wrong", error);
                });

        } else {
            //create record
            customerService.create(customer)
                .then(response => {
                    console.log("Customer added succesfully", response.data);
                    history.push('/customers');
                })
                .catch(error => {
                    console.log("Something get wrong", error);
                });
        }

    }
    useEffect(() => {
        if (id) {
            <h3>Update Customer</h3>
            customerService.get(id)
                .then(customer => {

                    setFirstName(customer.data.firstName);
                    setLastName(customer.data.lastName);
                    setUsername(customer.data.username);
                    setPhone(customer.data.phone);
                    setAddress(customer.data.address);
                    setEmail(customer.data.email);
                    setCreatedBy(customer.data.createdBy);
                    setCreationDate(customer.data.creationDate);
                    setLastModifiedBy(customer.data.lastModifiedBy);
                    setLastModifiedDate(customer.data.lastModifiedDate);




                })
                .catch(error => {
                    console.log("Something went wrong", error);
                });
        }
    }, [])

    return (
        <div className="container">
            <h3>Add new Customer</h3>
            <hr />
            <form>




                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter firstname"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter lastname"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone number"
                    />
                </div>


                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter address"
                    />
                </div>


                <div
                    className="form-group">
                    <input
                        type="email"
                        className="form-control col-4"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email address"
                    />
                </div>






                <div>
                    <Link className="btn btn-warning" to="/customers">Back</Link>
                    <button className="btn btn-primary" onClick={(e) => saveCustomer(e)}>Save</button>


                </div>
            </form>
            <hr />

        </div>
    );
}

export default AddCustomer;