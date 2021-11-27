import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo/logo.png";
import "./Header.css";

const Header = () => {
  const auth = getAuth();
  const { user,logOut,setUser, LoginStatus, signInUsingGoogle, signInWithEmailPassword } =
    useAuth();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch((error) => {
        // An error happened.
      });
  };
  console.log(user);
  return (
    <div className="header px-5">
      <div>
        <Link to="/home">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/doctor">Doctors</NavLink>
          <NavLink to="/diagonosis">Diagnosis</NavLink>
          <NavLink to="/career">Career</NavLink>
          <NavLink to="/contactus">Contact Us</NavLink>
          {user.email? 
            <div className="log">
              <button onClick={logOut} variant="light">Logout</button>
              <img src={user.photoURL} alt="Profile Image"/>
            </div>
             :
            <Link  to="/login">Login</Link>
            }
          
        </nav>
      </div>
    </div>
  );
};

export default Header;
