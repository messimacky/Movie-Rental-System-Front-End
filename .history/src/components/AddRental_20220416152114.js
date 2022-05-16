import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import customerService from "../services/rental.service";
import './AddRental.css';

const AddRental = () => {

    // const [id, setId] = useState('');
    const [memberID, setMemberID] = useState('');
    const [rental_date, setRentalDate] = useState('');
    const [rental_expiry, setRentalExpiry] = useState('');
    const [total_Cost, setTotalCost] = useState('');
    const [movie_returned_status, setMovieReturnedStatus] = useState('false');



    const history = useHistory();
    const { id } = useParams();



    const saveRental = (e) => {
        e.preventDefault();
        const rental = { memberID, rental_date, rental_expiry, total_Cost, movie_returned_status };
        if (id) {
            //update records
            customerService.update(customer)
                .then(response => {
                    console.log("customer added succesfully", response.data);
                    history.push('/');
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
                    setFirstname(customer.data.firstname);
                    setLastname(customer.data.lastname);
                    setUsername(customer.data.username);
                    setPhone(customer.data.phone);
                    setAddress(customer.data.address);
                    setUEmail(customer.data.email);



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
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        placeholder="Enter firstname"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="lastname"
                        value={lastname}
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
                        type="tel"
                        className="form-control col-4"
                        id="email"
                        value={email}
                        onChange={(e) => setUEmail(e.target.value)}
                        placeholder="Enter email address"
                    />
                </div>

                <div>
                    <Link className="btn btn-warning" to="/">Back</Link> <button className="btn btn-primary" onClick={(e) => saveCustomer(e)}>Save</button>
                </div>
            </form>
            <hr />

        </div>
    );
}

export default AddCustomer;