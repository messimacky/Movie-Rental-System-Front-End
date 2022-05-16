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
    const [createdby, setCreatedBy] = useState('');
    const [createddate, setCreatedDate] = useState('');
    const [updatedby, setUpdateddBy] = useState('');
    const [updateddate, setUpdatedDate] = useState('');


    // const [movie_returned_status, setMovieReturnedStatus] = useState('');

    const history = useHistory();
    const { id } = useParams();



    const SaveRental = (e) => {
        e.preventDefault();
        const rental = { member_id, rental_date, rental_expiry, total_cost, createddate, createdby, updatedby, updateddate };
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
                    setMemberID(rental.data.member_id);
                    setRentalDate(rental.data.rental_date);
                    setRentalExpiry(rental.data.rental_expiry);
                    setTotalCost(rental.data.total_cost);
                    setCreatedBy(rental.date.createdby);
                    setCreatedDate(rental.data.createddate);
                    setUpdateddBy(rental.data.updatedby);
                    setUpdatedDate(rental.data.updateddate);
                    // setMovieReturnedStatus(rental.data.movie_returned_status);

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
                        value={member_id}
                        onChange={(e) => setMemberID(e.target.value)}
                        placeholder="Enter member ID"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="rental_date"
                        value={rental_date}
                        onChange={(e) => setRentalDate(e.target.value)}
                        placeholder="Rental Date"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
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
                        type="text"
                        className="form-control col-4"
                        id="createdby"
                        value={createdby}
                        onChange={(e) => setCreatedBy(e.target.value)}
                        placeholder="Created by"
                    />
                </div>


                <div className="form-group">
                    <input
                        type="date"
                        className="form-control col-4"
                        id="createddate"
                        value={createddate}
                        onChange={(e) => setCreatedDate(e.target.value)}
                        placeholder="Created Date"
                    />
                </div>




                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="updatedby"
                        value={updatedby}
                        onChange={(e) => setUpdateddBy(e.target.value)}
                        placeholder="Updated by"
                    />
                </div>


                <div className="form-group">
                    <input
                        type="date"
                        className="form-control col-4"
                        id="updateddate"
                        value={updateddate}
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