import React from "react";
import { Link } from "react-router-dom";

const RentalDetail = (props) => {
  const { rentalID, customerId, customerFirstName, customerLastName, rentAmount } = props.location.state.rental;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">

        </div>
        <div className="content">
          <div className="header">Rent ID: {rentalID}</div>
          <div className="description">
            Customer ID: {customerId}
            Customer Name: {customerFirstName + " " + customerLastName}
            Paid amount: {rentAmount}

          </div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to rental List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RentalDetail;
