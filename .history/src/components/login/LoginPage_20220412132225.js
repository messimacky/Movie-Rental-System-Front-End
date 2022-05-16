import React from 'react'
import './login/LoginPage.css';

export default function LoginPage() {
    return (
        <div class="form">
            <form>
                <h2>Sign In</h2>
                <div class="input-box">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <input type="email" name="email" placeholder="Username" required />
                </div>
                <div class="input-box">
                    <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                    <input type="password" name="password" placeholder="Password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                </div>
                <div class="input-box">
                    <input type="submit" name="sign-in" value="Login" />
                </div>
                <a href="#">Forget Password</a>
            </form>
        </div>
    )
}
