import React from "react";
import { Link } from "react-router-dom";
import RentalCard from "./RentalCard";

const RentalList = (props) => {
  console.log(props);

  const deleteRentalHandler = (rentalId) => {
    props.getrentalId(rentalId);
  };

  const renderRentalList = props.rentals.map((rental) => {
    return (
      <RentalCard
        rental={rental}
        clickHander={deleteRentalHandler}
        key={rental.rentalId}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Rental List
        <Link to="/add">
          <button className="ui button blue right">Add rental</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderRentalList}</div>
    </div>
  );
};

export default RentalList;
