import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import movieService from "../services/movie.service";


const AddMovie = () => {

    // const [id, setId] = useState('');
    const [movieId, setMovieId] = useState('');
    const [language, setLanguage] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [price, setPrice] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [lastModifiedBy, setLastModifiedBy] = useState('');
    const [lastModifiedDate, setLastModifiedDate] = useState('');

    const history = useHistory();
    const { id } = useParams();



    const saveMovie = (e) => {
        e.preventDefault();
        const movie = { genre, movieId, language, title, price };
        if (movieId) {
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
            movieService.get(movieId)
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
                        type="genre"
                        className="form-control col-4"
                        id="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
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