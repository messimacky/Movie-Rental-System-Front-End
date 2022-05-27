import React from "react";

class AddRental extends React.Component {


  state = {
    rentalID: "",
    customerId: "",
    customerFirstName: "",
    customerLastName: "",
    rentAmount: "",
    rentalExpiry: "",
    isReturned: false,
    errors: {}


  };
  formValidation = () => {
    const { rentalID, customerId, rentAmount, rentalExpiry } = this.state;
    // console.log(this.state.errors);
    let isValid = true;
    const errors = {}

    if (rentAmount === "") {
      errors.rentAmount = "rentAmount is Required!";
      isValid = false;
    } else if (!/^\d+(\.\d{0,2})?$/i.test(rentAmount)) {
      errors.rentAmount = "rentAmount is not valid!";
      isValid = false;
    }

    if (rentalID === "") {
      errors.rentalID = 'rentalID Required!';
      isValid = false;
    } else if (!/^[0-9]{,6}$/i.test(rentalID)) {
      errors.rentalID = "Invalid Rental ID!";
      isValid = false;
    }
    if (customerId === "") {
      errors.customerId = 'customerId Required!';
      isValid = false;
    } else if (!/^[0-9]+$/i.test(customerId)) {
      errors.customerId = "Invalid CustomerId!";
      isValid = false;
    }
    let today = new Date();
    let ttoday = today.toISOString().split('T')[0];
    let date1Updated = new Date(ttoday.replace(/-/g, '/'));
    let date2Updated = new Date(rentalExpiry.replace(/-/g, '/'));

    if (rentalExpiry === "") {
      errors.rentalExpiry = 'Expiry Date Required!';
      isValid = false;
    }
    else if (date1Updated > date2Updated) {
      errors.rentalExpiry = 'Invalid Expiry Date!';
      isValid = false;
    }

    console.log(rentalExpiry + " ***** " + today.toISOString().split('T')[0])

    this.setState({ errors })
  }



  add = (e) => {
    e.preventDefault();

    const isValid = this.formValidation();


    if (isValid) {
      this.props.addRentalHandler(this.state);
      this.setState({
        rentalID: "",
        customerId: "",
        customerFirstName: "",
        customerLastName: "",
        rentAmount: "",
        rentalExpiry: "",
        isReturned: false

      });
      this.props.history.push("/");
    }
  };
  render() {
    const { rentalID, customerId, rentAmount, rentalExpiry, isReturned, errors } = this.state;
    return (

      <div className="ui main">
        <h2>Add Rental</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Customer ID</label>
            <input
              type="number"
              name="customerId"
              value={this.state.customerId}
              onChange={(e) => this.setState({ customerId: e.target.value })}
            />
          </div>
          {errors.customerId ? (<p style={{ color: 'red' }}>{errors.customerId}</p>) : null}

          <div className="field">
            <label>Price</label>
            <input
              type="number"
              name="rentAmount"
              value={this.state.rentAmount}
              onChange={(e) => this.setState({ rentAmount: e.target.value })}
            />
          </div>
          {errors.rentAmount ? (<p style={{ color: 'red' }}>{errors.rentAmount}</p>) : null}

          <div className="field">
            <label>Expiry Date</label>
            <input
              type="date"
              name="rentalExpiry"
              value={this.state.rentalExpiry}
              onChange={(e) => this.setState({ rentalExpiry: e.target.value })}
            />
          </div>
          {errors.rentalExpiry ? (<p style={{ color: 'red' }}>{errors.rentalExpiry}</p>) : null}

          <button className="ui button blue">Add</button>
        </form>
      </div>

    );
  }

}

export default AddRental;
