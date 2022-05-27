import React from "react";

class AddMovie extends React.Component {
  state = {
    title: "",
    genre: "",
    language: "",
    price: "",
    errors: {}
  };
  formValidation = () => {
    const { title, genre, language, price } = this.state;
    console.log(this.state.errors);
    let isValid = true;
    const errors = {}

    if (title === "") {
      errors.title = "Title is Required!";
      isValid = false;
    }
    if (price === "") {
      errors.price = "Price is Required!";
      isValid = false;
    } else if (!/^\d+(\.\d{0,2})?$/i.test(price)) {
      errors.price = "Price is not valid!";
      isValid = false;
    }
    if (genre === "") {
      errors.genre = "Genre is required!";
      isValid = false;
    } else if (!/^[a-zA-Z]+$/i.test(genre)) {
      errors.genre = "Genre is not valid!";
      isValid = false;
    }
    if (language === "") {
      errors.language = "Language is required!";
      isValid = false;
    } else if (!/^[a-zA-Z]+$/i.test(language)) {
      errors.language = "language is not valid!";
      isValid = false;
    }
    // console.log(this.error);

    this.setState({ errors })
  }
  add = (e) => {
    e.preventDefault();
    const isValid = this.formValidation();


    if (isValid) {
      this.props.addMovieHandler(this.state);
      this.setState({
        title: "",
        genre: "",
        language: "",
        price: ""
      });
      this.props.history.push("/");
    }

  };
  render() {
    const { title, genre, language, price, errors } = this.state;
    return (
      <div className="ui main">
        <h2>Add Movie</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          {errors.title ? (<p style={{ color: 'red' }}>{errors.title}</p>) : null}
          <div className="field">
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              placeholder="Genre"
              value={this.state.genre}
              onChange={(e) => this.setState({ genre: e.target.value })}
            />
          </div>
          {errors.genre ? (<p style={{ color: 'red' }}>{errors.genre}</p>) : null}
          <div className="field">
            <label>Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
            />
          </div>
          {errors.price ? (<p style={{ color: 'red' }}>{errors.price}</p>) : null}
          <div className="field">
            <label>Language</label>
            <input
              type="text"
              name="language"
              placeholder="Language"
              value={this.state.language}
              onChange={(e) => this.setState({ language: e.target.value })}
            />
          </div>
          {errors.language ? (<p style={{ color: 'red' }}>{errors.language}</p>) : null}
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
