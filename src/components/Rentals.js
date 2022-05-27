import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from "../api/db";
import "./App.css";
import Header from "./rentals/Header";
import AddRental from "./rentals/AddRental";
import RentalList from "./rentals/RentalList";
import rentalDetail from "./rentals/RentalDetail"
import EditRental from "./rentals/EditRental";

function Rentals() {

  const [rentals, setRentals] = useState([]);

  //Retrieverentals
  const retrieveRentals = async () => {
    const response = await api.get("/rentals");
    return response.data;
  };

  const addRentalHandler = async (rental) => {
    console.log(rental);
    const request = {
      // id: uuid(),
      ...rental,
    };

    const response = await api.post("/rentals", request);
    console.log(response);
    setRentals([...rentals, response.data]);
    window.location.reload(false);
  };

  const updateRentalHandler = async (rentals) => {
    const response = await api.put(`/rentals/${rentals.rentalID}`, rentals);
    const { rentalID, title, genre } = response.data;

    setRentals(
      rentals.map((rental) => {
        return rental.rentalID === rentalID ? { ...response.data } : rental;
      })
    );
    window.location.reload(false);
  };

  const removeRentalHandler = async (id) => {
    await api.delete(`/rentals/${id}`);
    const newRentalList = rentals.filter((rental) => {
      return rental.rentalID !== id;
    });

    setRentals(newRentalList);
    window.location.reload(false);
  };

  useEffect(() => {
    const getAllRentals = async () => {
      const allRentals = await retrieveRentals();
      if (allRentals) setRentals(allRentals);
    };

    getAllRentals();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [rentals]);

  return (
    <div className="ui container">
      <Router>

        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <RentalList
                {...props}
                rentals={rentals}
                getRentalId={removeRentalHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddRental {...props} addRentalHandler={addRentalHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditRental
                {...props}
                updateRentalHandler={updateRentalHandler}
              />
            )}
          />

          <Route path="/rental/:id" component={rentalDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default Rentals;
