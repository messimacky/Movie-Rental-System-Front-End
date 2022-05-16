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
    const [createdBy, setCreatedBy] = useState('');
    const [createdDate, setCreatedDate] = useState('');
    const [updatedBy, setUpdateddBy] = useState('');
    const [updatedDate, setUpdatedDate] = useState('');

    const history = useHistory();
    const { id } = useParams();



    const saveMovie = (e) => {
        e.preventDefault();
        const movie = { language, title, price, id, createdDate, createdBy, updatedBy, updatedDate };
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
                    setCreatedBy(movie.data.createdBy);
                    setCreatedDate(movie.data.creationDate);
                    setUpdateddBy(movie.data.updatedBy);
                    setUpdatedDate(movie.data.updatedDate);


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
                        id="created_by"
                        value={createdBy}
                        onChange={(e) => setCreatedBy(e.target.value)}
                        placeholder="created by"
                    />
                </div>


                <div className="form-group">
                    <input
                        type="date"
                        className="form-control col-4"
                        id="created_date"
                        value={createdDate}
                        onChange={(e) => setCreatedDate(e.target.value)}

                    />
                </div>




                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="updated_by"
                        value={updatedBy}
                        onChange={(e) => setUpdateddBy(e.target.value)}
                        placeholder="Updated by"
                    />
                </div>


                <div className="form-group">
                    <input
                        type="date"
                        className="form-control col-4"
                        id="updated_date"
                        value={updatedDate}
                        onChange={(e) => setUpdatedDate(e.target.value)}

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