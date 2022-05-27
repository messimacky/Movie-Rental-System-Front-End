import React from "react";

class EditMovie extends React.Component {
  constructor(props) {
    super(props);
    const { movie_id, title, genre } = props.location.state.movie;
    this.state = {
      movie_id,
      title,
      genre,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.genre === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateMovieHandler(this.state);
    this.setState({ title: "", genre: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Movie</h2>
        <form className="ui form" onSubmit={this.update}>
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
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditMovie;
