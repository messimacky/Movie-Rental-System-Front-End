import { useState } from "react";
import "./Tabs.css";
import Movies from "../Movies";
import Customers from "../Customers";
import Rentals from "../Rentals";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Movie
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Customer
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Rental
        </button>

      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >


          <Movies />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >


          <Customers />
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >


            <Rentals />
          </div>


        </div>
      </div></div>
  );
}

export default Tabs;