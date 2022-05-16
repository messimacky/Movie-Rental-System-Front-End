import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import rentalService from "../services/rental.service";


const AddRental = () => {

    // const [id, setId] = useState('');
    const [member_id, setMemberID] = useState('');
    const [rental_date, setRentalDate] = useState('');
    const [rental_expiry, setRentalExpiry] = useState('');
    const [total_cost, setTotalCost] = useState('');
    const [created_by, setCreatedBy] = useState('');
    const [created_date, setCreatedDate] = useState('');
    const [updated_by, setUpdatedBy] = useState('');
    const [updated_date, setUpdatedDate] = useState('');


    // const [movie_returned_status, setMovieReturnedStatus] = useState('');

    const history = useHistory();
    const { id } = useParams();



    const SaveRental = (e) => {
        e.preventDefault();
        const rental = { id, member_id, rental_date, rental_expiry, total_cost, created_date, created_by, updated_by, updated_date };
        if (id) {
            //update records
            rentalService.update(rental)
                .then(response => {
                    console.log("Movie added succesfully", response.data);
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
                    setMemberID(rental.data.member_id);
                    setRentalDate(rental.data.rental_date);
                    setRentalExpiry(rental.data.rental_expiry);
                    setTotalCost(rental.date.total_cost);
                    setCreatedBy(rental.data.created_by);
                    setUpdatedDate(rental.data.created_date);
                    setUpdatedBy(rental.data.updated_by);
                    setUpdatedDate(rental.data.updated_date);



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
                    <label>Member ID</label>
                    <input type="number"
                        className="form-control col-4"
                        id="memberid"
                        value={member_id}
                        onChange={(e) => setMemberID(e.target.value)}
                        placeholder="Enter member ID"
                    />
                </div>
                <div className="form-group">
                    <label>Rental Date</label>
                    <input
                        type="datetime-local"
                        className="form-control col-4"
                        id="rental_date"
                        value={rental_date}
                        onChange={(e) => setRentalDate(e.target.value)}
                        placeholder="Rental Date"
                    />
                </div>

                <div className="form-group">

                    <label>Rental Expiryy</label>
                    <input
                        type="datetime-local"
                        className="form-control col-4"
                        id="rental_expiry"
                        value={rental_expiry}
                        onChange={(e) => setRentalExpiry(e.target.value)}
                        placeholder="Enter expiry date"
                    />
                </div>


                <div className="form-group">
                    <label>Total cost</label>
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
                        type="text"
                        className="form-control col-4"
                        id="createdby"
                        value={created_by}
                        onChange={(e) => setCreatedBy(e.target.value)}
                        placeholder="Created by"
                    />
                </div>


                <div className="form-group">
                    <input
                        type="date"
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
                        onChange={(e) => setUpdatedBy(e.target.value)}
                        placeholder="Updated by"
                    />
                </div>


                <div className="form-group">
                    <input
                        type="date"
                        className="form-control col-4"
                        id="updated_date"
                        value={updated_date}
                        onChange={(e) => setUpdatedDate(e.target.value)}
                        placeholder="Updated Date"
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