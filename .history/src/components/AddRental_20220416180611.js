import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import rentalService from "../services/rental.service";


const AddRental = () => {

    // const [id, setId] = useState('');
    const [memberID, setMemberID] = useState('');
    const [rental_date, setRentalDate] = useState('');
    const [rental_expiry, setRentalExpiry] = useState('');
    const [total_cost, setTotalCost] = useState('');
    const [movie_returned_status, setMovieReturnedStatus] = useState('');

    const history = useHistory();
    const { id } = useParams();



    const saveRental = (e) => {
        e.preventDefault();
        const rental = { memberID, rental_date, rental_expiry, total_cost, movie_returned_status };
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
                .then(movie => {
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
                        type="text"
                        className="form-control col-4"
                        id="memberid"
                        value={memberID}
                        onChange={(e) => setMemberID(e.target.value)}
                        placeholder="Enter Memebr ID"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="rental_date"
                        value={rental_date}
                        onChange={(e) => setRentalDate(e.target.value)}
                        placeholder="Enter Rental date"
                    />

                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="rental_expiry"
                        value={rental_expiry}
                        onChange={(e) => setRentalExpiry(e.target.value)}
                        placeholder="Enter Expiry date"
                    />

                </div>


                <div>
                    <Link className="btn btn-warning" to="/movies">Back</Link>
                    <button className="btn btn-primary" onClick={(e) => saveMovie(e)}>Save</button>
                </div>
            </form>
            <hr />

        </div>
    );
}

export default AddMovie;