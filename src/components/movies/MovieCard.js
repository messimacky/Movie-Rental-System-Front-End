import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/final.gif";

const MovieCard = (props) => {
  const { movieId, title, genre } = props.movie;
  return (
    <div className="item">
      <img className="ui image" style={{ width: '96px', height: '96px' }} src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `/movies/${movieId}`, state: { movie: props.movie } }}
        >
          <div style={{ color: '#000', font_weight: 'bold' }}>{title}</div>
          <div>{genre}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(movieId)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { movie: props.movie } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default MovieCard;
