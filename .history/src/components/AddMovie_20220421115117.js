import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import movieService from "../services/movie.service";


const AddMovie = () => {

    // const [id, setId] = useState('');
    const [language, setLanguage] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    setCreatedBy(customer.date.createdby);
    setCreatedDate(customer.data.createddate);
    setUpdateddBy(customer.data.updatedby);
    setUpdatedDate(customer.data.updateddate);

    const history = useHistory();
    const { id } = useParams();



    const saveMovie = (e) => {
        e.preventDefault();
        const movie = { language, title, price, id, createddate, createdby, updatedby, updateddate };
        if (id) {
            //update records
            movieService.update(movie)
                .then(response => {
                    console.log("Movie added succesfully", response.data);
                    history.push('/movies');
                })
                .catch(error => {
                    console.log("Something went wrong", error);
                });

        } else {
            //create record
            movieService.create(movie)
                .then(response => {
                    console.log("Movie added succesfully", response.data);
                    history.push('/movies');
                })
                .catch(error => {
                    console.log("Something get wrong", error);
                });
        }

    }
    useEffect(() => {
        if (id) {
            movieService.get(id)
                .then(movie => {
                    setLanguage(movie.data.language);
                    setTitle(movie.data.title);
                    setPrice(movie.data.price);

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
                    <Link className="btn btn-warning" to="/movies">Back</Link>
                    <button className="btn btn-primary" onClick={(e) => saveMovie(e)}>Save</button>
                </div>
            </form>
            <hr />

        </div>
    );
}

export default AddMovie;