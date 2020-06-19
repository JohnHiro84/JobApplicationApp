import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <hgroup className="header-group">

      <Link to="/" className="header-left">
        <span id="header-icon"></span>
      </Link>

      <div id="header-right-landing" className="header-right">
        <Link className="header-link" to="/Login">Login</Link>
        <Link className="header-link" to="/signup" >Sign Up</Link>
      </div>
      
    </hgroup>


  );
  const personalGreeting = () => (
    <hgroup className="header-group">

      <Link to="/" className="header-left">
        <span id="header-icon"></span>
      </Link>

      <div className="header-right">
        <span className="header-name">{currentUser.username}</span>
        <button className="header-logout-button" onClick={logout}>Log Out</button>
      </div>

    </hgroup>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
