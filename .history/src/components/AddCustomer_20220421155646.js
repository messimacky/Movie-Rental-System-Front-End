//import { Dropdown } from "bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import customerService from "../services/customer.service";
import './AddCustomer.css';

const AddCustomer = () => {

    // const [id, setId] = useState('');
    const [first_name, setFirstname] = useState('');
    const [last_name, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [created_by, setCreatedBy] = useState('');
    const [created_date, setCreatedDate] = useState('');
    const [updated_by, setUpdateddBy] = useState('');
    const [updated_date, setUpdatedDate] = useState('');







    const history = useHistory();
    const { id } = useParams();



    const saveCustomer = (e) => {
        e.preventDefault();
        const customer = { first_name, last_name, username, phone, address, email, created_date, created_by, updated_by, updated_date };
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
                    setFirstname(customer.data.first_name);
                    setLastname(customer.data.last_name);
                    setUsername(customer.data.username);
                    setPhone(customer.data.phone);
                    setAddress(customer.data.address);
                    setEmail(customer.data.email);
                    setCreatedBy(customer.date.created_by);
                    setCreatedDate(customer.data.created_date);
                    setUpdateddBy(customer.data.updated_by);
                    setUpdatedDate(customer.data.updated_date);



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
                        id="firstname"
                        value={first_name}
                        onChange={(e) => setFirstname(e.target.value)}
                        placeholder="Enter firstname"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="lastname"
                        value={last_name}
                        onChange={(e) => setLastname(e.target.value)}
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
                        type="tel"
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
                    id="createdby"
                    value={created_by}
                    onChange={(e) => setCreatedBy(e.target.value)}
                    placeholder="Created by"
                />

                <div className="form-group">
                    <input
                        type="datetime-local"
                        className="form-control col-4"
                        id="createddate"
                        value={created_date}
                        onChange={(e) => setCreatedDate(e.target.value)}
                        placeholder="Created Date"
                    />
                </div>




                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="updatedby"
                        value={updated_by}
                        onChange={(e) => setUpdateddBy(e.target.value)}
                        placeholder="Updated by"
                    />
                </div>


                <div className="form-group">
                    <input
                        type="datetime-local"
                        className="form-control col-4"
                        id="updateddate"
                        value={updated_date}
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