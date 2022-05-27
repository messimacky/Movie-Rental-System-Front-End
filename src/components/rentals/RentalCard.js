import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/dol.png";

const RentalCard = (props) => {
  const { rentalID, customerId, customerFirstName, customerLastName, rentAmount, rentalExpiry, isReturned } = props.rental;
  return (
    <div className="item">
      <img className="ui image" style={{ width: '96px', height: '96px' }} src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `/rentals/${rentalID}`, state: { rental: props.rental } }}
        >
          <div style={{ color: '#000', font_weight: 'bold' }}>Customer Name: {customerFirstName + " " + customerLastName}</div>
          <div style={{ color: '#000', font_weight: 'bold' }}>Customer ID:{customerId}</div>
          <div style={{ color: '#000', font_weight: 'bold' }}>Price: {rentAmount}</div>
          <div style={{ color: '#000', font_weight: 'bold' }}> {isReturned}</div>

        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(rentalID)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { rental: props.rental } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default RentalCard;
