import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import "./css/navbar.css"
// darklord
import Dropdown from "./harshuComponents/destination"


const NavBar = () => {
  return (
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li> 
        <Link to="/" className="nav-link px-4 link-dark underline-on-hover"> Home
        </Link>
      </li>
      <li>
        
        <Dropdown /> 
      </li>
 
      {Auth.loggedIn() ? (
        <>
          <li>
            <Link to={`/users/${Auth.getUser()?.data?.username}`} className="nav-link px-4 link-dark underline-on-hover"> Trip Dashboard </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to={"/signup"} className="nav-link px-4 link-dark underline-on-hover"> Signup</Link>
          </li>
          <li>
            <Link to={"/login"} className="nav-link px-4 link-dark underline-on-hover"> Login </Link>
          </li>
        </>
      )}

      <li>
        <Link to={"/contact"} className="nav-link px-4 link-dark underline-on-hover"> Contact </Link>
      </li>
    </ul>
  );
};
export default NavBar;
