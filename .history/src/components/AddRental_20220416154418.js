import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import rentalService from "../services/rental.service";
// import './AddRental.css';

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
            rentalService.update(rental)
                .then(response => {
                    console.log("rental added succesfully", response.data);
                    history.push('/');
                })
                .catch(error => {
                    console.log("Something went wrong", error);
                });

        } else {
            //create record
            rentalService.create(rental)
                .then(response => {
                    console.log("Customer added succesfully", response.data);
                    history.push('/rentals');
                })
                .catch(error => {
                    console.log("Something get wrong", error);
                });
        }

    }
    useEffect(() => {
        if (id) {
            rentalService.get(id)
                .then(rental => {
                    setMemberID(rental.data.memberID);
                    setRentalDate(rental.data.rental_date);
                    setRentalExpiry(rental.data.rental_expiry);
                    setTotalCost(rental.data.total_Cost);
                    setMovieReturnedStatus(rental.data.movie_returned_status);
                })
                .catch(error => {
                    console.log("Something went wrong", error);
                });
        }
    }, [])

    return (
        <div className="container">
            <h3>Add new Rental</h3>
            <hr />
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="memberID"
                        value={memberID}
                        onChange={(e) => setMemberID(e.target.value)}
                        placeholder="Enter memberID"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        className="form-control col-4"
                        id="rental_date"
                        value={date}
                        onChange={(e) => setRentalDate(e.target.value)}
                        placeholder="Date"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="date"
                        className="form-control col-4"
                        id="date"
                        value={date}
                        onChange={(e) => setRentalExpiry(e.target.value)}
                        placeholder="Date"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="movie_returned_status"
                        value={movie_returned_status}
                        onChange={(e) => setMovieReturnedStatus(e.target.value)}
                        placeholder="select status"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control col-4"
                        id="total_Cost"
                        value={total_Cost}
                        onChange={(e) => setTotalCost(e.target.value)}
                        placeholder="Enter Cost"
                    />
                </div>

                <div>
                    <Link className="btn btn-warning" to="/rental-list">Back</Link>
                    <button className="btn btn-primary" onClick={(e) => saveRental(e)}>Save</button>
                </div>
            </form>
            <hr />

        </div>
    );
}

export default AddRental;