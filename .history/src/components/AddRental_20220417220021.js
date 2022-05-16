import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import rentalService from "../services/rental.service";


const SaveRental = () => {

    // const [id, setId] = useState('');
    const [memberid, setMemberID] = useState('');
    const [rental_date, setRentalDate] = useState('');
    const [rental_expiry, setRentalExpiry] = useState('');
    const [total_cost, setTotalCost] = useState('');
    const [movie_returned_status, setMovieReturnedStatus] = useState('');

    const history = useHistory();
    const { id } = useParams();



    const AddMovie = (e) => {
        e.preventDefault();
        const rental = { memberid, rental_date, rental_expiry, total_cost, movie_returned_status };
        if (id) {
            //update records
            rentalService.update(rental)
                .then(response => {
                    console.log("Rental added succesfully", response.data);
                    history.push('/rentals');
                })
                .catch(error => {
                    console.log("Something went wrong", error);
                });

        } else {
            //create record
            rentalService.create(rental)
                .then(response => {
                    console.log("Rental added succesfully", response.data);
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
                    setMemberID(rental.data.memberid);
                    setRentalDate(rental.data.rental_date);
                    setRentalExpiry(rental.data.rental_expiry);
                    setTotalCost(rental.data.total_cost);
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
                        type="number"
                        className="form-control col-4"
                        id="memberid"
                        value={memberid}
                        onChange={(e) => setMemberID(e.target.value)}
                        placeholder="Enter member ID"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control col-4"
                        id="rental_date"
                        value={rental_date}
                        onChange={(e) => setRentalDate(e.target.value)}
                        placeholder="Rental Date"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="number"
                        className="form-control col-4"
                        id="rental_expiry"
                        value={rental_expiry}
                        onChange={(e) => setRentalExpiry(e.target.value)}
                        placeholder="Enter expiry date"
                    />
                </div>


                <div className="form-group">
                    <input
                        type="number"
                        className="form-control col-4"
                        id="total_cost"
                        value={total_cost}
                        onChange={(e) => setTotalCost(e.target.value)}
                        placeholder="Enter total cost"
                    />
                </div>



                <div className="form-group">
                    <input
                        type="radio"
                        className="form-control col-4"
                        id="movie_returned_status"
                        value={movie_returned_status}
                        onChange={(e) => setMovieReturnedStatus(e.target.value)}
                        placeholder="Enter total cost"
                    />
                </div>



                <div>
                    <Link className="btn btn-warning" to="/rentals">Back</Link>
                    <button className="btn btn-primary" onClick={(e) => SaveRental(e)}>Save</button>
                </div>
            </form>
            <hr />

        </div>
    );
}

export default AddRental;