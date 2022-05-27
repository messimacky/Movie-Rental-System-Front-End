import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/final.gif";

const MovieDetail = (props) => {
  const { title, genre } = props.location.state.movie;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{title}</div>
          <div className="description">{genre}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to movie List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetail;
