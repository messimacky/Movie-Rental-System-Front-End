import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/Homepage";
import { useAuth0 } from '@auth0/auth0-react';
import Header from "./landing/Header";
import Homepage from "./pages/Homepage";
function App() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      <Homepage />
    </>
  )
}

export default App;
