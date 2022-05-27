import React from 'react'
import './header.css'
import './Top.css'
import mylogo from '../../assets/svg/logo.svg'
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Footer } from './footer';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Top() {
  const { user, logout, isAuthenticated } = useAuth0();


  return (
    <div className='header top' >
      <a href="/">
        <img src={mylogo} alt="logo" className='mrLogo'></img>
      </a>
      <div style={{ 'text-decoration': 'none', marginLeft: "10px", display: "inline", }}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
      <div>

        <div style={{ marginLeft: "10px", display: "inline", }}></div>

        <LoginButton />
        {user?.picture && <img className="logio" src={user?.picture} style={{ width: '32px', height: '32px' }} alt="logo" />}
      </div>
    </div>
  )
}
export default Top