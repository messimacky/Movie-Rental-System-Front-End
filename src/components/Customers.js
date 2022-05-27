import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/db";
import "./App.css";
import Header from "./customers/Header";
import AddCustomer from "./customers/AddCustomer";
import CustomerList from "./customers/CustomerList";
import CustomerDetail from "./customers/CustomerDetail";
import EditCustomer from "./customers/EditCustomers";

function Customers() {
  // const LOCAL_STORAGE_KEY = "contacts";
  const [customers, setCustomers] = useState([]);

  //RetrieveContacts
  const retrieveCustomers = async () => {
    const response = await api.get("/customers");
    return response.data;
  };

  const addCustomerHandler = async (customer) => {
    console.log(customer);
    const request = {
      // id: uuid(),
      ...customer,
    };

    const response = await api.post("/customers", request);
    console.log(response);
    setCustomers([...customers, response.data]);
  };

  const updateCustomerHandler = async (customer) => {
    const response = await api.put(`/customers/${customer.id}`, customer);
    const { id, title, genre } = response.data;

    setCustomers(
      customers.map((customer) => {
        return customer.id === id ? { ...response.data } : customer;
      })
    );

  };

  const removeCustomerHandler = async (id) => {
    await api.delete(`/customers/${id}`);
    const newCustomerList = customers.filter((customer) => {
      return customer.id !== id;
    });

    setCustomers(newCustomerList);
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllCustomers = async () => {
      const allCustomers = await retrieveCustomers();
      if (allCustomers) setCustomers(allCustomers);
    };

    getAllCustomers();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [customers]);

  return (
    <div className="ui container">
      <Router>
        {/*<Header />*/}
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <CustomerList
                {...props}
                customers={customers}
                getCustomerId={removeCustomerHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddCustomer {...props} addCustomerHandler={addCustomerHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditCustomer
                {...props}
                updateCustomerHandler={updateCustomerHandler}
              />
            )}
          />

          <Route path="/customer/:id" component={CustomerDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default Customers;
