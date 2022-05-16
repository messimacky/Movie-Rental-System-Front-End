
import React from 'react'
import { Link } from 'react-router-dom'
import './CustomerList';
import './Login.css'
import { useState } from 'react';
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

            <Link className="btn btn-warning" to="/">Back</Link>
            <button type="button" class="btn btn-primary">Login</button>
            <a href="#" class="link-primary">Forgot Password?</a>

        </div>
    )
}




