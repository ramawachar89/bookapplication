import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
export default function NavBar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark" style={{height:"5rem"}}>
  <div className="container-fluid">
    <a className="navbar-brand" style={{fontSize:"2.5rem"}} href="#">#MyBooks</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" style={{fontSize:"2rem"}} aria-current="page" href="#">Home</a>
        <a className="nav-link" style={{fontSize:"2rem"}} href="#">Features</a>
        <a className="nav-link" style={{fontSize:"2rem"}} href="#">Pricing</a>
        <a className="nav-link disabled" style={{fontSize:"2rem"}} href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        <NavLink className="nav-link" style={{fontSize:"2rem",marginLeft:"105rem"}} to="mycart">Cart<BsCart4/></NavLink>
      </div>
    </div>
  </div>
</nav>
       </> 
    )
}