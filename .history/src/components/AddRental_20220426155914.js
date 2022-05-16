import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import rentalService from "../services/rental.service";


const AddRental = () => {

    // const [id, setId] = useState('');
    const [memberId, setMemberId] = useState('');
    const [rentalDate, setRentalDate] = useState('');
    const [rentalExpiry, setRentalExpiry] = useState('');
    const [totalCost, setTotalCost] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [lastModifiedBy, setLastModifiedBy] = useState('');
    const [lastModifiedDate, setLastModifiedDate] = useState('');





    const history = useHistory();
    const { id } = useParams();



    const saveRental = (e) => {
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
            <h3>Add new movie</h3>
            <hr />
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        placeholder="Enter language"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="Number"
                        className="form-control col-4"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter price"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="createdBy"
                        value={createdBy}
                        onChange={(e) => setCreatedBy(e.target.value)}
                        placeholder="created by"
                    />
                </div>


                <div className="form-group">
                    <input
                        type="date"
                        className="form-control col-4"
                        id="creationDate"
                        value={creationDate}
                        onChange={(e) => setCreationDate(e.target.value)}

                    />
                </div>




                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="lastModifiedBy"
                        value={lastModifiedBy}
                        onChange={(e) => setLastModifiedBy(e.target.value)}
                        placeholder="Modified by"
                    />
                </div>


                <div className="form-group">
                    <input
                        type="date"
                        className="form-control col-4"
                        id="lastModifiedDate"
                        value={lastModifiedDate}
                        onChange={(e) => setLastModifiedDate(e.target.value)}

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

export default AddRental;