//import { Dropdown } from "bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import customerService from "../services/customer.service";
import './AddCustomer.css';

const AddCustomer = () => {

    // const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [lastUpdatedBy, setLastUdatedBy] = useState('');
    const [lastUpdatedDate, setUpdatedDate] = useState('');







    const history = useHistory();
    const { id } = useParams();



    const saveCustomer = (e) => {
        e.preventDefault();
        const customer = { firstName, lastName, username, phone, address, email, creationDate, createdBy, lastUpdatedBy, lastUpdatedDate };
        if (id) {
            //update records
            customerService.update(customer)
                .then(response => {
                    console.log("customer added succesfully", response.data);
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
            customerService.get(id)
                .then(customer => {
                    setFirstName(customer.data.firstName);
                    setLastName(customer.data.lastName);
                    setUsername(customer.data.username);
                    setPhone(customer.data.phone);
                    setAddress(customer.data.address);
                    setEmail(customer.data.email);
                    setCreatedBy(customer.date.createdBy);
                    setCreationDate(customer.data.CreationDate);
                    setlastUpdatedBy(customer.data.lastModifiedBy);
                    setUpdatedDate(customer.data.lastUpdatedDate);



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


                <div className="form-group">
                    <input
                        type="email"
                        className="form-control col-4"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email address"
                    />
                </div>








                <input
                    type="text"
                    className="form-control col-4"
                    id="createdBy"
                    value={createdBy}
                    onChange={(e) => setCreatedBy(e.target.value)}
                    placeholder="Created by"
                />

                <div className="form-group">
                    <input
                        type="date"
                        className="form-control col-4"
                        id="creationDate"
                        value={creationDate}
                        onChange={(e) => setCreationDate(e.target.value)}
                        placeholder="Creation Date"
                    />
                </div>




                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="lastUpdatedBy"
                        value={lastUpdatedBy}
                        onChange={(e) => setLastUdatedBy(e.target.value)}
                        placeholder="Updated by"
                    />
                </div>


                <div className="form-group">
                    <input
                        type="date"
                        className="form-control col-4"
                        id="lastUpdatedDate"
                        value={lastUpdatedDate}
                        onChange={(e) => setUpdatedDate(e.target.value)}
                        placeholder="Updated Date"
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