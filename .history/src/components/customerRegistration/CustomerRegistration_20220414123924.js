
import React from 'react'
import './CustomerRegistration.css'
import { Link } from 'react-router-dom'
export default function CustomerRegistration() {
    return (
        <div className="form">
            <form>

                <h2>Register </h2>

                <div className="input-box">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <input type="text" name="firstname" placeholder="First Name" required />
                </div>

                <div className="input-box">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <input type="text" name="lastname" placeholder="Last Name" required />
                </div>


                <div className="input-box">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <input type="text" name="username" placeholder="Username" required />
                </div>
                <div className="input-box">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <input type="tel" name="phonenumber" placeholder="Phone Number" required />
                </div>


                <div className="input-box">
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    <input type="text" name="address" placeholder="Address" required />
                </div>

                <div className="input-box">

                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="input-box">
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    <input type="password" name="password" placeholder="Password" required />
                </div>

                <div className="input-box">
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    <input type="password" name="password" placeholder="Confirm Password" required />
                </div>



                <div className="input-box">
                    <input type="submit" name="submit" value="submit" />
                </div>
                <Link className="btn btn-warning" to="/">Back</Link>
            </form>
        </div>
    )
}




