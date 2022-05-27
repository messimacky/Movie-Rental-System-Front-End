import React from "react";

class AddCustomer extends React.Component {
  state = {
    id: "",
    username: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    errors: {}
  };
  formValidation = () => {
    const { firstName, lastName, phone, email, address } = this.state;
    console.log(this.state.errors);
    let isValid = true;
    const errors = {}

    if (email === "") {
      errors.email = 'Email is Required!';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid Email!";
      isValid = false;
    }

    if (phone === "") {
      errors.phone = 'Phone Number Required!';
      isValid = false;
    } else if (!/^[0-9]{10,10}$/i.test(phone)) {
      errors.phone = "Invalid Phone!";
      isValid = false;
    }

    if (firstName === "") {
      errors.firstName = "First Name is required!";
      isValid = false;
    } else if (!/^[a-zA-Z]+$/i.test(firstName)) {
      errors.firstName = "First Name is not valid!";
      isValid = false;
    }

    if (lastName === "") {
      errors.lastName = "Last Name is required!";
      isValid = false;
    } else if (!/^[a-zA-Z]+$/i.test(lastName)) {
      errors.lastName = "Last Name is not valid!";
      isValid = false;
    }
    if (address === "") {
      errors.address = "Address is required!";
      isValid = false;
    } else if (!/^[a-zA-Z]+$/i.test(address)) {
      errors.address = "address is not valid!";
      isValid = false;
    }

    // console.log(this.error);

    this.setState({ errors })
  }
  add = (e) => {
    e.preventDefault();
    const isValid = this.formValidation();


    if (isValid) {
      this.props.addCustomerHandler(this.state);
      this.setState({
        username: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: ""
      });
      this.props.history.push("/");
    }
  };
  render() {
    const { firstName, lastName, phone, email, address, errors } = this.state;
    return (
      <div className="ui main">
        <h2>Add Customer</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            />
          </div>
          {errors.firstName ? (<p style={{ color: 'red' }}>{errors.firstName}</p>) : null}

          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            />
          </div>
          {errors.lastName ? (<p style={{ color: 'red' }}>{errors.lastName}</p>) : null}
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          {errors.email ? (<p style={{ color: 'red' }}>{errors.email}</p>) : null}
          <div className="field">
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              placeholder="0911121314"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
          {errors.phone ? (<p style={{ color: 'red' }}>{errors.phone}</p>) : null}
          <div className="field">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </div>
          {errors.address ? (<p style={{ color: 'red' }}>{errors.address}</p>) : null}
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddCustomer;
