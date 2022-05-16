
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Signup.css';
export default function Signup() {
    return (
        <div className="form">
            <form>

                <h2>Admin </h2>
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
                    <input type="email" name="email" placeholder="Email" required />
                </div>




                <div className="input-box">
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    <input type="password" name="password" placeholder="Password" required />  </div>



                <div className="input-box">
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    <input type="password" name="password" placeholder="Confirm Password" required />  </div>
                <div className="input-box">

                    <div className="input-box">
                    </div>

                </div>

            </form>

            <Link className="btn btn-warning" to="/">Back</Link>
            <button type="button" class="btn btn-primary">Signup</button>

        </div>
    )
}




