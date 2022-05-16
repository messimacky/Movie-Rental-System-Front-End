
import React from 'react'
import './Login.css'
export default function Login() {
    return (
        <div className="form">
            <form>

                <h2>Admin </h2>
                <div className="input-box">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <input type="email" name="email" placeholder="Username" required />
                </div>
                <div className="input-box">
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    <input type="password" name="password" placeholder="Password" required />  </div>
                <div className="input-box">

                    <div className="input-box">
                    </div>

                </div>

            </form>

            <button type="button" class="btn btn-primary">Secondary</button>
            <a href="#" class="link-primary">Forgot Password?</a>

        </div>
    )
}




