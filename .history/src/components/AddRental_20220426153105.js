import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import rentalService from "../services/rental.service";


const AddRental = () => {

    const [memberId, setMemberId] = useState('');
    const [rentalDate, setRentalDate] = useState('');
    const [rentalExpiry, setRentalExpiry] = useState('');
    const [totalCost, setTotalCost] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [lastModifiedBy, setLastModifiedBy] = useState('');
    const [lastModifiedDate, setLastModifiedDate] = useState('');


    const history = useHistory();
    // const { id } = useParams();



    const SaveRental = (e) => {
        e.preventDefault();
        const rental = { memberId, rentalDate, rentalExpiry, totalCost, creationDate, createdBy, lastModifiedBy, lastModifiedDate };
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

                    setMemberId(rental.data.memberId);
                    setRentalDate(rental.data.rentalDate);
                    setRentalExpiry(rental.data.rentalExpiry);
                    setTotalCost(rental.data.totalCost);
                    setCreatedBy(rental.data.createdBy);
                    setCreationDate(rental.data.creationDate);
                    setLastModifiedBy(rental.data.lastModifiedBy);
                    setLastModifiedDate(rental.data.lastModifiedDate);




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
                        id="memberId"
                        value={memberId}
                        onChange={(e) => setMemberId(e.target.value)}
                        placeholder="Enter member ID"
                    />
                </div>
                <div className="form-group">
                    <label>Rental Date</label>
                    <input
                        type="date"
                        className="form-control col-4"
                        id="rentalDate"
                        value={rentalDate}
                        onChange={(e) => setRentalDate(e.target.value)}
                        placeholder="Rental Date"
                    />
                </div>

                <div className="form-group">

                    <label>Rental Expiry</label>
                    <input
                        type="date"
                        className="form-control col-4"
                        id="rentalExpiry"
                        value={rentalExpiry}
                        onChange={(e) => setRentalExpiry(e.target.value)}
                        placeholder="Enter expiry date"
                    />
                </div>


                <div className="form-group">
                    <label>Total cost</label>
                    <input
                        type="number"
                        className="form-control col-4"
                        id="totalCost"
                        value={totalCost}
                        onChange={(e) => setTotalCost(e.target.value)}
                        placeholder="Enter total cost"
                    />
                </div>

                <div className="form-group">
                    <label>Cretated by</label>

                    <input
                        type="text"
                        className="form-control col-4"
                        id="createdBy"
                        value={createdBy}
                        onChange={(e) => setCreatedBy(e.target.value)}
                        placeholder="Created by"
                    />
                </div>


                <div className="form-group">
                    <label>Created Date</label>
                    <input
                        type="date"
                        className="form-control col-4"
                        id="creationDate"
                        value={creationDate}
                        onChange={(e) => setCreationDate(e.target.value)}
                        placeholder="Created Date"
                    />
                </div>




                <div className="form-group">
                    <label> Updated by</label>
                    <input
                        type="text"
                        className="form-control col-4"
                        id="lastModifiedBy"
                        value={lastModifiedBy}
                        onChange={(e) => setLastModifiedBy(e.target.value)}
                        placeholder="Updated by"
                    />
                </div>


                <div className="form-group">
                    <label> Updated Date</label>
                    <input
                        type="date"
                        className="form-control col-4"
                        id="lastModifiedDate"
                        value={lastModifiedDate}
                        onChange={(e) => setLastModifiedDate(e.target.value)}
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