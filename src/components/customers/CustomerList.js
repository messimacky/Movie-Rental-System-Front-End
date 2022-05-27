import React from "react";
import { Link } from "react-router-dom";
import CustomerCard from "./CustomerCard";

const CustomerList = (props) => {
  console.log(props);

  const deleteCustomerHandler = (id) => {
    props.getCustomerId(id);
  };

  const renderCustomerList = props.customers.map((customer) => {
    return (
      <CustomerCard
        customer={customer}
        clickHandler={deleteCustomerHandler}
        key={customer.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Customer List
        <Link to="/add">
          <button className="ui button blue right">Add Customer</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderCustomerList}</div>
    </div>
  );
};

export default CustomerList;
